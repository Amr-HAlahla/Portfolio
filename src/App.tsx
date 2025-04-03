import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Thanks from './components/Thanks';

function MainContent() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <ThemeToggle />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;