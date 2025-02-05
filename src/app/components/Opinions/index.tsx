import Image from 'next/image';
import React from 'react';
import './style.css';

interface Opinion {
    title: string;
    text: string;
}

interface OpinionsProps {
    opinions: Opinion[];
}

const Opinions: React.FC<OpinionsProps> = ({ opinions }) => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg shadow-md">
            <div className="pt-4 px-4 flex items-center justify-between flex-row w-full h-16">
                <p>opinião</p>
                <Image src="/logo_s_fundo.svg" alt="opinião" width={36} height={32} className="rounded-lg" />
            </div>
            {opinions.map((opinion, index) => (
                <div key={index} className="p-4 flex flex-col">
                    <div className="flex flex-row">
                        <Image src="/perfil.png" alt="perfil" width={48} height={48} className="rounded-full border-white border-2" />
                        <div className='flex flex-col ml-4'>
                            <p className="font-bold opinion_title">{opinion.title}</p>
                            <p className="mt-2 opinion_subTitle">{opinion.text}</p>
                        </div>
                    </div>
                    {index < opinions.length - 1 && <hr className="dashed-line mt-6" />}
                </div>
            ))}
        </div>
    );
};

export default Opinions;