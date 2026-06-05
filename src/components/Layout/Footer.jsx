import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Shield, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Desc */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-sky-600 text-white p-1.5 rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Hero Metal
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">{t('footer.solutionsTitle')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('services.items.garage.title')}</Link></li>
              <li><Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('services.items.gate.title')}</Link></li>
              <li><Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('services.items.cctv.title')}</Link></li>
              <li><Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('services.items.access.title')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">{t('footer.companyTitle')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-500 shrink-0 mt-0.5" />
                <span>{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-600 dark:text-sky-500 shrink-0" />
                <span dir="ltr">{t('contact.info.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-600 dark:text-sky-500 shrink-0" />
                <span>{t('contact.info.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-500">
          <p>© {currentYear} Hero Metal Maroc. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
