import { Link } from "react-router"
import { usePlanets } from "../../api/planetAPI";
import { useTranslation } from "react-i18next";

export default function Planets() {
    const { planets, error, loading } = usePlanets();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    if (loading) return <div>Зареждане...</div>;

    return (
        <section className="max-w-[1400px] !m-auto flex flex-col items-start justify-center !pt-[2em] !pb-[2em]">
            <section className="flex items-center justify-around !p-[1em] gap-[1em]">
                <img className="w-[15%]" src="images/planets-image.png" alt="planets-image" />
                <section>
                    <h1 className="text-[2em] font-bold !mb-[0.5em]">{t('planetsCatalog.h1')}</h1>
                    <p className="max-w-[90ch] text-[1.1em] text-[#333] !mb-[1em] italic">{t('planetsCatalog.p')}</p>
                </section>
            </section>
            <section className="flex justify-around items-center flex-wrap gap-[2em] !ml-auto !mr-auto !mb-[3em]">
                {planets.length > 0 ? (
                    planets.map(planet => (
                        <article key={planet._id} className="bg-white rounded-[0.5em] overflow-hidden w-[400px] !p-[1.3em] c-planet">
                            <img
                                src={planet.image}
                                alt={planet.name[currentLang]}
                                className="w-full object-cover rounded-[0.5em] aspect-square"
                            />
                            <div className="!pt-[1em]">
                                <h2 className="text-[1.4em] font-semibold !mb-[0.6em]">{planet.name[currentLang]}</h2>
                                <p className="text-[#555] !mt-[0.4em] !mb-[0.4em]">{t('planetsCatalog.type')} {planet.type[currentLang]}</p>
                                <p className="text-[#555] !mt-[0.4em] !mb-[0.4em]">{t('planetsCatalog.distance')} {planet.distanceToSun}</p>
                                <p className="text-[#555] !mt-[0.4em] !mb-[0.4em]">{t('planetsCatalog.size')} {planet.size}</p>
                                <Link to={`/planet/${planet._id}`} className="action-btn !block !text-center">{t('slider.btn')}</Link>
                            </div>
                        </article>
                    )
                    )
                ) : <h2>No planets yet</h2>}
            </section>
        </section>
    )
}