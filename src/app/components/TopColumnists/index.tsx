import React from 'react';
import Image from 'next/image';
import './style.css';

interface Columnist {
  name: string;
  posts: string;
  image?: string;
}

interface TopColumnistsProps {
  columnists: Columnist[];
}

const TopColumnists: React.FC<TopColumnistsProps> = ({ columnists }) => {
  // Limitar o número de colunistas a 8
  const limitedColumnists = columnists ? columnists.slice(0, 8) : [];

  return (
    <div className="flex flex-col pb-6 gap-4 bg-neutral-800 rounded-lg">
      <div className="pt-4 px-4 flex items-center justify-between flex-row w-full h-16">
        <p className='text-lg'>Principais colunistas</p>
      </div>
      {limitedColumnists.map((columnist, index) => (
        <div key={index} className="p-4 flex flex-col">
          <div className="flex flex-row">
            <Image src={columnist.image || "/perfil.png"} alt="perfil" width={48} height={48} className="rounded-full border-white border" />
            <div className='flex flex-col ml-4'>
              <p className="text-base text-yellow-600">{columnist.name}</p>
              <p className="mt-2 text-xs text-white">{columnist.posts}</p>
            </div>
          </div>
          {index < limitedColumnists.length - 1 && <hr className="border-t border-dashed border-neutral-400 mt-6" />}
        </div>
      ))}
    </div>
  );
};

export default TopColumnists;