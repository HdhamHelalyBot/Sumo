
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';
import type { Page } from '../App';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t } = useLocalization();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-4 sm:mb-0">{t('footer_rights')}</p>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <button onClick={() => setCurrentPage('terms')} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">{t('footer_terms')}</button>
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">{t('footer_privacy')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
