import { blog } from '@/src/assets/blog';
import { TextField } from '@mui/material';
import React from 'react';
import * as Yup from "yup";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SmsIcon from '@mui/icons-material/Sms';

function Blogpageiner({item}:any) {
  console.log(item)
 
     
    return (
        <section className=' w-full main-container flex flex-col items-start justify-center my-6 gap-4'>
      
        <div className=" w-full h-auto lg:h-[29rem] rounded-xl overflow-hidden">                                                 
        <img src={item.attributes.ImageURL} alt="img" className='w-full h-full object-cover' />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-6 ">
         
           
          </div>
        <h1 className='text-3xl font-bold text-red-600'> {item.attributes.title}</h1>
      <textarea  className='w-full h-screen element'>{item.attributes.description}</textarea>
      <textarea  className='w-full h-screen element'>{item.attributes.description}</textarea>

       
        </section>
    );
}

export default Blogpageiner;