import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // ✅ Ensure correct theme detection on load
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  // ✅ Apply theme on mount & update whenever state changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // ✅ Theme Toggle function
  const toggleTheme = () => {
    console.log('Theme toggled! New state:', !isDark);
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 p-2.5 rounded-full 
                 bg-white dark:bg-gray-800 shadow-lg 
                 hover:shadow-xl transition-all duration-300 
                 hover:scale-110 active:scale-95 
                 z-[9999] cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 hover:rotate-180" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 hover:rotate-180" />
      )}
    </button>
  );
}
