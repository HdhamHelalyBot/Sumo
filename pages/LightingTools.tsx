
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';
import { WrenchScrewdriverIcon } from '../components/Icons';

const ToolItem: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
            <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 dark:text-red-400" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);

const LightingTools: React.FC = () => {
    const { t } = useLocalization();
    
    const tools = [
        { titleKey: 'tools_item_1_title', descKey: 'tools_item_1_desc' },
        { titleKey: 'tools_item_2_title', descKey: 'tools_item_2_desc' },
        { titleKey: 'tools_item_3_title', descKey: 'tools_item_3_desc' },
        { titleKey: 'tools_item_4_title', descKey: 'tools_item_4_desc' },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    {t('tools_title')}
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    {t('tools_intro')}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tools.map(tool => (
                    <ToolItem key={tool.titleKey} title={t(tool.titleKey)} description={t(tool.descKey)} />
                ))}
            </div>
        </div>
    );
};

export default LightingTools;
