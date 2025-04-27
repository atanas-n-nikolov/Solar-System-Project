import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useLanguage } from '../../context/LangContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Header() {
    const { t } = useTranslation();
    const { email, isAuthenticated, _id, role } = useAuth();
    const { changeLanguage, language } = useLanguage();
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);

    const toggleLanguageMenu = () => setShowLanguageMenu(!showLanguageMenu);

    return (
        <header className="bg-dark-bg text-white">
            <div className="flex items-center justify-between !ml-auto !mr-auto max-w-[1800px] l-header">
                <section className="logoSection" aria-label="Site logo">
                    <Link to="/" className="flex items-center gap-8">
                        <img
                            src="/images/solar-system.svg"
                            alt="Solar System logo"
                            className="h-[3em] w-auto"
                        />
                        <span className="text-white text-[1.5em] font-bold">Solar System</span>
                    </Link>
                </section>
                <nav className="mainNavigation" aria-label="Main navigation">
                    <ul className="flex justify-around items-center gap-[1.25em]">
                        <li className="p-header">
                            <Link to="/" className="nav-link">{t('header.home')}</Link>
                        </li>
                        <li className="p-header">
                            <Link to="/planets" className="nav-link">{t('header.planets')}</Link>
                        </li>

                        {isAuthenticated ? (
                            <>
                                <li className="p-header">
                                    <Link to="/quiz" className="nav-link">{t('header.quiz')}</Link>
                                </li>
                                {role === 'admin' ? (
                                    <li className="p-header">
                                        <Link to="/admin-dashboard" className="nav-link">2</Link>
                                    </li>
                                ) : (
                                    <li className="p-header">
                                        <Link to={`/profile/${_id}`} className="nav-link">{email}</Link>
                                    </li>
                                )}
                                <li className="p-header">
                                    <Link to="/logout" className="nav-link">{t('header.logout')}</Link>
                                </li>
                            </>
                        ) : (
                            <li className="p-header">
                                <Link to="/sign-up" className="nav-link">{t('header.signUp')}</Link>
                            </li>
                        )}

                        <li className="p-header relative">
                            <button onClick={toggleLanguageMenu} className="nav-link flex items-center gap-2">
                                <img
                                    src={language === 'en' ? '/icons/en.ico' : '/icons/bg.ico'}
                                    alt={language === 'en' ? 'English' : 'Български'}
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                            </button>

                            {showLanguageMenu && (
                                <ul className="z-[999] absolute right-0 bg-white text-black shadow-lg !p-2 rounded !mt-2">
                                    <li>
                                        <button onClick={() => { changeLanguage('bg'); setShowLanguageMenu(false); }} className="block !p-2 hover:bg-gray-100">
                                            {t('header.languageBg')}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => { changeLanguage('en'); setShowLanguageMenu(false); }} className="block !p-2 hover:bg-gray-100">
                                            {t('header.languageEn')}
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
