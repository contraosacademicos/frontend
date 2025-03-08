import React from 'react';
import ProductCard from '../CardsPlans';


const Plans: React.FC = () => {
    return (

        <div className=" w-full py-4">
            <div className="flex flex-col items-center">
                <p className='text-2xl text-amber-500 capitalize'>Junte-se a nós e apoie o projeto</p>
                <p className='text-3xl text-white capitalize'>Planos para qualquer tipo de estudante</p>
            </div>
            <div className='flex flex-row py-12 justify-evenly'>

                <ProductCard title='Basico' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel cursus mauris. ' bestSeller={false} price='78,99' />
                <ProductCard title='Intermediario' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel cursus mauris. ' bestSeller={true} price='78,99' />
                <ProductCard title='Avançado' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel cursus mauris. ' bestSeller={false} price='78,99' />
            </div>

        </div>

    );
};

export default Plans;