import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
      <footer className='bg-[var(--theme-primary-color-s3)] py-10'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-12 gap-4'>
                  <div className='col-span-3'>
                    <div>
                          <h3 className='text-[var(--white)] head-font text-[30px]'>Links</h3>
                          <div className='flex pt-5'>
                            <div className='pe-3 '>
                                <ul>
                                      <li><a href='#' className='no-underline text-white pb-4 inline-block'>About</a></li>
                                      <li><a href='#' className='no-underline text-white pb-4 inline-block'>Services</a></li>
                                      <li><a href='#' className='no-underline text-white pb-4 inline-block'>About</a></li>
                                </ul>
                            </div>
                              <div className='pe-3'>
                                  <ul>
                                      <li><a href='#' className='no-underline text-white pb-4 inline-block'>About</a></li>
                                      <li><a href='#' className='no-underline text-white pb-4 inline-block'>Services</a></li>
                                      
                                  </ul>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div>
                          <h2>Habibi</h2>
                          <p>We can’t wait to see all of our beloved friends and relative s at our wedding.</p>
                          <div className='flex justify-end pt-3'>
                              <div className='pr-7'><FaFacebookF className='head-font text-[var(--theme-primary-color)]' /></div>
                              <div className='pr-7'><FaTwitter className='head-font text-[var(--theme-primary-color)]' /></div>
                              <div className=''><FaInstagram className='head-font text-[var(--theme-primary-color)]' /></div>
                          </div>
                    </div>
                  </div>
                  <div></div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
