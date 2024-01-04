import React from 'react'

function Banner() {
  return (
    <section className='bg-[var(--section-bg-color)] pt-[20vh] h-[100vh] flex items-center overflow-hidden'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2  gap-4'>
          <div>
            <div className='text-center'>
              <div>
                <img alt='left Shape' src='/image/shape-1.svg' className='mx-auto' />
              </div>
              <div className='pt-8'>
                <h1 className=' text-[60px]'>James & Amelia</h1>
                <p className='text-[var(--body-color)] font-semibold'>We Are Getting Married November 15,2024</p>
              </div>
              <div className='grid grid-cols-4 mx-auto w-[80%] pt-5'>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font '>357</h2>
                    <span className='body-color font-semibold'>Days</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font '>12</h2>
                    <span className='body-color font-semibold'>Hours</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font '>33</h2>
                    <span className='body-color font-semibold'>Min</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className=' text-[60px] text-[var(--theme-primary-color)]  head-font '>54</h2>
                    <span className='body-color font-semibold'>Sec</span>
                  </div>
                </div>
              </div>
              <div>
                <img alt='left Shape' src='/image/shape-2.svg' className='mx-auto' />
              </div>
            </div>
          </div>
          <div className='relative'>
            <div>
              <div className='relative z-[10]'>
                <img src='/image/hero-1.jpg' className='mx-auto' />
              </div>
              <div className='absolute top-[0] z-[0]'>
                <img src='/image/bg-shape.png' className='w-[70%]' />
              </div>
              <div className='absolute  top-[-10px] right-5 z-[11]'>
                <img src='/image/shape-3.svg' />
              </div>
              <div className='absolute  bottom-[-10px] right-5 z-[11]'>
                <img src='/image/shape-4.svg' />
              </div>
              <div className='absolute  bottom-[-10px] left-5 z-[11]'>
                <img src='/image/shape-5.svg' />
              </div>
              <div className='absolute  top-[-30px] left-5 z-[11]'>
                <img src='/image/leaf-1.svg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
