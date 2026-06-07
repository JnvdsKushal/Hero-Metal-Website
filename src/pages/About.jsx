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
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="https://aiagroup.ae/wp-content/uploads/2025/04/360_F_555108297_zND1EuFWwOFsrAHvAVnhx9Nn3UGRrgm0.jpg"
                    alt="Security Camera"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="https://media.istockphoto.com/id/969328162/photo/electronic-door-control-device.jpg?s=612x612&w=0&k=20&c=xYU8k6YerMLSkifxn-L-vSS_498uLBXUnTYB8_jtrRE="
                    alt="Access Control"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="https://static.wixstatic.com/media/5b40e1_bd44e05412fe421786cc3e355d8cb888~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/5b40e1_bd44e05412fe421786cc3e355d8cb888~mv2.jpg"
                    alt="Security Systems"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Three_Surveillance_cameras.jpg/1280px-Three_Surveillance_cameras.jpg"
                    alt="Automated Systems"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-sky-600/10 dark:bg-sky-400/10 rounded-full blur-3xl -z-10"></div>
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
              <StatCard icon={<PhoneCall />} number={t('about.stats.supportTime')} label={t('about.stats.support')} />
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
