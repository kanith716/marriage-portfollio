import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function MarriageBanner() {
  return (
      <section className='h-[100vh] flex items-center'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-12'>
                  <div className='col-span-3 self-center'>
                      <div className='text-right'>
                          <h3 className='text-[30px] head-font '>Ritesh Debtath</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. fringilla pellesque amet tempus.</p>
                          <div className='flex justify-end pt-3'>
                              <div className='pr-7'><FaFacebookF className='head-font text-[var(--theme-primary-color)]'/></div>
                              <div className='pr-7'><FaTwitter className='head-font text-[var(--theme-primary-color)]'/></div>
                              <div className=''><FaInstagram className='head-font text-[var(--theme-primary-color)]'/></div>
                          </div>
                      </div>
                  </div>
                  <div className='col-span-6 text-center relative'>
                      <div>
                          <img src='/image/mrg.jpg' className='mx-auto relative z-10'></img>
                      </div>
                      <div className='absolute top-0'>
                          <img src='/image/couple-shape-1.png' className='max-w-[110%]'></img>
                      </div>
                  </div>
                  <div className='col-span-3 self-center'>
                      <div className='text-left'>
                          <h3 className='text-[30px] head-font '>Ritesh Debtath</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. fringilla pellesque amet tempus.</p>
                          <div className='flex justify-start pt-3'>
                              <div className='pr-7'><FaFacebookF className='head-font text-[var(--theme-primary-color)]' /></div>
                              <div className='pr-7'><FaTwitter className='head-font text-[var(--theme-primary-color)]' /></div>
                              <div className=''><FaInstagram className='head-font text-[var(--theme-primary-color)]' /></div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default MarriageBanner
