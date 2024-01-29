import React, { useEffect } from 'react';
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { IoHeartHalf } from "react-icons/io5";





function Invitation() {
    const [openQr, closeQr] = useState(false);
    useEffect(() => {
        var targetDateNew = new Date('February 11, 2024 00:00:00').getTime();

        // Update the countdown every second
        setInterval(storyCall, 1000);

        function storyCall() {

            var nowStory = new Date().getTime();
            var timeRemainingEle = targetDateNew - nowStory;


            // Calculate days, hours, minutes, and seconds
            var daysset = Math.floor(timeRemainingEle / (1000 * 60 * 60 * 24));
            var hoursset = Math.floor((timeRemainingEle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutesset = Math.floor((timeRemainingEle % (1000 * 60 * 60)) / (1000 * 60));
            var secondsset = Math.floor((timeRemainingEle % (1000 * 60)) / 1000);


            // Display the countdown in the #countdown element
            document.getElementById('days-inv').innerHTML = daysset;
            document.getElementById('hours-inv').innerHTML = hoursset;
            document.getElementById('minutes-inv').innerHTML = minutesset;
            document.getElementById('seconds-inv').innerHTML = secondsset;

        }
       
        document.getElementById('location-btn').addEventListener('click', (e) => {
            e.preventDefault();
            closeQr(true);
        });
    }, [Invitation])
   
  return (
    <section className='inv-sec  w-full py-10'>
        <div className='container mx-auto p-3 md:p-10 '>
              <div className='bg-white p-[5vw]'>
                  <div className='border-solid border border-lime-600 p-3'>
                      <div className='border-solid border border-lime-600  md:p-10'>
                          <div className='pt-10 md:pt-5 md:pt-[10vh] relative px-10'>
                              <img src='/image/in-1.jpg' className='md:w-6/12 rounded-full mx-auto' alt='couple image'></img>
                              <div className='absolute bottom-[-50px] translate-x-[-50%] left-[50%] w-full md:w-auto'>
                                <img alt='couple flower' src='/image/couple-flower.png' className='mx-auto   md:w-11/12'></img>
                              </div>
                          </div>
                          <div className='text-center pt-[10vh] md:pt-[15vh]'>
                              {/* <p className='text-[17px] md:text-[21px]  font-normal '>Destiny brought them together</p>
                              <p className='text-[17px] md:text-[21px]  font-normal'>  and now love will seal their bond... forever</p>                                                */}
                              <h1 className='md:text-[70px] text-[35px]'><span className='inline-block me-2'>Raja</span> <IoHeartHalf className='text-[25px] md:text-[55px] inline-block' /> Harini</h1>
                              <p className=' text-[16px] md:text-[18px]'>We invite you to celebrate this Special Day</p>
                              <p className='pb-3 text-[16px] md:text-[18px]'> and the First day in our life together</p>
                              <img alt='flower ' src='/image/yellow-flower.png' className='mx-auto'></img>
                          </div>
                          <div className='grid grid-cols-4 text-center mx-auto md:w-[60%] '>
                              <div>
                                  <div>
                                      <h2 className='text-[40px] md:text-[60px] text-[var(--theme-primary-color)]  head-font ' id='days-inv'></h2>
                                      <span className='body-color font-semibold hidden md:block'>Days</span>
                                  </div>
                              </div>
                              <div>
                                  <div>
                                      <h2 className='text-[40px] md:text-[60px] text-[var(--theme-primary-color)]  head-font ' id='hours-inv'></h2>
                                      <span className='body-color font-semibold hidden md:block'>Hours</span>
                                  </div>
                              </div>
                              <div>
                                  <div>
                                      <h2 className='text-[40px] md:text-[60px] text-[var(--theme-primary-color)]  head-font ' id='minutes-inv'></h2>
                                      <span className='body-color font-semibold hidden md:block'>Min</span>
                                  </div>
                              </div>
                              <div>
                                  <div>
                                      <h2 className='text-[40px] md:text-[60px] text-[var(--theme-primary-color)]  head-font ' id='seconds-inv'></h2>
                                      <span className='body-color font-semibold hidden md:block'>Sec</span>
                                  </div>
                              </div>
                          </div>
                          <div className='text-center pt-10'>
                              <p className='text-[17px] md:text-[20px]'><span className='text-[#95998d]'>Reception:</span> 10.02.2024, Saturday</p>
                              <p className='text-[17px] md:text-[20px]'><span className='text-[#95998d]'>Time:</span> Evening 7&#039;o clock </p>
                          </div>
                          <div className='text-center pt-5'>
                          
                              <p className='text-[17px] md:text-[20px]'><span className='text-[#95998d]'>DJ:</span> Evening 7&#039;0 Clock</p>
                          </div>
                          <div className='text-center pt-5'>
                              <p className='text-[17px] md:text-[20px]'><span className='text-[#95998d]'>Marriage:</span> 11.02.2024, Sunday</p>
                              <p className='text-[17px] md:text-[20px]'><span className='text-[#95998d]'>Time:</span> Morning 8-9.30 </p>
                          </div>
                          <div className='text-center pt-5 md:w-7/12 mx-auto'>
                              <p className='text-[17px] md:text-[20px]'><span className='text-[#c8a898]'>Venue:</span></p>
                              <p className='text-[17px] md:text-[20px] px-3'>Vaithilingam Palace A/c Thirumana Mandapam, No.17, Murugan Koil Main Raod, Sammantham Nagar, Kundrathur, Chennai - 600 069.</p>
                          </div>
                          <div className='text-center '>
                              {/* <a href='tel:8198476272' className='block pt-10 '>+1 234-567-8910</a> */}
                              <a href='#' id='location-btn' className='block pt-10 text-[25px] text-[#c8a898] underline underline-offset-8 pb-[10vh]'>QR Code for Location</a>
                              
                              <img alt='location QR' src='/image/qr.png' className={openQr ? "block mx-auto pb-10 md:pb-0": "hidden" }></img>
                          </div>
                      </div>
                  </div>
             </div>
        </div>
    </section>
  )
}

export default Invitation
