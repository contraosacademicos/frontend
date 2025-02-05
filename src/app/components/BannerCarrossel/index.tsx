"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './styles.css';

const banners = [
    { id: 1, imageUrl: '/banner.jpg', alt: 'Banner 1' },
    { id: 2, imageUrl: '/banner.jpg', alt: 'Banner 2' },
];

const BannerCarrossel: React.FC = () => {
    return (
        <div className="banner-carrossel">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="banner-slide">
                        <img src={banner.imageUrl} alt={banner.alt} className="banner-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerCarrossel;