import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import useLoaderSizeByWidth from '../../../hooks/useLoaderSizeByWidth'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { EffectCube, Pagination, FreeMode, Autoplay } from 'swiper/modules';
import { ProductCard } from '../ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import Loader from '../Loader/Loader';
import { FingerAnimated } from '../FingerAnimated/FingerAnimated';

export default function SwiperCube({ products = [], handleOpenModal, autoplay }) {
    const loaderSize = useLoaderSizeByWidth();
    const [view, setView] = useState(2)
    const [activeSlide, setActiveSlide] = useState()
    const { devMode } = useSelector(state => state.actionReducer)
    const swiperRef = useRef()
    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }
    const autoplayConfig = autoplay ? {
        delay: 6000,
        disableOnInteraction: false,
    } : false;

    const chunkedArray = chunkArray(products, 4);

    return (
        <>
        <Swiper
            ref={swiperRef}
            effect={'cube'}
            grabCursor={false}
            loop={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            autoplay={autoplayConfig}
            speed={1000}
            pagination={{ clickable: true }}
            modules={[EffectCube, Pagination, FreeMode, Autoplay]}
            className="swiper-cube"
        >
            {chunkedArray.length ? (
                chunkedArray.map((slide, i) => {
                    return (
                    <SwiperSlide key={uuidv4()} virtualIndex={i} style={{ backfaceVisibility: devMode ? 'visible' : 'hidden' }}>
                        {slide.map((element, index, array) => {
                            return <ProductCard key={uuidv4()} mode={view} handleOpenModal={handleOpenModal} product={array[index]} box={index} />
                        })}
                    </SwiperSlide>
                     )
                })
            ) : (
                <SwiperSlide>
                    <div className='loader-wrapper'>
                        <Loader size={loaderSize} />
                    </div>
                </SwiperSlide>
            )
            }
        </Swiper>
        <FingerAnimated />
        </>
        
    );
}
