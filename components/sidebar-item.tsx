import { LucideIcon } from 'lucide-react';

type Props = {
  text: string;
  Icon: LucideIcon;
};

export const SidebarItem = ({ text, Icon }: Props) => {
  return (
    <li className='flex items-center text-xl mb-2 space-x-3 p-2.5'>
      <Icon className='size-6' />
      <span className='hidden xl:block'>{text}</span>
    </li>
  );
};
