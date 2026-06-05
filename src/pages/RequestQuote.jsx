import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function RequestQuote() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-300">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-200 dark:border-slate-800 transition-colors duration-300"
        >
          <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">{t('request.successTitle')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 transition-colors duration-300">
            {t('request.successMessage')}
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-300"
          >
            {t('request.submitAnother')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
            {t('request.title')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors duration-300">
            {t('request.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300"
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.fullName')}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.company')}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.email')}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.phone')}</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300 text-left" dir="ltr" />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.serviceType')}</label>
                  <select required className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300">
                    <option value="">{t('request.form.serviceSelect')}</option>
                    <option value="garage">{t('request.form.services.garage')}</option>
                    <option value="gate">{t('request.form.services.gate')}</option>
                    <option value="barrier">{t('request.form.services.barrier')}</option>
                    <option value="cctv">{t('request.form.services.cctv')}</option>
                    <option value="access">{t('request.form.services.access')}</option>
                    <option value="locks">{t('request.form.services.locks')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.projectType')}</label>
                  <select required className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300">
                    <option value="">{t('request.form.projectSelect')}</option>
                    <option value="residential">{t('request.form.projects.residential')}</option>
                    <option value="commercial">{t('request.form.projects.commercial')}</option>
                    <option value="industrial">{t('request.form.projects.industrial')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.budget')}</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300">
                    <option value="">{t('request.form.budgetSelect')}</option>
                    <option value="under5k">{t('request.form.budgets.under5k')}</option>
                    <option value="5k-20k">{t('request.form.budgets.5k_20k')}</option>
                    <option value="20k-50k">{t('request.form.budgets.20k_50k')}</option>
                    <option value="over50k">{t('request.form.budgets.over50k')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.timeline')}</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300">
                    <option value="">{t('request.form.timelineSelect')}</option>
                    <option value="immediate">{t('request.form.timelines.immediate')}</option>
                    <option value="1month">{t('request.form.timelines.1month')}</option>
                    <option value="3months">{t('request.form.timelines.3months')}</option>
                    <option value="planning">{t('request.form.timelines.planning')}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('request.form.description')}</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white transition-colors duration-300" placeholder={t('request.form.descriptionPlaceholder')}></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full flex justify-center items-center gap-2 py-4 px-8 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  {t('request.form.submit')}
                  <Send className="w-5 h-5 rtl:-scale-x-100" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
