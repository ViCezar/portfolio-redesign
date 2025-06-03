import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen py-16 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Sobre <span className="text-green-500">Mim</span></h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              {/* Frame de celular com foto de perfil */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[400px] w-[220px] shadow-xl">
                <div className="w-[90px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[192px] h-[372px] bg-white">
                  {/* Conteúdo do app - Perfil */}
                  <div className="w-full h-full bg-gradient-to-b from-green-500 to-green-700 flex flex-col items-center justify-center p-4">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-white overflow-hidden mb-4">
                      {/* Placeholder para foto de perfil */}
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-3xl">👨‍💻</span>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold">Vinícius Cezar</h3>
                    <p className="text-green-100 text-sm">Desenvolvedor Mobile</p>
                    <div className="mt-4 flex gap-2">
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-600">
                        in
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Desenvolvedor <span className="text-green-500">Mobile</span> com React Native</h2>
            
            <p className="text-gray-700 mb-4">
              Sou um desenvolvedor apaixonado por criar experiências mobile excepcionais. Minha jornada começou com desenvolvimento web, mas encontrei minha verdadeira vocação no universo mobile com React Native.
            </p>
            
            <p className="text-gray-700 mb-4">
              Atualmente, foco em desenvolver aplicativos móveis que combinam performance, design intuitivo e código de alta qualidade. Trabalho com React Native para criar soluções multiplataforma que funcionam perfeitamente tanto em iOS quanto em Android.
            </p>
            
            <p className="text-gray-700 mb-6">
              Minha abordagem é centrada no usuário, priorizando interfaces responsivas e experiências fluidas. Estou sempre aprendendo novas tecnologias e métodos para aprimorar minhas habilidades e entregar produtos digitais que realmente fazem a diferença.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 8.5A.5.5 0 0 1 .5 8H2a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM13 8a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 0 1h-1.5A.5.5 0 0 1 13 8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Experiência</h3>
                  <p className="text-sm text-gray-600">+3 anos em desenvolvimento</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Projetos</h3>
                  <p className="text-sm text-gray-600">Aplicativos mobile e web</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Formação</h3>
                  <p className="text-sm text-gray-600">Desenvolvimento de Software</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
