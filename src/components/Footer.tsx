import React from 'react'
import { Film } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export const Footer = () => {
  return (
  <div className="h-[280px] py-[40px] bg-[#4338CA] px-[80px] flex flex-row gap-[120px] text-[#FAFAFA] font-medium leading-5 text-[14px]">
    <div className='w-[247px]'>
        <div className="flex items-center gap-2 text-blue-900">
                <Film  className="text-[#FAFAFA] size-5" />
                <p className="text-[#FAFAFA] text-4 font-bold leading-5">Movie Z</p>
              </div>
        <p className='text-[#FAFAFA] text-[14px] font-normal leading-5'>© 2024 Movie Z. All Rights Reserved </p>
    </div>

    <div className='w-[913px] flex gap-[96px] justify-end'>
    <div className='flex flex-col gap-6'>
   <div className='flex items-center gap-[12px]'>
   <Mail />
 <div className='flex flex-col gap-3'> 
  <div>
  <p className='font-normal'>Contact Information</p> 
  </div>
<p>Email:</p>
 <p className='font-normal'>support@movieZ.com</p>
 </div>
   </div>
   <div className='flex items-center gap-3'>
   <Phone />
   <div>
   <p>Phone:</p>
   <p className='font-normal'>+976 (11) 123-4567</p>
   </div>
   </div>
   </div>
   <div className='flex flex-col gap-3'>
    <p>Follow us </p>
   <div className='flex gap-3'>
    <a href=''>Facebook</a>
    <a href=''>Instagram</a>
    <a href=''>Twitter</a>
    <a href=''>Youtube</a>
   </div>
   </div>
   </div>
    </div>
  )
}
