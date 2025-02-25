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

function CustomArrows() {

    const sliderRef = useRef<Slider | null>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots:  (dots: React.ReactNode) => (
            <div
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <ul className="relative bottom-11" style={{ margin: "0px", display: "flex", justifyContent: "center", gap: "3px" }}>
                {React.Children.map(dots, (dot, index) => (
                        <div className="w-24" key={index} style={{ height: "1px", backgroundColor: React.isValidElement(dot) && (dot.props as { className: string }).className.includes('slick-active') ? "#DBA232" : "#FEFEFE" }}>
                            {dot}
                        </div>
                    ))}
                </ul>
            </div>
        ),
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
        <div className="w-full slider-container h-auto relative">
            <Slider
                ref={slider => {
                    sliderRef.current = slider;
                }}
                {...settings}
            >
                <div className="w-full h-auto">
                    <Image src="/banner2.jpg" alt="banner" layout="responsive" width={1920} height={1080} className="w-full h-auto object-cover rounded-3xl" />
                </div>
                <div className="w-full h-auto">
                    <Image src="/bannerFooter.png" alt="banner" layout="responsive" width={1920} height={1080} className="w-full h-auto object-cover rounded-3xl" />
                </div>
                <div className="w-full h-auto">
                    <Image src="/banner2.jpg" alt="banner" layout="responsive" width={1920} height={1080} className="w-full h-auto object-cover rounded-3xl" />
                </div>
            </Slider>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 button rounded-full bg-yellow-500 w-[40px] h-[40px] flex items-center justify-center" onClick={previous}>
                <Image src="/seta-esquerda.png" alt="Previous" width={8} height={14} />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 button rounded-full bg-yellow-500 w-[40px] h-[40px] flex items-center justify-center" onClick={next}>
                <Image src="/seta-direita.png" alt="Next" width={8} height={14} />
            </button>
        </div>
    );
}

export default CustomArrows;
