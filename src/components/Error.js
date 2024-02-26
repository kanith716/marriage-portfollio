import React, { useEffect } from 'react'; 
import { TbExclamationMark } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";




function Error( ) {
  
console.log(`status`, "status");

var status = true;

  return (
      <div className='z-10 fixed right-0 w-[300px] bg-white'>
          <div className='flex justify-between items-center p-5  '>
              <div>

          <div className={!status ? "p-1": "hidden"}>
                      <TbExclamationMark className='bg-red-500	rounded-full text-white w-[23px] h-[23px] py-[1px]' />
                 </div>
          <div className={status ? "p-1" : "hidden"}>
                      <FaCheck className='text-white bg-green-500  rounded-full w-[23px] h-[23px] p-1'/>
                 </div>
              </div>
              <div>
          <h1></h1>
              </div>
       </div>
    </div>
  )
}

export default Error
