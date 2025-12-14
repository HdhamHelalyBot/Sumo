
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';
import { LightBulbIcon } from '../components/Icons';

const LedProductItem: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
            <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);

const LedProducts: React.FC = () => {
    const { t } = useLocalization();

    const products = [
        { titleKey: 'led_item_1_title', descKey: 'led_item_1_desc' },
        { titleKey: 'led_item_2_title', descKey: 'led_item_2_desc' },
        { titleKey: 'led_item_3_title', descKey: 'led_item_3_desc' },
        { titleKey: 'led_item_4_title', descKey: 'led_item_4_desc' },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    {t('led_title')}
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    {t('led_intro')}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map(product => (
                    <LedProductItem key={product.titleKey} title={t(product.titleKey)} description={t(product.descKey)} />
                ))}
            </div>
        </div>
    );
};

export default LedProducts;
