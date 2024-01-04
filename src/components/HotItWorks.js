import React from 'react'

function HotItWorks() {
  return (
    <div className='overflow-hidden'>
      <section className='h-[100vh] flex items-center bg-[var(--section-bg-color-s3)] relative'>
          <div className='container mx-auto'> 
            <div className='text-center pt-[20vh] pb-10'>
                  <p className='text-[var(--theme-primary-color-s2)] font-semibold'>Our Story</p>
                <h2 className='text-[50px] head-font'>How it Happened</h2>
            </div>
            <div className='grid grid-cols-2 gap-4 pt-10'>
                  <div>
                    <div className='relative z-10'>
                              <img src='/image/1.jpg' className='mx-auto border-[15px] border-white'></img>
                          <div className='absolute top-[-50px] right-[-110px] z-[-1]'>
                                  <img src="/image/shape-1.png" className='w-[80%] '></img>
                          </div>
                    </div>
                   
                  </div>
                  <div className='self-center'>
                          <div className='md:w-[70%]'>
                          <p className='text-[var(--theme-primary-color-s2)] font-semibold'>12 Dec 2019</p>
                          <h3 className='text-[40px] head-font'>How we meet</h3>
                          <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.</p>
                      </div>
                  </div>
            </div>
          </div>
          <div className='absolute right-0 top-0'>
                  <img src='/image/flower-shape4.svg'></img>
          </div>
          <div className='absolute left-0 bottom-0'>
                  <img src='image/flower-shape1.svg'></img>
          </div>
    </section>
        <section className='h-[100vh] flex items-center bg-[var(--section-bg-color-s3)] relative'>
          <div className='container mx-auto'> 
            <div className='grid grid-cols-2 gap-4 pt-10'>
                  <div className='self-center'>
                          <div className='md:w-[70%] md:text-right'>
                          <p className='text-[var(--theme-primary-color-s2)] font-semibold'>12 Dec 2019</p>
                              <h3 className='text-[40px] head-font'>He proposed, I said yes</h3>
                          <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.</p>
                      </div>
                  </div>
                      <div>
                          <div className='relative z-10'>
                              <img src='/image/2.jpg' className='mx-auto border-[15px] border-white'></img>
                              <div className='absolute top-[-50px] right-[-110px] z-[-1]'>
                                  <img src="/image/shape-1.png" className='w-[75%]'></img>
                              </div>
                          </div>

                      </div>
            </div>
          </div>

              <div className='absolute right-0 bottom-0'>
                  <img src='image/flower-shape5.svg'></img>
              </div>
    </section>
          <section className='h-[100vh] flex items-center bg-[var(--section-bg-color-s3)] relative'>
              <div className='container mx-auto'>
                 
                  <div className='grid grid-cols-2 gap-4 '>
                      <div>
                          <div className='relative z-10'>
                              <img src='/image/3.jpg' className='mx-auto border-[15px] border-white'></img>
                              <div className='absolute top-[-50px] right-[-110px] z-[-1]'>
                                  <img src="/image/shape6.png" className='w-[75%]'></img>
                              </div>
                          </div>

                      </div>
                      <div className='self-center'>
                          <div className='md:w-[70%]'>
                              <p className='text-[var(--theme-primary-color-s2)] font-semibold'>12 Dec 2019</p>
                              <h3 className='text-[40px] head-font'>Our Engagement Day</h3>
                              <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='absolute left-0 bottom-0'>
                  <img src='image/flower-shape2.svg'></img>
              </div>
          </section>
      </div>
  )
}

export default HotItWorks
