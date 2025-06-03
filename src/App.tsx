import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importação das páginas
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Componente de Layout com navegação
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com navegação */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-green-500">V.Cezar</Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</Link>
              <Link to="/sobre" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre Mim</Link>
              <Link to="/habilidades" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Habilidades</Link>
              <Link to="/projetos" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projetos</Link>
              <Link to="/contato" className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Contato</Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span className="sr-only">Abrir menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:bg-gray-100 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="text-gray-600 hover:bg-gray-100 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Mim
              </Link>
              <Link 
                to="/habilidades" 
                className="text-gray-600 hover:bg-gray-100 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Habilidades
              </Link>
              <Link 
                to="/projetos" 
                className="text-gray-600 hover:bg-gray-100 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link 
                to="/contato" 
                className="bg-green-500 text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </header>
      
      {/* Main content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-green-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">Email: viniciuscezarvp@hotmail.com</p>
              <p className="text-sm">© {new Date().getFullYear()} Vinícius Cezar. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/vinicius-cezar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="https://github.com/vcezar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// App principal
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
