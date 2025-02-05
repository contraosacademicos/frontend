import React from 'react';
import Button from './Button'; // Certifique-se de que o caminho para o componente Button está correto

interface FullWidthBannerProps {
  backgroundImage: string;
  text: string;
  buttonText: string;
  
}

const FullWidthBanner: React.FC<FullWidthBannerProps> = ({ backgroundImage, text, buttonText,  }) => {
  return (
    <div
      className="w-full h-32 flex flex-row items-center justify-around text-center rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="text-white text-2xl mb-4">{text}</p>
      <Button text={buttonText} className='border-2 rounded-full' />
    </div>
  );
};

export default FullWidthBanner;