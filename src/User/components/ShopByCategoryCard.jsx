import React from 'react';

const ShopByCategoryCard = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="h-64 sm:h-80 md:h-96 overflow-hidden flex items-center justify-center">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{category.name}</h3>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base opacity-90">{category.description}</p>
        <a 
          href={category.url}
          className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300"
        >
          Shop Now
          <svg className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;