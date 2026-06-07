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
    { id: 'garage', icon: ShieldCheck, image: 'https://images.unsplash.com/photo-1696992812596-3c0d4d2d1299?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'gate', icon: Activity, image: 'https://jyotirlinggroup.com/wp-content/uploads/2024/06/auto-gate-motor-supplier-in-pune.png' },
    { id: 'barriers', icon: Shield, image: 'https://www.fresh222.com/wp-content/uploads/2020/11/IMG_3825-1392x1044.jpg' },
    { id: 'cctv', icon: Cctv, image: 'https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&q=80&w=800' },
    { id: 'access', icon: Key, image: 'https://cdn.prod.website-files.com/669022e11afe3d75b7a05794/6900887acf8828172711a1c6_rfid-badge-authentication-pacs-zero-touch.webp' },
    { id: 'locks', icon: Lock, image: 'https://media.istockphoto.com/id/1217147046/photo/male-hand-using-key-card-to-open-office-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=G_tRrK7wiDok7ldKXHU0wuDo4MR0T4bwjt1mo1s5JTE=' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-full h-56 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(`services.items.${service.id}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-sky-600 dark:text-sky-400 rounded-xl shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {t(`services.items.${service.id}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
                    {t(`services.items.${service.id}.desc`)}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t('services.features.premium')}
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t('services.features.professional')}
                    </li>
                  </ul>
                  <Link to="/quote" className="mt-auto text-sky-600 dark:text-sky-400 font-medium hover:text-sky-700 transition-colors flex items-center gap-1 text-sm group/link">
                    {t('services.quoteBtn')}
                    <span className="group-hover/link:translate-x-1 transition-transform rtl:group-hover/link:-translate-x-1 inline-block rtl:rotate-180">
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
