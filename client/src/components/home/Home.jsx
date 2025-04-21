import FactOfTheDay from "./factOfTheDay/FactOfTheDay";
import HeroSection from "./heroSection/HeroSection";
import LastQuiz from "./lastQuiz/LastQuiz";
import PlanetSlider from "./planetSlider/PlanetSlider";

export default function Home() {
    return (
        <>
            <HeroSection />
            <section className="bg-[#eee]">
                <div className="mb-[0.6em]">
                    <h2 className="text-center !text-[2em] font-bold text-[#fff] bg-dark-bg !pt-[0.5em] !pb-[0.5em]">Journey Through the Solar System</h2>
                </div>
                <PlanetSlider />
                <section className="flex flex-col items-center bg-[#fff]">
                    <FactOfTheDay />
                    <LastQuiz />
                </section>
            </section>
        </>
    )
};