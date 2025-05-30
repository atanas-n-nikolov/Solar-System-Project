import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="flex items-center text-center relative bg-dark-bg text-white h-[900px] ">
            <div aria-hidden="true" className="absolute inset-0 bg-[url('/images/hero-image.png')] bg-cover bg-center opacity-50"></div>
            <div className="text-left max-w-[1400px] !pl-[2em] !pr-[2em] !mr-auto !ml-auto w-full">
                <div className="relative">
                    <h1 className="text-[2.5em] font-bold !mb-[0.5em]">{t('hero.h1')}</h1>
                    <p className="text-[1.2em] !mb-[1em]">{t('hero.p')}</p>
                    <Link to="/planets" className="action-btn">{t('hero.btn')}</Link>
                </div>
            </div>
        </section>
    )
};