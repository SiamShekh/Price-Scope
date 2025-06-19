import HomePage from '@/components/swapper/HomePage';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Home = () => {

  return (
    <div className="min-h-screen  ">
      <HomePage />
      <div className="flex items-center justify-between border-2 border-white/5 bg-white/5 relative overflow-hidden mt-5 rounded-md">
        <input type="text" placeholder='Keyboard...' className='outline-none p-3 font-semibold text-white w-full' />
        <button className='bg-white/5 hover:bg-white hover:text-black duration-500 text-2xl p-4 rounded-l-full'><FaSearch /></button>
      </div>

      <div className='my-3'>
        <p className='text-white font-bold text-xl'>Daraz</p>
        <p className='text-white/60 text-sm'>3200 Product Found</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;

const Product = () => {
  return (
    <div className="bg-white/5 rounded-md border border-white/10 uppercase">
      <img src="https://m.media-amazon.com/images/I/711hcPp2r8L._AC_SL1500_.jpg" alt="image" className='h-36 rounded-t-md w-full object-cover' />
      <div className="p-2">
        <p className='font-medium line-clamp-2 text-white'>Asus Keyboard 51763 Model Most Latest varient</p>
        <p className='font-medium font-mono text-white/50 mt-2'>Price: 345 BDT</p>
        <p className='font-medium font-mono text-white/50'>Brand: Daraz.com</p>
        <div className="flex items-center justify-center mt-2 gap-2">
          <button className='p-3 bg-cyan-500/20 w-full rounded-md uppercase text-xs'>add favorite</button>
          <button className='p-2 bg-green-500/20 w-full rounded-md uppercase'>buy</button>
        </div>
      </div>
    </div>
  )
}