import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function PlanetSlider({ planets }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
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
                                alt={planet.name[currentLang]}
                                className="h-[200px] rounded-[0.5em] object-cover pointer-events-none select-none"
                            />
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-[1.5em] font-semibold text-[#333] !mb-[0.5em] overflow-hidden text-ellipsis whitespace-nowrap">{planet.name[currentLang]}</h2>
                                <p className="text-[1.1em] text-[#666] italic !mb-[0.4em]">Type: {planet.type[currentLang]}</p>
                                <Link to={`/planet/${planet._id}`} className="action-btn opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{t('slider.btn')}</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}