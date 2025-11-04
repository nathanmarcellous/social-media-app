import Image from 'next/image';
import { MoreHorizontal, Search } from 'lucide-react';

export const Widgets = () => {
  return (
    <div className='p-3 hidden lg:flex flex-col space-y-4 w-[400px] ps-10'>
      <div className='bg-[#EFF3F4] border border-gray-200 text-[#89959D] h-11 flex items-center gap-x-3 rounded-full pl-5'>
        <Search className='size-5' />
        <input type='text' placeholder='Search Busy Bee' className='bg-transparent outline-none' />
      </div>

      <div className='bg-[#EFF3F4] rounded-xl p-3'>
        <h1 className='text-xl font-bold mb-2'>What's Happening?</h1>
        <div className='flex flex-col py-3 space-y-0.5'>
          <div className='flex justify-between text-[#536471] text-xs'>
            <span>Trending in the USA</span>
            <MoreHorizontal className='w-5' />
          </div>

          <span className='font-bold text-sm'>#Bumble</span>

          <span className='text-[#536471] text-xs'>240k Bumbles</span>
        </div>
        <div className='flex flex-col py-3 space-y-0.5'>
          <div className='flex justify-between text-[#536471] text-xs'>
            <span>Trending in the USA</span>
            <MoreHorizontal className='w-5' />
          </div>

          <span className='font-bold text-sm'>#NextJS</span>

          <span className='text-[#536471] text-xs'>200k Bumbles</span>
        </div>
        <div className='flex flex-col py-3 space-y-0.5'>
          <div className='flex justify-between text-[#536471] text-xs'>
            <span>Trending in the USA</span>
            <MoreHorizontal className='w-5' />
          </div>

          <span className='font-bold text-sm'>#Pokemon</span>

          <span className='text-[#536471] text-xs'>42k Bumbles</span>
        </div>
        <div className='flex flex-col py-3 space-y-0.5'>
          <div className='flex justify-between text-[#536471] text-xs'>
            <span>Trending in the USA</span>
            <MoreHorizontal className='w-5' />
          </div>

          <span className='font-bold text-sm'>#ReactJS</span>

          <span className='text-[#536471] text-xs'>17k Bumbles</span>
        </div>
      </div>

      <div className='bg-[#EFF3F4] rounded-xl p-3'>
        <h1 className='text-xl font-bold mb-2'>Who to Follow</h1>
        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center space-x-3'>
            <Image
              src={'/assets/kim.jpg'}
              width={56}
              height={56}
              alt='Profile Picture of Kim Kardashian'
              className='size-14 rounded-full'
            />

            <div className='flex flex-col text-sm'>
              <span className='font-bold'>Kim Kardashian</span>
              <span>@kimkardashian</span>
            </div>
          </div>

          <button className='bg-black text-white w-16 h-10 rounded-full text-sm cursor-pointer'>Follow</button>
        </div>
        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center space-x-3'>
            <Image
              src={'/assets/elon.jpg'}
              width={56}
              height={56}
              alt='Profile Picture of Elon Musk'
              className='w-14 h-14 rounded-full'
            />

            <div className='flex flex-col text-sm'>
              <span className='font-bold'>Elon Musk</span>
              <span>@elonmusk</span>
            </div>
          </div>

          <button className='bg-black text-white w-16 h-10 rounded-full text-sm cursor-pointer'>Follow</button>
        </div>
      </div>
    </div>
  );
};
