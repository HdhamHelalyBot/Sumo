
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';

const Terms: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="bg-white dark:bg-gray-800 py-10 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-8">
          {t('terms_title')}
        </h2>
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
          <h3>{t('terms_l1_title')}</h3>
          <p>{t('terms_l1_p1')}</p>
          
          <h3>{t('terms_l2_title')}</h3>
          <p>{t('terms_l2_p1')}</p>

          <h3>{t('terms_l3_title')}</h3>
          <p>{t('terms_l3_p1')}</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
