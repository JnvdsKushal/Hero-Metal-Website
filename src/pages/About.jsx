import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Settings, Users, PhoneCall } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-sky-600 dark:text-sky-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
            {t('about.subtitle')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('about.title')}
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                alt="Modern security monitoring and systems" 
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-slate-900/60 to-transparent transition-colors duration-300"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <StatCard icon={<Shield />} number="10+" label={t('about.stats.years')} />
              <StatCard icon={<Settings />} number="500+" label={t('about.stats.projects')} />
              <StatCard icon={<Users />} number="98%" label={t('about.stats.clients')} />
              <StatCard icon={<PhoneCall />} number="24/7" label={t('about.stats.support')} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-start gap-4 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="p-3 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-lg transition-colors duration-300">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{number}</div>
        <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">{label}</div>
      </div>
    </div>
  );
}
