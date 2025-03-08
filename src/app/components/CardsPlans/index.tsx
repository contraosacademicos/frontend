import React from 'react';

interface ProductCardProps {
    title: string;
    description: string;
    price: string;
    bestSeller: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, bestSeller }) => {
    return (
        <div className="w-auto flex flex-col items-center px-12 rounded-3xl border border-[#272727]  bg-gradient-to-t from-[#141414] to-[#201F1F] pt-5 pb-10">
            <div className="px-16 w-full text-center py-6">
                <div className="font-bold text-xl mb-2 text-white">{title}</div>
                <p className="text-amber-500 text-5xl">
                    R$ {price}

                </p>
            </div>
            <img className="max-w-36" src="/diamond.png" alt="diamante" />
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 text-sm font-medium text-center text-xs max-w-48 text-white mr-2 mb-2">{description}</span>
            </div>
            {bestSeller?
            <div className='w-auto px-6 py-2 relative bottom-96 rounded-full bg-yellow-500 text-black text-sm font-bold py-1 px-4'>
                Melhor Oferta
            </div>
                : null
            }
        </div>
    );
};

export default ProductCard;