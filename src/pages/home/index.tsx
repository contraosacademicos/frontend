import React from 'react';
import { fetchHomeData } from '../../app/api/homeApi';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import '../../app/globals.css';
import {
    Header,
    BannerCarrossel,
    ImageCard,
    Opinions,
    Divider,
    FullWidthBanner,
    TopArticle,
    Footer,
    TopColumnists
} from '../../app/components';
import Head from 'next/head';


const opinionsData = [
    { title: 'John Doe', text: 'This is an amazing product!' },
    { title: 'Jane Smith', text: 'I really enjoyed using this.' },
    { title: 'John Doe', text: 'This is an amazing product!' },
    { title: 'Jane Smith', text: 'I really enjoyed using this.' },
];

const columnistsData = [
    { name: 'John Doe', posts: 'This is an amazing product!1', image: '/perfil.png' },
    { name: 'Jane Smith', posts: 'I really enjoyed using thi2s.', image: '/perfil.png' },
    { name: 'John Doe', posts: 'This is an amazing product!3', image: '/perfil.png' },
    { name: 'Jane Smith', posts: 'I really enjoyed using thi4s.', image: '/perfil.png' },
    { name: 'John Doe', posts: 'This is an amazing product!5', image: '/perfil.png' },
    { name: 'Jane Smith', posts: 'I really enjoyed using thi6s.', image: '/perfil.png' },
    { name: 'John Doe', posts: 'This is an amazing product!7', image: '/perfil.png' },
    { name: 'Jane Smith', posts: 'I really enjoyed using this8.', image: '/perfil.png' },
    { name: 'John Doe', posts: 'esse é o 8!', image: '/perfil.png' },
    { name: 'John Doe', posts: 'This is an amazing product!', image: '/perfil.png' },
];

interface HomeProps {
    data: any;
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export default function Home({ data }: HomeProps) {
    return (
        <>
            <Head>
                <title>COA</title>
                <meta name="description" content="teste" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>

            <div className="w-full min-h-screen md:px-48 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-full">
                <Header />
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-full">
                    <BannerCarrossel />
                    <Divider text="Destaques" />
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr] gap-8 w-full">
                    <div className="col-span-1 sm:col-span-1 flex">
                            <ImageCard imageUrl="/destaque.svg" title="Next.js" subtitle="The React Framework for Production" />
                        </div>
                    <div className="col-span-1 sm:col-span-1 flex flex-col gap-8">
                        <div className="flex">
                                <ImageCard imageUrl="/image2.svg" title="Next.js" subtitle="The React Framework for Production" />
                            </div>
                        <div className="flex">
                                <ImageCard imageUrl="/image2.svg" title="Next.js" subtitle="The React Framework for Production" />
                            </div>
                        </div>
                    <div className="col-span-1 sm:col-span-1 flex flex-col gap-8">
                            <Opinions opinions={opinionsData} />
                        </div>
                    <div className="col-span-1 sm:col-span-3 flex">
                            <FullWidthBanner
                                backgroundImage="/bannerDivider.svg"
                                text="Welcome to Our Website"
                                buttonText="Clique aqui e crie sua conta"
                            />
                        </div>
                    </div>
                    <Divider text="Artigos" />
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] gap-8 w-full">
                    <div className="col-span-1 row-span-1 flex">
                            <ImageCard imageUrl="/image2.svg" title="Article 1" subtitle="Subtitle for Article 1" />
                        </div>
                    <div className="col-span-1 row-span-1 flex">
                            <ImageCard imageUrl="/image2.svg" title="Article 2" subtitle="Subtitle for Article 2" />
                        </div>
                    <div className="col-span-1 row-span-1 flex">
                            <ImageCard imageUrl="/image2.svg" title="Article 3" subtitle="Subtitle for Article 3" />
                    </div>
                    <div className="col-span-1 row-span-1 flex">
                        <ImageCard imageUrl="/image2.svg" title="Article 4" subtitle="Subtitle for Article 4" />
                    </div>
                    <div className="col-span-1 row-span-1 flex">
                        <ImageCard imageUrl="/image2.svg" title="Article 5" subtitle="Subtitle for Article 5" />
                    </div>
                    <div className="col-span-1 row-span-1 flex">
                        <ImageCard imageUrl="/image2.svg" title="Article 6" subtitle="Subtitle for Article 6" />
                    </div>
                    <div className="col-span-1 row-span-2 flex flex-col">
                        <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />

                        <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />
                    </div>
                    <div className="col-span-2 row-span-2 flex">
                        <TopArticle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel cursus mauris. Sed finibus venenatis metus, quis venenatis orci. Nunc placerat, libero eget fermentum efficitur, tortor massa sodales ante, vel feugiat nunc ipsum in orci. Phasellus dictum eleifend tellus ac egestas. Cras interdum velit nec placerat gravida. Aenean libero mauris, aliquam non nunc id, porttitor vulputate libero. Nulla facilisi. Nullam nisi felis, viverra ut libero sit amet, placerat mollis ante. Nunc sit amet ipsum elementum, suscipit odio eu, ultricies odio. Curabitur pharetra lobortis mi, non dignissim dui lacinia in." title="Distúrbios emocionais na infância e alienação parental" backgroundImage="/ArticleBackgroudn.png" />
                    </div>
                </div>
                <div className='grid grid-cols-3 w-full gap-8'>
                    <TopColumnists columnists={columnistsData} />

                    <div className='col-span-2 grid grid-cols-2 grid-rows-4'>
                        <Divider text="Principais colunas de $name_writer" style="row-span-1 col-span-2" />

                        <div className="col-span-1 row-span-3 flex flex-col">
                            <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />
                            <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />
                            <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />
                        </div>
                        <div className="col-span-1 row-span-3 flex flex-col">
                            <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />
                            <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />
                            <ImageCard imageUrl="/image2.svg" title="Article 10" subtitle="Subtitle for Article 10" />
                        </div>
                    </div>

                    </div>
                </main>
            <Footer />
            </div>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const data = await fetchHomeData();
        console.log('Fetched data:', data); // Adiciona o console.log aqui
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                data: null,
            },
        };
    }
}