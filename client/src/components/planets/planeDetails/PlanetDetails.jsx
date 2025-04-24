const planet = {
    _id: "67f6b82a28676018ae10921f",
    name: "Sun",
    type: "Star",
    image: "https://res.cloudinary.com/duvx9lwgf/image/upload/v1743869994/sun_nkrpba.jpg",
    distanceToSun: "0",
    size: "1,392,700 km",
    description: "The Sun is the star at the centre of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity. The Sun orbits the Galactic Center at a distance of 24,000 to 28,000 light-years. Its distance from Earth defines the astronomical unit, which is about 1.496×108 kilometres or about 8 light-minutes. Its diameter is about 1,391,400 km (864,600 mi), 109 times that of Earth. The Sun's mass is about 330,000 times that of Earth, making up about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V), informally called a yellow dwarf, though its light is actually white. It formed approximately 4.6 billion[a] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the centre; the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. Every second, the Sun's core fuses about 600 billion kilograms (kg) of hydrogen into helium and converts 4 billion kg of matter into energy. About 4 to 7 billion years from now, when hydrogen fusion in the Sun's core diminishes to the point where the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature which will cause its outer layers to expand, eventually transforming the Sun into a red giant. After the red giant phase, models suggest the Sun will shed its outer layers and become a dense type of cooling star (a white dwarf), and no longer produce energy by fusion, but will still glow and give off heat from its previous fusion for perhaps trillions of years. After that, it is theorised to become a super dense black dwarf, giving off negligible energy.",
    comments: [],
    ownerId: "67f4092430ebf483121b44d1",
    atmosphere: "Yes – composed mainly of hydrogen and helium",
    fact: "The Sun contains over 99.8% of the total mass of the Solar System.",
    moons: 0,
    namesake: "Derived from Old English 'sunne' – a common Indo-European word for star",
    years: "Approximately 4.6 billion years",
}

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

export default function PlanetDetails() {
    return (
        <section className="flex items-start gap-[3em] !p-[3em] !pt-[5em] !pb-[5em] max-w-[1400px] !m-auto !mt-0 !mb-0">
            <section className="max-w-[65ch] text-[1.1em] leading-relaxed pr-2">
                <div className="grid grid-cols-[auto_1fr] items-start gap-3 bg-yellow-100/70 border border-yellow-300 text-yellow-800 rounded-xl !p-4 !mb-6 shadow-sm">
                    <FaInfoCircle className="text-[1.5em] mt-[0.2em]" />
                    <div>
                        <h3 className="text-[1.2em] font-semibold !mb-1">Fact for {planet.name}:</h3>
                        <p className="italic leading-snug">{planet.fact}</p>
                    </div>
                </div>
                <h1 className="text-[4em] font-russo tracking-tighter">{planet.name}</h1>
                <p>{planet.description}</p>
            </section>
            <section className="flex flex-col justify-start gap-[2em] rounded-[0.3em] sticky top-[5em]">
                <figure className="heroSection">
                    <img src={planet.image} alt={planet.name} className="max-w-[600px] !h-auto object-cover rounded-[0.2em]" />
                </figure>
                <aside className="grid grid-cols-3 gap-3 w-full text-sm">
                    <div className="infoBox col-span-1">
                        <FaGlobeAmericas className="r-icons" />
                        <span><strong className="block">Type:</strong> {planet.type}</span>
                    </div>
                    <div className="infoBox col-span-1">
                        <FaSun className="r-icons" />
                        <span><strong className="block">Distance to Sun:</strong> {planet.distanceToSun}</span>
                    </div>
                    <div className="infoBox col-span-1">
                        <FaRulerCombined className="r-icons" />
                        <span><strong className="block">Size:</strong> {planet.size}</span>
                    </div>
                    <div className="infoBox col-span-1">
                        <FaMoon className="r-icons" />
                        <span><strong className="block">Moons:</strong> {planet.moons}</span>
                    </div>
                    <div className="infoBox col-span-2">
                        <FaRegClock className="r-icons" />
                        <span><strong className="block">Years:</strong> {planet.years}</span>
                    </div>
                    <div className="infoBox col-span-3">
                        <FaWind className="r-icons" />
                        <span><strong className="block">Atmosphere:</strong> {planet.atmosphere}</span>
                    </div>
                    <div className="infoBox col-span-3">
                        <FaUserAstronaut className="r-icons" />
                        <span><strong className="block">Namesake:</strong> {planet.namesake}</span>
                    </div>
                </aside>
            </section>
        </section>
    )
}