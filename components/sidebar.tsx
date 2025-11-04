import Image from 'next/image';
import { Home } from 'lucide-react';

import { SidebarItem } from './sidebar-item';
import { SidebarUserInfo } from './sidebar-user-info';

export const Sidebar = () => {
  return (
    <nav className='h-screen hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20 xl:mr-10'>
      <div className='relative h-full flex flex-col'>
        <div className='py-3'>
          <Image src='/assets/busybee-logo2.png' width={48} height={48} alt='Logo' />
        </div>
        <ul>
          <SidebarItem Icon={Home} text='Home' />
          {/* <SidebarItem Icon={HashtagIcon} text='Explore' />
          <SidebarItem Icon={BellIcon} text='Notifications' />
          <SidebarItem Icon={InboxIcon} text='Messages' />
          <SidebarItem Icon={BookmarkIcon} text='Bookmarks' />
          <SidebarItem Icon={UserIcon} text='Profile' />
          <SidebarItem Icon={EllipsisHorizontalCircleIcon} text='More' /> */}
          <button className='hidden xl:block bg-[#F4AF01] w-[200px] h-[52px] rounded-full text-white font-medium cursor-pointer shadow-md mt-2'>
            Bumble
          </button>
        </ul>

        <SidebarUserInfo />
      </div>
    </nav>
  );
};
