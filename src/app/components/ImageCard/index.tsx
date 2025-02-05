import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, subtitle }) => {
    return (
        <div className="flex flex-1 flex-col items-center p-4 shadow-md">
            <div className="relative w-full h-auto">
                <Image src={imageUrl} alt={title} layout="responsive" width={800} height={750} objectFit="cover" className="rounded-lg" />
            </div>
            <h2 className="mt-4 text-xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-600">{subtitle}</p>
        </div>
    );
};

export default ImageCard;