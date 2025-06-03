import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "App de Finanças",
      description: "Aplicativo de controle financeiro pessoal com React Native",
      image: "/placeholder-finance.png",
      technologies: ["React Native", "Redux", "Firebase"],
      color: "green"
    },
    {
      id: 2,
      title: "Delivery App",
      description: "Aplicativo de entrega de comida com geolocalização",
      image: "/placeholder-delivery.png",
      technologies: ["React Native", "Context API", "Maps API"],
      color: "orange"
    },
    {
      id: 3,
      title: "Chat Social",
      description: "App de mensagens em tempo real com notificações",
      image: "/placeholder-chat.png",
      technologies: ["React Native", "Firebase", "Push Notifications"],
      color: "blue"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Aplicativo para acompanhamento de atividades físicas",
      image: "/placeholder-fitness.png",
      technologies: ["React Native", "HealthKit", "Google Fit"],
      color: "red"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen py-16 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Meus <span className="text-green-500">Projetos</span></h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos meus projetos mobile desenvolvidos com React Native.
            Cada aplicativo representa um desafio único e soluções personalizadas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Frame de celular com projeto */}
              <div className="relative mb-6 transform transition-transform hover:scale-105 hover:-rotate-2">
                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                    {/* Conteúdo do app - Screenshot do projeto */}
                    <div className={`w-full h-full bg-${project.color}-100 flex flex-col`}>
                      {/* Barra de status do app */}
                      <div className={`h-10 bg-${project.color}-500 flex items-center px-4`}>
                        <div className="flex-1"></div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                          <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                          <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
                        </div>
                      </div>
                      
                      {/* Conteúdo do app */}
                      <div className="flex-1 flex flex-col items-center justify-center p-6">
                        <div className={`w-20 h-20 rounded-full bg-${project.color}-500 flex items-center justify-center text-white text-3xl mb-6`}>
                          {project.id === 1 && '💰'}
                          {project.id === 2 && '🍕'}
                          {project.id === 3 && '💬'}
                          {project.id === 4 && '🏃'}
                        </div>
                        <h3 className={`text-xl font-bold text-${project.color}-700 mb-2`}>{project.title}</h3>
                        <p className="text-gray-600 text-center text-sm mb-6">{project.description}</p>
                        
                        {/* UI Elements */}
                        <div className="w-full space-y-3">
                          <div className={`w-full h-10 rounded-lg bg-${project.color}-200`}></div>
                          <div className={`w-full h-10 rounded-lg bg-${project.color}-200`}></div>
                          <div className={`w-full h-24 rounded-lg bg-${project.color}-200`}></div>
                        </div>
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className={`h-16 bg-${project.color}-50 border-t border-${project.color}-200 flex items-center justify-around px-6`}>
                        <div className={`w-10 h-10 rounded-full bg-${project.color}-200`}></div>
                        <div className={`w-10 h-10 rounded-full bg-${project.color}-500`}></div>
                        <div className={`w-10 h-10 rounded-full bg-${project.color}-200`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 bg-${project.color}-100 text-${project.color}-800 rounded-full text-xs`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={`/projeto/${project.id}`} 
                  className={`inline-block px-6 py-2 bg-${project.color}-500 text-white rounded-full text-sm font-medium hover:bg-${project.color}-600 transition-colors`}
                >
                  Ver detalhes
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Quer ver mais?</h2>
          <p className="text-gray-600 mb-6">
            Visite meu GitHub para conferir outros projetos e contribuições.
          </p>
          <a 
            href="https://github.com/vcezar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
