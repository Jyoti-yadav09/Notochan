import React from 'react';

const AboutSection = () => {
  return (
    <section className='bg-gray-100 px-6 py-16 md:px-24 text-center md:text-left' id="AboutSection">
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-45 items-center'>
       
      

       
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-bold mb-4 text-[#4B0082]'>
            ✨ About <span className='text-[#FF69B4]'>NotoChan</span>
          </h2>
          <p className='text-lg mb-6 leading-relaxed text-[#555]'>
            NotoChan isn't just another note app – it's your little corner of the internet where you can be <em>completely yourself</em>. 🧸✨
          </p>
          <p className='text-md text-[#666] mb-4'>
            Whether you're writing down your raw emotions, daily diary entries, meaningful notes, or a personal blog – NotoChan
            is here to listen without judgment. It's cute, minimal, and designed with love to be your digital best friend 💌.
          </p>
          <p className='text-sm text-[#888]'>
            Write freely. Feel deeply. Share softly. NotoChan is your safe space. 🌸
          </p>
        </div>
 
        <div className='md:w-1/2'>
          <img
            src="/assets/Cuteimage.jpg"
            alt="NotoChan illustration"
            className='w-100 h-100 rounded-xl shadow-lg'
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
