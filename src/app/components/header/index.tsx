"use client";

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../Button';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex w-full h-20 items-center justify-between gap-8 px-6 sm:px-8">
            <div className=''>
                <Image
                    aria-hidden
                    src="/logo_s_fundo.svg"
                    alt="icon"
                    width={67}
                    height={62}
                />
            </div>
            <div className='links flex gap-4 items-center'>
                <a className={` ${pathname === '/' ? 'font-bold underline underline-offset-4' : ''}`} href="/">Home</a>
                <a className={` ${pathname === '/artigos' ? 'font-bold underline underline-offset-4' : ''}`} href="/artigos">Artigos</a>
                <a className={` ${pathname === '/projeto' ? 'font-bold underline underline-offset-4' : ''}`} href="/projeto">Projeto</a>
                <a className={` ${pathname === '/contato' ? 'font-bold underline underline-offset-4' : ''}`} href="/contato">Contato</a>
                <Button iconUrl='/search-icon.svg' className='botao-search' iconHeight={17} iconWidth={17} />
            </div>
            <div className='botoes flex gap-4'>
                <Button text='entrar'  className='botao-secundario'  />
                <Button text='assinar'  className='botao-primario'  />
            </div>
        </header>
    );
}