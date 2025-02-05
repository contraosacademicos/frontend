import Image from 'next/image';
import React from 'react';
import Divider from '../Divider';

interface TopArticleProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

const TopArticle: React.FC<TopArticleProps> = ({ backgroundImage, title, subtitle }) => {
    return (
        <div className="top-article p-4 bg-cover bg-center shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-[1fr_1fr] w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='row-span-1 col-span-2 grid grid-cols-2'>
                <div className='flex justify-start items-center'>
                    <Image className='' src="/star.png" alt="Logo" width={40} height={40} />

                    <p className="font-inter ml-1 font-medium text-[12px] leading-[24px] text-white">Artigos em destaque</p>
                </div>
                <div className='flex justify-end'>
                    <Image className='relative bottom-9' src="/logo_s_fundo.svg" alt="Logo" width={50} height={50} />
                </div>
            </div>
            <h2 className="font-kaisei-decol text-3xl font-medium  leading-[55.02px] mb-2 col-span-1">{title}</h2>
            <div className='flex flex-col gap-2 col-span-2'>
                <Divider />
                <p className="font-inter font-medium text-[12px] leading-[24px]  text-white">{subtitle}</p>
            </div>
        </div>
    );
};

export default TopArticle;