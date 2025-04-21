import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';


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

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef, useState } from "react";

export default function PlanetSlider() {
    const [isGrabbing, setIsGrabbing] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="relative max-w-[1400px] !ml-auto !mr-auto !pt-[10em] !pb-[10em] !pl-[2em] !pr-[2em]">
            <button
                ref={prevRef}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-gray-700 hover:text-[#007aff]"
            >
                <FaAngleLeft />
            </button>
            <button
                ref={nextRef}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-gray-700 hover:text-[#007aff]"
            >
                <FaAngleRight />
            </button>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={4}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                pagination={{ clickable: true }}
                className="!pb-12 custom-swiper"
            >
                {planets.map((planet) => (
                    <SwiperSlide key={planet._id}>
                        <div className="group cursor-grab active:cursor-grabbing select-none planet-shadow bg-white flex flex-col justify-between items-center relative max-w-[280px] w-full h-[380px] !mt-[1em] !mb-[1em] !ml-auto !mr-auto !p-[1.2em] rounded-[0.5em]">
                            <img
                                src={planet.image}
                                alt={planet.name}
                                className="h-[200px] rounded-[0.5em] object-cover pointer-events-none select-none"
                            />
                            <div className="flex flex-col items-center justify-center !mt-[1em]">
                                <h2 className="text-[1.5em] font-semibold text-[#333] !mb-[0.5em] overflow-hidden text-ellipsis whitespace-nowrap">{planet.name}</h2>
                                <p className="text-[1.1em] text-[#666] italic !mb-[0.4em]">Type: {planet.type}</p>
                                <Link to={`/planet/${planet._id}`} className="action-btn opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Learn More</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}