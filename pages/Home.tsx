
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';
import { LightBulbIcon, WrenchScrewdriverIcon, PowerIcon } from '../components/Icons';

const ProductCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const Home: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="space-y-12">
      <section className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400 mb-2">{t('home_title')}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{t('home_subtitle')}</p>
        <div className="max-w-3xl mx-auto text-left rtl:text-right space-y-4 text-gray-700 dark:text-gray-300">
            <p>{t('home_intro_p1')}</p>
            <p>{t('home_intro_p2')}</p>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-center mb-8">{t('home_products_title')}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            icon={<LightBulbIcon className="h-8 w-8 text-green-600 dark:text-green-400" />}
            title={t('product_led_lighting')}
            description={t('product_led_lighting_desc')}
          />
          <ProductCard
            icon={<WrenchScrewdriverIcon className="h-8 w-8 text-green-600 dark:text-green-400" />}
            title={t('product_lighting_tools')}
            description={t('product_lighting_tools_desc')}
          />
          <ProductCard
            icon={<PowerIcon className="h-8 w-8 text-green-600 dark:text-green-400" />}
            title={t('product_switches_sockets')}
            description={t('product_switches_sockets_desc')}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
