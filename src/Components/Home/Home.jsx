import React from 'react';
import HomeImage from './CODE.png';

const Home = () => {
  return (
    <div className='text-white flex flex-col-reverse md:flex-row w-full justify-between items-start p-5 md:p-10'>
      <div className='w-full md:w-auto flex flex-col items-center'>
        <img className='w-full md:w-full object-cover sm:w-7/12' src={HomeImage} alt="Code Nakshatra" />
        
        {/* Devfolio Button */}
        <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer">
          <button className='mt-5 text-white py-3 px-6 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-blue-600'>
            Apply with Devfolio
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
