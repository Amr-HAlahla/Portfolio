import { Github, Linkedin, Mail } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Amr Halahla
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Backend Developer | Microservices | AI Enthusiast
            </h2>
            <div className="text-lg md:text-xl">
              <TypewriterEffect />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1D9FzN-kbeFUrJ_14ItPoQSL0eTeIt-Ll"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              download
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/Amr-HAlahla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/amr-halahla-ba22672bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:3mro7ala7la@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
            <img
              src="https://i.ibb.co/CF7QScc/killua-pfp.jpg"
              alt="Amr Halahla"
              className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-2xl ring-4 ring-white dark:ring-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}