import { useTranslation } from "react-i18next";
import FactOfTheDay from "./factOfTheDay/FactOfTheDay";
import HeroSection from "./heroSection/HeroSection";
import LastQuiz from "./lastQuiz/LastQuiz";
import PlanetSlider from "./planetSlider/PlanetSlider";
import { useHome } from "../../api/homeAPI";
import ErrorNotification from "../error/ErrorNotification";

export default function Home() {
    const { t } = useTranslation();
    const { data, error, loading} = useHome();

    if (loading) return <div>Зареждане...</div>;
    

    return (
        <>
            {error && <ErrorNotification error={error} />}
            <HeroSection />
            <section className="bg-[#eee]">
                <div className="mb-[0.6em]">
                    <h2 className="text-center !text-[2em] font-bold text-[#fff] bg-dark-bg !pt-[0.5em] !pb-[0.5em]">{t('home.h1')}</h2>
                </div>
                <PlanetSlider planets={data.planets}/>
                <section className="flex flex-col items-center bg-[#fff]">
                    <FactOfTheDay fact={data.fact}/>
                    <LastQuiz latestQuiz={data.latestQuiz}/>
                </section>
            </section>
        </>
    )
};