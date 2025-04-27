import { useNavigate, useParams } from 'react-router';


import {
    FaGlobeAmericas,
    FaSun,
    FaRulerCombined,
    FaMoon,
    FaRegClock,
    FaWind,
    FaUserAstronaut,
    FaInfoCircle
} from 'react-icons/fa';
import { usePlanet } from '../../../api/planetAPI';
import { useTranslation } from 'react-i18next';
import ErrorNotification from '../../error/ErrorNotification';

export default function PlanetDetails() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const { planetId } = useParams();
    const navigate = useNavigate();
    const { planet, setPlanet, error, loading } = usePlanet(planetId);

    if (loading) return <div>Loading...</div>;
    if (!planet) return null;
    if (error) {
        return <ErrorNotification error={error} />;
    }

    return (
        <section className="flex items-start gap-[3em] !p-[3em] !pt-[5em] !pb-[5em] max-w-[1400px] !m-auto !mt-0 !mb-0">
            <section className="max-w-[65ch] text-[1.1em] leading-relaxed pr-2">
                <div className="grid grid-cols-[auto_1fr] items-start gap-3 bg-yellow-100/70 border border-yellow-300 text-yellow-800 rounded-[0.2em] !p-4 !mb-6 shadow-sm">
                    <FaInfoCircle className="text-[1.5em] mt-[0.2em]" />
                    <div>
                        <h3 className="text-[1.2em] font-semibold !mb-1">{t('details.h3')}{planet.name[currentLang]}:</h3>
                        <p className="italic leading-snug">{planet.fact[currentLang]}</p>
                    </div>
                </div>
                <h1 className="text-[4em] font-russo tracking-tighter">{planet.name[currentLang]}</h1>
                <p>{planet.description[currentLang]}</p>
            </section>
            <section className="flex flex-col justify-start gap-[2em] rounded-[0.3em] sticky top-[5em]">
                <figure className="heroSection">
                    <img src={planet.image} alt={planet.name} className="max-w-[600px] !h-auto object-cover rounded-[0.2em]" />
                </figure>
                <aside className="grid grid-cols-3 gap-3 w-full text-sm">
                    <div className="infoBox col-span-1">
                        <FaGlobeAmericas className="r-icons" />
                        <span><strong className="block">{t('details.span1')}</strong> {planet.type[currentLang]}</span>
                    </div>
                    <div className="infoBox col-span-1">
                        <FaSun className="r-icons" />
                        <span><strong className="block">{t('details.span2')}</strong> {planet.distanceToSun[currentLang]}</span>
                    </div>
                    <div className="infoBox col-span-1">
                        <FaRulerCombined className="r-icons" />
                        <span><strong className="block">{t('details.span3')}</strong> {planet.size[currentLang]}</span>
                    </div>
                    <div className="infoBox col-span-1">
                        <FaMoon className="r-icons" />
                        <span><strong className="block">{t('details.span4')}</strong> {planet.moons[currentLang]}</span>
                    </div>
                    <div className="infoBox col-span-2">
                        <FaRegClock className="r-icons" />
                        <span><strong className="block">{t('details.span5')}</strong> {planet.years[currentLang]}</span>
                    </div>
                    <div className="infoBox col-span-3">
                        <FaWind className="r-icons" />
                        <span><strong className="block">{t('details.span6')}</strong> {planet.atmosphere[currentLang]}</span>
                    </div>
                    <div className="infoBox col-span-3">
                        <FaUserAstronaut className="r-icons" />
                        <span><strong className="block">{t('details.span7')}</strong> {planet.namesake[currentLang]}</span>
                    </div>
                </aside>
            </section>
        </section>
    )
}