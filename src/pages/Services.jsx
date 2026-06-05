import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Key, Shield, Cctv, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  const { t } = useTranslation();

  const servicesList = [
    { id: 'garage', icon: ShieldCheck },
    { id: 'gate', icon: Activity },
    { id: 'barriers', icon: Shield },
    { id: 'cctv', icon: Cctv },
    { id: 'access', icon: Key },
    { id: 'locks', icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 transition-colors duration-300">
      {/* Header */}
      <div className="bg-sky-600 dark:bg-slate-900 py-20 mb-16 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay transition-opacity duration-300"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 transition-colors duration-300"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-sky-100 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300"
          >
            {t('services.subtext')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-4 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {t(`services.items.${service.id}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {t(`services.items.${service.id}.desc`)}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Premium Quality
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Professional Installation
                    </li>
                  </ul>
                  <Link to="/quote" className="text-sky-600 dark:text-sky-400 font-medium hover:text-sky-700 transition-colors flex items-center gap-1 text-sm group">
                    {t('services.quoteBtn')} 
                    <span className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 inline-block rtl:rotate-180">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
