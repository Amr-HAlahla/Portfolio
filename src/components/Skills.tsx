import { useState } from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'Programming Languages' },
  { name: 'Python', category: 'Programming Languages' },
  { name: 'C/C++', category: 'Programming Languages' },
  { name: 'Java Script', category: 'Programming Languages' },

  // Backend Technologies
  { name: 'Spring Boot', category: 'Backend Technologies' },
  { name: 'Docker', category: 'Backend Technologies' },
  { name: 'Microservices', category: 'Backend Technologies' },
  { name: 'Kafka', category: 'Backend Technologies' },
  { name: 'Eureka', category: 'Backend Technologies' },
  { name: 'Spring Cloud Gateway', category: 'Backend Technologies' },
  { name: 'Service Discovery', category: 'Backend Technologies' },
  { name: 'API Gateway', category: 'Backend Technologies' },

  // Databases
  { name: 'MongoDB', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },

  // Tools & Others
  { name: 'Git', category: 'Tools & Others' },
  { name: 'Linux', category: 'Tools & Others' },
  { name: 'CI/CD', category: 'Tools & Others' },

  // Soft Skills
  { name: 'Problem Solving', category: 'Soft Skills' },
  { name: 'Team Collaboration', category: 'Soft Skills' },
  { name: 'Communication', category: 'Soft Skills' },
  { name: 'Critical Thinking', category: 'Soft Skills' },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Programming Languages');

  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}