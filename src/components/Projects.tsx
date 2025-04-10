import { useState } from 'react';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'SpringMicroHub',
    description: 'Built a scalable microservices ecosystem for user management, file storage, and notifications using Spring Boot, Kafka, and Docker, with Eureka for service discovery and Spring Cloud Gateway for routing.',
    tags: ['Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'Eureka', 'Spring Cloud Gateway', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/Amr-HAlahla/SpringMicroHub',
    category: 'Backend'
  },
  {
    title: 'Microservices Architecture',
    description: 'Built a scalable microservices system using Spring Boot, Kafka, and Docker with service discovery and load balancing.',
    tags: ['Spring Boot', 'Kafka', 'Docker', 'MongoDB', 'MySQL ', 'Eureka', 'Spring Cloud Gateway'],
    githubUrl: 'https://github.com/Amr-HAlahla/Backend-SpringBoot-Project',
    category: 'Backend'
  },
  {
    "title": "Humanitarian Aid Distribution Simulation",
    "description": "Developed a complex multi-process simulation of a humanitarian aid distribution operation in a hostile environment. The system models the entire aid delivery pipeline from cargo planes to families, incorporating inter-process communication using POSIX shared memory, semaphores, and signals. Features include dynamic resource management, hostile interference simulation, and configurable parameters for realistic scenario modeling.",
    "tags": ["C", "Multi-processing", "POSIX", "Shared Memory", "Semaphores", "Signals", "Inter-process Communication"],
    "githubUrl": "https://github.com/Amr-HAlahla/REALTIME-PROJECT2",
    "category": "Real-time Systems"
  },
  {
    title: 'Real-Time Ball Passing Game',
    description: 'Developed a multi-process simulation of a team-based ball passing game with real-time visualization, implementing inter-process communication using Unix signals and FIFO pipes. Features include energy management, team coordination, and a graphical interface built with OpenGL/GLUT.',
    tags: ['C', 'Multi-processing', 'Unix', 'Process Management', 'Inter-process Communication', 'Signals', 'FIFO Pipes'],
    githubUrl: 'https://github.com/Amr-HAlahla/REALTIME-PROJECT1',
    category: 'Real-time Systems'
  },
  {
    title: 'AI Magnetic Cave Game',
    description: 'Implemented an AI-powered game using the Minimax algorithm for optimal path finding in a magnetic cave environment.',
    tags: ['Python', 'AI', 'Minimax', 'Pygame'],
    githubUrl: 'https://github.com/Amr-HAlahla/AI-Magnetic-Cave-Game',
    category: 'AI'
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
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;

  const categories: (Project['category'] | 'All')[] = ['All', 'Backend', 'AI', 'Real-time Systems', 'Embedded Systems'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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
              onClick={() => {
                setFilter(category);
                setCurrentPage(0);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${filter === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
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

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                      ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}