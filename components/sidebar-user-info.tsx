'use client';

import { auth } from '@/firebase';
import { closeLogInModal, closeSignUpModal } from '@/redux/slices/modal-slice';
import { signOutUser } from '@/redux/slices/user-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { signOut } from 'firebase/auth';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

export const SidebarUserInfo = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleSignOut = async () => {
    await signOut(auth);

    dispatch(signOutUser());

    dispatch(closeSignUpModal());
    dispatch(closeLogInModal());
  };

  return (
    <div
      className='absolute bottom-3 flex items-center justify-start space-x-2 xl:p-3 xl:pe-6 hover:bg-gray-200 hover:bg-opacity-10 rounded-full transition cursor-pointer w-fit xl:w-[240px]'
      onClick={handleSignOut}
    >
      <Image src={'/assets/profile-pic.png'} width={36} height={36} alt='Profile Picture' className='w-9 h-9' />
      <div className='hidden xl:flex flex-col text-sm max-w-40'>
        <span className='whitespace-nowrap text-ellipsis overflow-hidden font-bold'>{user.name}</span>
        <span className='whitespace-nowrap text-ellipsis overflow-hidden text-gray-500'>@{user.username}</span>
      </div>
    </div>
  );
};
