import React from 'react';
import Image from "next/image";
import {
  Header,
  ImageCard,
  Opinions,
  Divider,
  FullWidthBanner,
  TopArticle
} from './components';

const opinionsData = [
  { title: 'John Doe', text: 'This is an amazing product!' },
  { title: 'Jane Smith', text: 'I really enjoyed using this.' },
  { title: 'John Doe', text: 'This is an amazing product!' },
  { title: 'Jane Smith', text: 'I really enjoyed using this.' },
];

export default function Home() {

  return (
    <div className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-8 md:px-52 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-full overflow-hidden">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-full">
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
            <TopArticle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel cursus mauris. Sed finibus venenatis metus, quis venenatis orci. Nunc placerat, libero eget fermentum efficitur, tortor massa sodales ante, vel feugiat nunc ipsum in orci. Phasellus dictum eleifend tellus ac egestas. Cras interdum velit nec placerat gravida. Aenean libero mauris, aliquam non nunc id, porttitor vulputate libero. Nulla facilisi. Nullam nisi felis, viverra ut libero sit amet, placerat mollis ante. Nunc sit amet ipsum elementum, suscipit odio eu, ultricies odio. Curabitur pharetra lobortis mi, non dignissim dui lacinia in." title="Distúrbios emocionais na infância e alienação parental" backgroundImage="/ArticleBackgroudn.png"/>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center max-w-full">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Docs
        </a>
      </footer>
    </div>
  );
}
