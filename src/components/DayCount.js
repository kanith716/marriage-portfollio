import React, { useEffect } from 'react';




function DayCount() {
    useEffect(()=>{
        var targetDateNew = new Date('February 28, 2024 00:00:00').getTime();

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
            document.getElementById('daysset').innerHTML = daysset;
            document.getElementById('hoursset').innerHTML = hoursset;
            document.getElementById('minutesset').innerHTML = minutesset;
            document.getElementById('secondsset').innerHTML = secondsset;

        }
    }, [DayCount])
  return (
      <section className='md:h-[100vh] md:flex items-center pt-[20vh] md:pt-0'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 w-sm-[45%]'>
                  <div className='text-center round-image p-10 col-span-2 md:col-span-1'>
                    <div>
                          <h2 className='leading-[40px] md:leading-[130px] text-[40px] md:text-[100px] head-font text-[var(--theme-primary-color)] ' id='daysset'>0</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Days</span>
                    </div>
                  </div>
                  <div className='text-center round-image p-10 col-span-2 md:col-span-1'>
                      <div>
                          <h2 className='leading-[40px] md:leading-[130px] text-[40px] md:text-[100px] head-font text-[var(--theme-primary-color)] ' id='hoursset'>0</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Hours</span>
                      </div>
                  </div>
                  <div className='text-center round-image p-10 col-span-2 md:col-span-1'>
                      <div>
                          <h2 className='leading-[40px] md:leading-[130px] text-[40px] md:text-[100px] head-font text-[var(--theme-primary-color)] ' id='minutesset'>0</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Min</span>
                      </div>
                  </div>
                  <div className='text-center round-image p-10 col-span-2 md:col-span-1'>
                      <div>
                          <h2 className='leading-[40px] md:leading-[130px] text-[40px] md:text-[100px] head-font text-[var(--theme-primary-color)] ' id='secondsset'>0</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Sec</span>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default DayCount
