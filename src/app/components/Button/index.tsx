import React from 'react';
import './styles.css';
import Image from 'next/image';

interface ButtonProps {
    iconUrl?: string;
    text?: string;
    className?: string;
    onClick?: () => void;
    iconWidth?: number;
    iconHeight?: number;
}

const Button: React.FC<ButtonProps> = ({ iconUrl, text, className, onClick, iconWidth = 24, iconHeight = 24 }) => {
    return (
        <button className={`py-2 px-3 rounded ${className}`} onClick={onClick}>
            {iconUrl && <Image src={iconUrl} alt="icon" width={iconWidth} height={iconHeight} className="" />}
            {text}
        </button>
    );
};

export default Button;