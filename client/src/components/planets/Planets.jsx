import { Link } from "react-router"

const planets = [
    {
        _id: "67f6b82a28676018ae10921f",
        name: "Sun",
        type: "Star",
        image: "https://res.cloudinary.com/duvx9lwgf/image/upload/v1743869994/sun_nkrpba.jpg",
        distanceToSun: "0",
        size: "1,392,700 km",
        description: "The Sun is the star at the centre of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity. The Sun orbits the Galactic Center at a distance of 24,000 to 28,000 light-years. Its distance from Earth defines the astronomical unit, which is about 1.496×108 kilometres or about 8 light-minutes. Its diameter is about 1,391,400 km (864,600 mi), 109 times that of Earth. The Sun's mass is about 330,000 times that of Earth, making up about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V), informally called a yellow dwarf, though its light is actually white. It formed approximately 4.6 billion[a] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the centre; the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. Every second, the Sun's core fuses about 600 billion kilograms (kg) of hydrogen into helium and converts 4 billion kg of matter into energy. About 4 to 7 billion years from now, when hydrogen fusion in the Sun's core diminishes to the point where the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature which will cause its outer layers to expand, eventually transforming the Sun into a red giant. After the red giant phase, models suggest the Sun will shed its outer layers and become a dense type of cooling star (a white dwarf), and no longer produce energy by fusion, but will still glow and give off heat from its previous fusion for perhaps trillions of years. After that, it is theorised to become a super dense black dwarf, giving off negligible energy.",
        comments: [],
        ownerId: "67f4092430ebf483121b44d1",
    },
    {
        _id: "67f6b82a28676018ae10911a",
        name: "Mercury",
        type: "Planet",
        image: "https://res.cloudinary.com/duvx9lwgf/image/upload/v1743869994/sun_nkrpba.jpg",
        distanceToSun: "0",
        size: "1,392,700 km",
        description: "The Sun is the star at the centre of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity. The Sun orbits the Galactic Center at a distance of 24,000 to 28,000 light-years. Its distance from Earth defines the astronomical unit, which is about 1.496×108 kilometres or about 8 light-minutes. Its diameter is about 1,391,400 km (864,600 mi), 109 times that of Earth. The Sun's mass is about 330,000 times that of Earth, making up about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V), informally called a yellow dwarf, though its light is actually white. It formed approximately 4.6 billion[a] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the centre; the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. Every second, the Sun's core fuses about 600 billion kilograms (kg) of hydrogen into helium and converts 4 billion kg of matter into energy. About 4 to 7 billion years from now, when hydrogen fusion in the Sun's core diminishes to the point where the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature which will cause its outer layers to expand, eventually transforming the Sun into a red giant. After the red giant phase, models suggest the Sun will shed its outer layers and become a dense type of cooling star (a white dwarf), and no longer produce energy by fusion, but will still glow and give off heat from its previous fusion for perhaps trillions of years. After that, it is theorised to become a super dense black dwarf, giving off negligible energy.",
        comments: [],
        ownerId: "67f4092430ebf483121b44d1",
    },
    {
        _id: "67f6b82a28672018ae10911a",
        name: "Venus",
        type: "Planet",
        image: "https://res.cloudinary.com/duvx9lwgf/image/upload/v1743869994/sun_nkrpba.jpg",
        distanceToSun: "0",
        size: "1,392,700 km",
        description: "The Sun is the star at the centre of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity. The Sun orbits the Galactic Center at a distance of 24,000 to 28,000 light-years. Its distance from Earth defines the astronomical unit, which is about 1.496×108 kilometres or about 8 light-minutes. Its diameter is about 1,391,400 km (864,600 mi), 109 times that of Earth. The Sun's mass is about 330,000 times that of Earth, making up about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V), informally called a yellow dwarf, though its light is actually white. It formed approximately 4.6 billion[a] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the centre; the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. Every second, the Sun's core fuses about 600 billion kilograms (kg) of hydrogen into helium and converts 4 billion kg of matter into energy. About 4 to 7 billion years from now, when hydrogen fusion in the Sun's core diminishes to the point where the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature which will cause its outer layers to expand, eventually transforming the Sun into a red giant. After the red giant phase, models suggest the Sun will shed its outer layers and become a dense type of cooling star (a white dwarf), and no longer produce energy by fusion, but will still glow and give off heat from its previous fusion for perhaps trillions of years. After that, it is theorised to become a super dense black dwarf, giving off negligible energy.",
        comments: [],
        ownerId: "67f4092430ebf483121b44d1",
    },
    {
        _id: "67f6a12a28676018ae10911a",
        name: "Earth",
        type: "Planet",
        image: "https://res.cloudinary.com/duvx9lwgf/image/upload/v1743869994/sun_nkrpba.jpg",
        distanceToSun: "0",
        size: "1,392,700 km",
        description: "The Sun is the star at the centre of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity. The Sun orbits the Galactic Center at a distance of 24,000 to 28,000 light-years. Its distance from Earth defines the astronomical unit, which is about 1.496×108 kilometres or about 8 light-minutes. Its diameter is about 1,391,400 km (864,600 mi), 109 times that of Earth. The Sun's mass is about 330,000 times that of Earth, making up about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V), informally called a yellow dwarf, though its light is actually white. It formed approximately 4.6 billion[a] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the centre; the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. Every second, the Sun's core fuses about 600 billion kilograms (kg) of hydrogen into helium and converts 4 billion kg of matter into energy. About 4 to 7 billion years from now, when hydrogen fusion in the Sun's core diminishes to the point where the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature which will cause its outer layers to expand, eventually transforming the Sun into a red giant. After the red giant phase, models suggest the Sun will shed its outer layers and become a dense type of cooling star (a white dwarf), and no longer produce energy by fusion, but will still glow and give off heat from its previous fusion for perhaps trillions of years. After that, it is theorised to become a super dense black dwarf, giving off negligible energy.",
        comments: [],
        ownerId: "67f4092430ebf483121b44d1",
    },
    {
        _id: "67f6b82a28676018ae99911a",
        name: "Mars",
        type: "Planet",
        image: "https://res.cloudinary.com/duvx9lwgf/image/upload/v1743869994/sun_nkrpba.jpg",
        distanceToSun: "0",
        size: "1,392,700 km",
        description: "The Sun is the star at the centre of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity. The Sun orbits the Galactic Center at a distance of 24,000 to 28,000 light-years. Its distance from Earth defines the astronomical unit, which is about 1.496×108 kilometres or about 8 light-minutes. Its diameter is about 1,391,400 km (864,600 mi), 109 times that of Earth. The Sun's mass is about 330,000 times that of Earth, making up about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V), informally called a yellow dwarf, though its light is actually white. It formed approximately 4.6 billion[a] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the centre; the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. Every second, the Sun's core fuses about 600 billion kilograms (kg) of hydrogen into helium and converts 4 billion kg of matter into energy. About 4 to 7 billion years from now, when hydrogen fusion in the Sun's core diminishes to the point where the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature which will cause its outer layers to expand, eventually transforming the Sun into a red giant. After the red giant phase, models suggest the Sun will shed its outer layers and become a dense type of cooling star (a white dwarf), and no longer produce energy by fusion, but will still glow and give off heat from its previous fusion for perhaps trillions of years. After that, it is theorised to become a super dense black dwarf, giving off negligible energy.",
        comments: [],
        ownerId: "67f4092430ebf483121b44d1",
    },
    {
        _id: "67f6b82a286712318ae10911a",
        name: "Jupiter",
        type: "Planet",
        image: "https://res.cloudinary.com/duvx9lwgf/image/upload/v1743869994/sun_nkrpba.jpg",
        distanceToSun: "0",
        size: "1,392,700 km",
        description: "The Sun is the star at the centre of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity. The Sun orbits the Galactic Center at a distance of 24,000 to 28,000 light-years. Its distance from Earth defines the astronomical unit, which is about 1.496×108 kilometres or about 8 light-minutes. Its diameter is about 1,391,400 km (864,600 mi), 109 times that of Earth. The Sun's mass is about 330,000 times that of Earth, making up about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V), informally called a yellow dwarf, though its light is actually white. It formed approximately 4.6 billion[a] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the centre; the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. Every second, the Sun's core fuses about 600 billion kilograms (kg) of hydrogen into helium and converts 4 billion kg of matter into energy. About 4 to 7 billion years from now, when hydrogen fusion in the Sun's core diminishes to the point where the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature which will cause its outer layers to expand, eventually transforming the Sun into a red giant. After the red giant phase, models suggest the Sun will shed its outer layers and become a dense type of cooling star (a white dwarf), and no longer produce energy by fusion, but will still glow and give off heat from its previous fusion for perhaps trillions of years. After that, it is theorised to become a super dense black dwarf, giving off negligible energy.",
        comments: [],
        ownerId: "67f4092430ebf483121b44d1",
    },
]

export default function Planets() {
    return (
        <section className="flex flex-col items-center justify-center !pt-[2em] !pb-[2em]">
            <h1 className="text-[2em] font-bold text-center">Solar System Planets</h1>

            <section className="flex items-center justify-center !mb-[2em]">
                <img className="w-[15%]" src="images/planets-image.png" alt="planets-image" />
                <p className="max-w-[40ch] text-[1.1em] text-[#333] !mb-[1em] text-center italic">Welcome, cosmic explorer! Prepare to venture through the vast wonders of our solar system. Discover the secrets of each planet and explore their unique characteristics. Select your planet and begin your celestial journey!</p>
            </section>

            <section className="flex justify-around items-center flex-wrap gap-[2em] !ml-auto !mr-auto max-w-[1400px] !mb-[3em]">
                {planets.length > 0 ? (
                    planets.map(planet => (
                        <article key={planet._id} className="bg-white rounded-[0.5em] overflow-hidden w-[400px] !p-[1.3em] c-planet">
                            <img
                                src={planet.image}
                                alt={planet.name}
                                className="w-full object-cover rounded-[0.5em] aspect-square"
                            />
                            <div className="!pt-[1em]">
                                <h2 className="text-[1.4em] font-semibold !mb-[0.6em]">{planet.name}</h2>
                                <p className="text-[#555] !mt-[0.4em] !mb-[0.4em]">Type: {planet.type}</p>
                                <p className="text-[#555] !mt-[0.4em] !mb-[0.4em]">Distance: {planet.distanceToSun}</p>
                                <p className="text-[#555] !mt-[0.4em] !mb-[0.4em]">Size: {planet.size}</p>
                                <Link to={`/planet/${planet._id}`} className="action-btn !block !text-center">Learn More</Link>
                            </div>
                        </article>
                    )
                    )
                ) : <h2>No planets yet</h2>}
            </section>
        </section>
    )
}