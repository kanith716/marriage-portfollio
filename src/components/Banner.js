import React from 'react'

const targetDate = new Date('February 11, 2024 00:00:00').getTime();

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;


  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the #countdown element
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

}
function Banner() {

  // Set the target date for the countdown (February 11)


  return (
    <section className='bg-[var(--section-bg-color)] md:pt-[20vh] pt-[10vh] md:h-[100vh] md:flex items-center '>
      <div className='container mx-auto'>
        <div className='md:grid grid-cols-2  gap-4'>
          <div>
            <div className='text-center'>
              <div>
                <img alt='left Shape' src='/image/shape-1.svg' className='mx-auto' />
              </div>
              <div className='pt-8'>
                <h1 className=' md:text-[60px] text-[30px]'>Raja & Harini</h1>
                <p className='text-[var(--body-color)] font-semibold'>We Are Getting Married November 15,2024</p>
              </div>
              <div className='grid grid-cols-4 mx-auto w-[80%] pt-5'>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font ' id='days'></h2>
                    <span className='body-color font-semibold'>Days</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font ' id='hours'></h2>
                    <span className='body-color font-semibold'>Hours</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font ' id='minutes'></h2>
                    <span className='body-color font-semibold'>Min</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font ' id='seconds'></h2>
                    <span className='body-color font-semibold'>Sec</span>
                  </div>
                </div>
              </div>
              <div>
                <img alt='left Shape' src='/image/shape-2.svg' className='mx-auto' />
              </div>
            </div>
          </div>
          <div className='relative md:p-0 p-10 w-[90%] mx-auto md:w-[100%]'>
            <div>
              <div className='relative z-[10]'>
                <img src='/image/hero-1.jpg' className='mx-auto border-[15px] border-white md:w-[70%]' />
              </div>
              <div className='absolute top-[0] z-[0] left-0'>
                <img src='/image/bg-shape.png' className='md:w-[70%] ' />
              </div>
              <div className='absolute  top-[-10px] right-5 z-[11]'>
                <img src='/image/shape-3.svg' />
              </div>
              <div className='absolute  bottom-[-10px] right-[-35%] md:right-5 z-[11]'>
                <img src='/image/shape-4.svg' className="w-[70%] md:w-[100%]" />
              </div>
              <div className='absolute  bottom-[-10px] left-5 z-[11]'>
                <img src='/image/shape-5.svg' />
              </div>
              <div className='absolute  top-[-30px] left-5 z-[11]'>
                <img src='/image/leaf-1.svg' className='w-[80%] md:w-[100%]'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
