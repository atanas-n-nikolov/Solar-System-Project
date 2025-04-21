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
}

export default function PlanetDetails() {
    return (
        <section className="flex flex-col gap-[3em] !p-[3em] max-w-[1400px] !ml-auto !mr-auto">
            <section className="flex items-center justify-center gap-[2em] rounded-[0.3em] text-white bg-black">
                <figure className="heroSection">
                    <img src={planet.image} alt={planet.name} className="max-w-[800px] h-auto object-cover rounded-[0.2em]" />
                </figure>

                <aside className="aside">
                    <h1 className="text-[4em] font-russo tracking-tighter">{planet.name}</h1>
                    <p className="text-[1.3em]"><strong>Type:</strong> {planet.type}</p>
                    <p className="text-[1.3em]"><strong>Distance to Sun:</strong> {planet.distanceToSun}</p>
                    <p className="text-[1.3em]"><strong>Size:</strong> {planet.size}</p>
                </aside>
            </section>

            <section className="!mt-[1.5em] text-[1.2em]">
                <h2 className="text-[1.3em] font-bold !mt-[1.5em] !mb-[1em]">More Information</h2>
                <p>{planet.description}</p>
            </section>
        </section>

    )
}