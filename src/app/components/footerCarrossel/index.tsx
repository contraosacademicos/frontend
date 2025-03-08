import React, { Component, useRef } from "react";
import Image from 'next/image';
import Slider from "react-slick";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "#DBA232" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "#DBA232" }}
            onClick={onClick}
        />
    );
}

function footerCarrossel() {

    const sliderRef = useRef<Slider | null>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: () => (
            <div className="w-24"
                style={{
                    height: "1px",
                    backgroundColor: "transparent"
                }}
            />
        )
    };
    return (
        <div className="w-full max-w-6xl slider-container h-auto relative">
            <Slider
                ref={slider => {
                    sliderRef.current = slider;
                }}
                {...settings}
            >
                <div className="w-full h-auto">
                    <Image src="/footerBanner.png" alt="banner" layout="responsive" width={1920} height={1080} className="w-full h-auto object-cover rounded-3xl" />
                </div>
                <div className="w-full h-auto">
                    <Image src="/footerBanner.png" alt="banner" layout="responsive" width={1920} height={1080} className="w-full h-auto object-cover rounded-3xl" />
                </div>
                <div className="w-full h-auto">
                    <Image src="/footerBanner.png" alt="banner" layout="responsive" width={1920} height={1080} className="w-full h-auto object-cover rounded-3xl" />
                </div>
            </Slider>
            <div className="absolute left-1/3 bottom-1/4 transform -translate-x-1/2 translate-y-1/4 flex flex-row rounded-full bg-yellow-500">

                <button className=" button  w-[40px] h-[40px] flex items-center justify-center" onClick={previous}>
                    <Image src="/seta-esquerda.png" alt="Previous" width={8} height={14} />
                </button>
                <button className=" button  w-[40px] h-[40px] flex items-center justify-center" onClick={next}>
                    <Image src="/seta-direita.png" alt="Next" width={8} height={14} />
                </button>
            </div>
        </div>
    );
}

export default footerCarrossel;
