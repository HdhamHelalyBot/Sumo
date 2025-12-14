
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';
import { LocationIcon, PhoneIcon, MailIcon, ClockIcon } from '../components/Icons';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; detail: string }> = ({ icon, title, detail }) => (
  <div className="flex items-start space-x-4 rtl:space-x-reverse">
    <div className="flex-shrink-0 text-blue-500 dark:text-blue-400 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{detail}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md">
      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t('contact_title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('contact_intro')}
          </p>
        </div>
        <div className="mt-12 space-y-8">
          <ContactInfoItem
            icon={<LocationIcon className="w-6 h-6" />}
            title={t('contact_address')}
            detail={t('contact_address_detail')}
          />
          <ContactInfoItem
            icon={<PhoneIcon className="w-6 h-6" />}
            title={t('contact_phone')}
            detail={t('contact_phone_detail')}
          />
          <ContactInfoItem
            icon={<MailIcon className="w-6 h-6" />}
            title={t('contact_email')}
            detail={t('contact_email_detail')}
          />
           <ContactInfoItem
            icon={<ClockIcon className="w-6 h-6" />}
            title={t('contact_hours')}
            detail={t('contact_hours_detail')}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
