
import React, { useState, useCallback } from 'react';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LedProducts from './pages/LedProducts';
import LightingTools from './pages/LightingTools';
import Contact from './pages/Contact';

export type Page = 'home' | 'led' | 'tools' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'led':
        return <LedProducts />;
      case 'tools':
        return <LightingTools />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }, [currentPage]);

  return (
    <LocalizationProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen font-sans text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderPage()}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
