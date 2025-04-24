import { useTranslation } from "react-i18next";
import { PiSmileySadThin } from "react-icons/pi";

export default function FactOfTheDay({ fact }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const hasFact = fact !== null;

    return (
        <article className="flex justify-center gap-[2em] w-full bg-dark-bg" aria-labelledby="fact-heading">
            <div className="flex items-center max-w-[1400px] w-full flex-wrap gap-[2em] !pt-[10em] !pb-[10em]" style={{ justifyContent: hasFact ? 'space-between' : 'center' }}>
                {fact ? (
                    <>
                        <div className="flex flex-col justify-center items-start">
                            <h2 id="fact-heading">
                                <span className="tracking-tight font-russo text-white text-[5em] leading-[1.3] font-normal block">{t('fact.span1')}</span>
                                <span className="tracking-tight font-russo text-white text-[5em] leading-[1.3] font-normal block">{t('fact.span2')}</span>
                            </h2>
                        </div>
                        <div className="flex max-w-[65ch] flex-col">
                            <h3>
                                <span className="font-pacifico !pr-[0.5em] text-[1.5em] tracking-[0.1em] text-[#f4d03f]">{t('fact.span3')}</span>
                                <span className="text-[2em] text-white font-semibold tracking-widest">{fact.year}</span></h3>
                            <h4 className="title">
                                <span className="font-pacifico !pr-[0.5em] text-[1.5em] tracking-[0.1em] text-[#f4d03f]">{t('fact.span4')}</span>
                                <span className="text-[2em] text-white font-semibold tracking-widest">{fact.title[currentLang]}</span>
                            </h4>
                            <p className="description">
                                <span className="font-pacifico !pr-[0.5em] text-[1.5em] tracking-[0.1em] text-[#f4d03f]">{t('fact.span5')}</span><span className="text-[2em] text-white font-semibold tracking-widest">{fact.description[currentLang]}</span>
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <PiSmileySadThin className="text-white text-[25em]" />
                        <div>
                            <h1 className="text-white text-[1.8em] !mb-[1em] font-semibold">{t('fact.noFactMessage')}</h1>
                            <p className="text-white italic text-[1.3em]">{t('fact.noFactAddedYet')}</p>
                        </div>
                    </>
                )}
            </div>
        </article>
    )
}