import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className='productCard w-[15rem] m-3 transition-all cursor-pointer hover:shadow-lg hover:scale-105'
      onClick={handleCardClick}
    >
      <div className='h-[20rem]'> 
        <img 
          className='h-full w-full object-cover object-left-top' 
          src={product.imageUrl} 
          alt={product.title} 
        />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p className='truncate'>{product.title}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className='font-semi-bold'>₹{product.discountedPrice}</p>
          <p className='line-through opacity-50'>₹{product.price}</p>
          <p className='text-green-700 font-semibold'>{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;