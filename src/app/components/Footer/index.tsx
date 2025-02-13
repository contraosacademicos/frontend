import React from 'react';
import Image from 'next/image';
import FullWidthBanner from '../FullWidthBanner';
import Button from '../Button';

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center max-w-full">
      <div
        className="w-full mb-36 pt-14 pb-12 h-auto flex flex-row justify-around rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(bannerFooter.png)` }}
      >
        <div
          className="w-auto p-12 h-auto flex flex-col items-center text-center rounded-lg bg-cover bg-center"
          style={{
            background: 'conic-gradient(from 199.23deg at 50% 20.74%, #010101 0deg, #37290F 126deg, #454545 234deg, #202020 360deg)'
          }}
        >
          <p className="text-white text-base mb-4">Que tal receber os melhores conteúdos direto no seu e-mail?</p>
          <p className="text-white text-3xl mb-4">Assine o nosso newsletter!</p>
          <div className='relative w-full'>
            <input type='text' className='rounded-lg pl-4 w-full h-12' placeholder="Digite seu e-mail" />
            <Button text="Assinar" className='absolute top-1 right-1 rounded-lg botao-secundario' />
          </div>
        </div>

        <Image className='' src="/logo_s_fundo.svg" alt="Logo" width={223} height={223} />

      </div>
      <div className='flex  gap-10 grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]'>
        <div className='flex gap-2 flex-col'>
          <h2 className='mb-12 text-3xl text-white capitalize'>Home</h2>
          <a className='text-lg gap-3 capitalize text-neutral-500'>sobre</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>diretoria</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>linha do tempo</a>
        </div>
        <div className='flex gap-2 flex-col col-span-1'>
          <h2 className='mb-12 text-3xl text-white capitalize'>Revista</h2>
          <a className='text-lg gap-3 capitalize text-neutral-500'>beneficios</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>inscrição</a>
        </div>
        <div className='flex gap-2 flex-col col-span-1'>
          <h2 className='mb-12 text-3xl text-white capitalize'>Planos</h2>
          <a className='text-lg gap-3 capitalize text-neutral-500'>básico</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>Intermediário</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>premium</a>
        </div>
        <div className='flex gap-2 flex-col col-span-1'>
          <h2 className='mb-12 text-3xl text-white capitalize'>Contato</h2>
          <a className='text-lg gap-3 capitalize text-neutral-500'>Serviços</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>formulários</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>convênios</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>Cardeneta de obras</a>
        </div>
        <div className='flex gap-2 flex-col col-span-1'>
          <h2 className='mb-12 text-3xl text-white capitalize'>Listas</h2>
          <a className='text-lg gap-3 capitalize text-neutral-500'>PLANEJAMENTO</a>
          <a className='text-lg gap-3 capitalize text-neutral-500'>gestão</a>
        </div>
        <div className='flex gap-2 flex-col col-span-1'>
          <div className='h-full w-px bg-white'></div> {/* Divider vertical */}
        </div>
        <div className='flex gap-2 flex-col col-span-1'>
          <Image className='' src="/logo_s_fundo.svg" alt="Logo" width={50} height={50} />
          <p className='text-yellow-500 text-3xl'>Acompanhe nossas redes socials</p>
          <div className='flex grid-cols-4'>
            <Image className='' src="/facebook.svg" alt="Logo" width={50} height={50} />
            <Image className='' src="/linkedin.svg" alt="Logo" width={50} height={50} />
            <Image className='' src="/instagram.svg" alt="Logo" width={50} height={50} />
            <Image className='' src="/twitter.svg" alt="Logo" width={50} height={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;