import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Key, Shield, Cctv, Lock } from 'lucide-react';

import heroBackground from '../assets/background.jpeg';
import imgGarageDoor from '../assets/services/garage-door.png';
import imgGateAutomation from '../assets/services/gate-automation.png';
import imgVehicleBarriers from '../assets/services/vehicle-barriers.png';
import imgCctv from '../assets/services/cctv.png';
import imgAccessControl from '../assets/services/access-control.png';
import imgSmartLocks from '../assets/services/smart-locks.png';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${heroBackground})` }}></div>

        {/* Theme Overlays - Minimal overlay for maximum image visibility */}
        <div className="absolute inset-0 bg-slate-50/70 dark:bg-slate-900/80 z-0 transition-colors duration-300"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left relative"
            >
              {/* Soft glow behind text for excellent readability against dark/complex backgrounds */}
              <div className="absolute -inset-x-10 -inset-y-16 bg-white/60 dark:bg-slate-900/50 blur-3xl rounded-full -z-10 pointer-events-none"></div>
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-400/10 rounded-full border border-sky-200 dark:border-sky-400/20 transition-colors duration-300">
                  {t('hero.badges.secure')}
                </span>
                <span className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {t('hero.badges.active')}
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                {t('hero.title')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-sky-400 dark:to-cyan-300">
                  {t('hero.subtitle')}
                </span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed transition-colors duration-300">
                {t('hero.description')}
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link to="/quote" className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 group">
                  {t('hero.buttons.quote')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white border border-slate-200 dark:border-white/10 rounded-lg font-medium transition-all shadow-sm dark:backdrop-blur-sm">
                  {t('hero.buttons.discover')}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('services.subtext')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Cards */}
            <ServiceCard
              icon={<ShieldCheck className="w-8 h-8 text-sky-500" />}
              image={imgGarageDoor}
              title={t('services.items.garage.title')}
              desc={t('services.items.garage.desc')}
            />
            <ServiceCard
              icon={<Activity className="w-8 h-8 text-sky-500" />}
              image={imgGateAutomation}
              title={t('services.items.gate.title')}
              desc={t('services.items.gate.desc')}
            />
            <ServiceCard
              icon={<Shield className="w-8 h-8 text-sky-500" />}
              image={imgVehicleBarriers}
              title={t('services.items.barriers.title')}
              desc={t('services.items.barriers.desc')}
            />
            <ServiceCard
              icon={<Cctv className="w-8 h-8 text-sky-500" />}
              image={imgCctv}
              title={t('services.items.cctv.title')}
              desc={t('services.items.cctv.desc')}
            />
            <ServiceCard
              icon={<Key className="w-8 h-8 text-sky-500" />}
              image={imgAccessControl}
              title={t('services.items.access.title')}
              desc={t('services.items.access.desc')}
            />
            <ServiceCard
              icon={<Lock className="w-8 h-8 text-sky-500" />}
              image={imgSmartLocks}
              title={t('services.items.locks.title')}
              desc={t('services.items.locks.desc')}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 dark:bg-sky-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.subtitle')}</h2>
          <Link to="/quote" className="inline-block px-8 py-4 bg-white text-sky-900 hover:bg-slate-50 rounded-lg font-bold transition-all shadow-xl">
            {t('services.quoteBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, image, title, desc }) {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col"
    >
      <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform duration-300 text-sky-600 dark:text-sky-500 self-start">
        {icon}
      </div>
      <div className="w-full h-48 sm:h-[200px] overflow-hidden rounded-xl mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
        {desc}
      </p>
    </motion.div>
  );
}
