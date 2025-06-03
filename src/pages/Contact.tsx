import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
          <h1 className="text-4xl font-bold mb-4">Entre em <span className="text-green-500">Contato</span></h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre desenvolvimento mobile? 
            Entre em contato comigo através dos canais abaixo.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-6 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">viniciuscezarvp@hotmail.com</p>
                    <a href="mailto:viniciuscezarvp@hotmail.com" className="text-green-500 text-sm hover:underline mt-1 inline-block">
                      Enviar email
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">GitHub</h3>
                    <p className="text-gray-600 mt-1">github.com/vcezar</p>
                    <a href="https://github.com/vcezar" target="_blank" rel="noopener noreferrer" className="text-green-500 text-sm hover:underline mt-1 inline-block">
                      Ver perfil
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600 mt-1">linkedin.com/in/vinicius-cezar</p>
                    <a href="https://linkedin.com/in/vinicius-cezar" target="_blank" rel="noopener noreferrer" className="text-green-500 text-sm hover:underline mt-1 inline-block">
                      Conectar
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium text-gray-900 mb-4">Disponível para:</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Projetos Freelance</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Contratação PJ</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Contratação CLT</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Parcerias</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
