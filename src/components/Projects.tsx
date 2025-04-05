import { useState } from 'react';
import { Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'SpringMicroHub',
    description: 'Built a scalable microservices ecosystem for user management, file storage, and notifications using Spring Boot, Kafka, and Docker, with Eureka for service discovery and Spring Cloud Gateway for routing.',
    tags: ['Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'Eureka', 'Spring Cloud Gateway'],
    githubUrl: 'https://github.com/Amr-HAlahla/SpringMicroHub',
    category: 'Backend'
  },
  {
    title: 'Microservices Architecture',
    description: 'Built a scalable microservices system using Spring Boot, Kafka, and Docker with service discovery and load balancing.',
    tags: ['Spring Boot', 'Kafka', 'Docker', 'MongoDB'],
    githubUrl: 'https://github.com/Amr-HAlahla/Backend-SpringBoot-Project',
    category: 'Backend'
  },
  {
    title: 'AI Magnetic Cave Game',
    description: 'Implemented an AI-powered game using the Minimax algorithm for optimal path finding in a magnetic cave environment.',
    tags: ['Python', 'AI', 'Minimax', 'Pygame'],
    githubUrl: 'https://github.com/Amr-HAlahla/AI-Magnetic-Cave-Game',
    category: 'AI'
  },
  {
    title: 'Real-Time Wheat Distribution',
    description: 'Developed a multi-process simulation system for wheat distribution using IPC mechanisms.',
    tags: ['C', 'IPC', 'Multi-processing'],
    githubUrl: 'https://github.com/Amr-HAlahla/REALTIME-PROJECT2',
    category: 'Real-time Systems'
  },
  {
    title: 'RISC Processor',
    description: 'Designed and implemented a RISC processor with five pipeline stages using Verilog.',
    tags: ['Verilog', 'Hardware Design', 'Pipelining'],
    githubUrl: 'https://github.com/Amr-HAlahla/Multi-Cycle-RISC-Processor-In-Verilog',
    category: 'Embedded Systems'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const categories: (Project['category'] | 'All')[] = ['All', 'Backend', 'AI', 'Real-time Systems', 'Embedded Systems'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${filter === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}