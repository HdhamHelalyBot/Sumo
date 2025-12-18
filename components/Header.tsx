
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';
import { useTheme } from '../contexts/ThemeContext';
import type { Page } from '../App';
import { SunIcon, MoonIcon, GlobeIcon } from './Icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { language, setLanguage, t } = useLocalization();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks: { page: Page; labelKey: string }[] = [
    { page: 'home', labelKey: 'nav_home' },
    { page: 'led', labelKey: 'nav_led' },
    { page: 'tools', labelKey: 'nav_tools' },
    { page: 'contact', labelKey: 'nav_contact' },
    { page: 'login', labelKey: 'nav_login' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">SUMO</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map(({ page, labelKey }) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button onClick={toggleTheme} aria-label={t('toggle_theme')} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button onClick={toggleLanguage} aria-label={t('toggle_language')} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <GlobeIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <nav className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-around p-2 overflow-x-auto">
         {navLinks.map(({ page, labelKey }) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex-none text-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
      </nav>
    </header>
  );
};

export default Header;
