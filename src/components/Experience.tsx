import { Briefcase, GraduationCap, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineering Intern',
    company: 'Exalt Technologies Ltd.',
    period: 'July 2024 – Sep 2024',
    description: [
      'Developed and optimized RESTful APIs using Java Spring Boot',
      'Worked with microservices architecture, leveraging Kafka and Docker for scalability',
      'Implemented secure authentication using OAuth and JWT',
      'Collaborated with senior developers on high-impact projects'
    ],
    icon: <Briefcase className="w-4 h-4 text-white" />,
    type: 'work'
  },
  {
    title: 'Web Development Bootcamp',
    company: 'Buthor Company',
    period: 'Mar 2023 – Apr 2023',
    description: [
      'Intensive training in modern web development technologies',
      'Mastered HTML, CSS, and JavaScript fundamentals',
      'Developed responsive and interactive web applications',
      'Gained practical experience with real-world projects'
    ],
    icon: <GraduationCap className="w-4 h-4 text-white" />,
    type: 'education'
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Timeline dot */}
                <div className="absolute w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full -left-[1.15rem] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  {exp.icon}
                </div>

                <div className="ml-6 pl-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover effect overlay */}
                    <div
                      className={`absolute inset-0 bg-blue-600/5 dark:bg-blue-400/5 rounded-2xl transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}