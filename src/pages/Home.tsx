import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-xl text-green-500 font-medium mb-2">Olá Mundo!!</h2>
          </motion.div>
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Eu sou <span className="text-green-500">Vinícius Cezar</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-600">
              Desenvolvedor Mobile com React Native
            </h2>
          </motion.div>
        </div>
        
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Frame de celular simulando app */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  {/* Conteúdo do app */}
                  <div className="w-full h-full bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center p-4">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-4">📱</div>
                      <h3 className="text-xl font-bold mb-2">Desenvolvimento Mobile</h3>
                      <p className="text-sm">Criando experiências incríveis com React Native</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Transformando ideias em <span className="text-green-500">aplicativos incríveis</span></h3>
            <p className="text-gray-600 mb-6">
              Especializado em desenvolvimento mobile com React Native, 
              criando aplicativos performáticos e com experiências de usuário excepcionais.
              Transformo conceitos em produtos digitais que as pessoas adoram usar.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Redux</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">UI/UX</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">APIs RESTful</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
