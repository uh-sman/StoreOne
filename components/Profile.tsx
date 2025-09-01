import { signOut } from '@/actions'
import { User } from '@supabase/supabase-js'
import Image from 'next/image'
import React from 'react'

interface ProfileProps {
    user: User
}
const Profile = ({ user }:ProfileProps) => {
  return (
    <div className='flex flex-col w-full space-y-[10px]'>
      <div className="flex gap-[20px] items-center px-[10px]">
        <Image
          src="/images/user-image.svg"
          alt="user-image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center gap-[10px]">
          <h1 className="text-black font-medium text-[16px]">
            {user.user_metadata.username}
          </h1>
          <p className="font-medium text-xs text-[#8E8E93]">
            {user.phone ? user.phone : "+1 123 456-7890"}
          </p>
        </div>
      </div>
      <div className='border-b border-[#EDEDED] border-2 w-full'></div>
      <div className='flex px-[10px] justify-center'>
        <ul className='flex flex-col justify-center gap-[10px] my-[10px]'>
          <button className='flex items-center gap-[6px]'>
            <Image
              src="/icons/suitcase.svg"
              alt="icon"
              width={16.25}
              height={15.63}
            />
            <p className="text-[#444444] font-medium text-[16px]">
              Order History
            </p>
          </button>
          <button className='flex items-center gap-[6px]'>
            <Image
              src="/icons/account.svg"
              alt="icon"
              width={16.25}
              height={15.63}
            />
            <p className="text-[#444444] font-medium text-[16px]">
              Account Information
            </p>
          </button>
          <button className='flex items-center gap-[6px]'>
            <Image
              src="/icons/location-icon.svg"
              alt="icon"
              width={16.25}
              height={15.63}
            />
            <p className="text-[#444444] font-medium text-[16px]">Address</p>
          </button>
          <button onClick={signOut} className='flex items-center gap-[6px]'>
            <Image
              src="/icons/logout.svg"
              alt="icon"
              width={16.25}
              height={15.63}
            />
            <p className="text-[#444444] font-medium text-[16px]">Log Out</p>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Profile