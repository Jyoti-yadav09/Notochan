import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className='min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-16 py-12 bg-gray-100' id="hero">
      <div className='md:w-1/2 text-center mt-46'>
        <h1 className='text-5xl font-bold text-[#4B0082] mb-4'>
          Welcome to <span className='text-[#FF69B4]'>NotoChan!</span>
        </h1>
        <p className='text-lg mb-4 text-[#555]'>
          Cute, minimal & lightning fast — your personal note-sharing space.
        </p>
       <button onClick={()=>navigate("/login")}
         
      className="px-5 py-2  !bg-[#b9dde8] text-[#333] rounded-lg hover:bg-blue-200 transition shadow-md">
        Get Started
      </button>
      </div>

      <div className='md:w-1/2 mt-30 flex justify-center'>
        <img src="/assets/Cuty.png" alt="Cute notes illustration" className='w-110 h-110'/> 
      </div>
    </section>
  );
}

export default HeroSection;
