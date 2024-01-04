import React from 'react'

function Story() {
  return (
      <section className='h-[100vh] flex items-center'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-4'>
                  <div>
                    <div className='text-center'>
                          <div className='relative '>
                              <img src='/image/mrg-1.png' className='mx-auto'></img>
                              <div className='absolute top-0  z-[-2]'>
                                  <img src='/image/story-shape-1.png'></img>
                              </div>
                          </div>
                          <p className='text-[var(--theme-primary-color-s2)] font-semibold'>15 June 2014</p>
                          <h3 className='text-[30px] head-font'>How we meet</h3>
                          <p className='text-[var(--body-color)]'>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero.</p>
                    </div>
                  </div>
                  <div>
                      <div className='text-center'>
                          
                          <div className='relative '>
                              <img src='/image/mrg-2.png' className='mx-auto'></img>
                              <div className='absolute top-0  z-[-2]'>
                                  <img src='/image/story-shape-1.png'></img>
                              </div>
                          </div>
                         
                          <p className='text-[var(--theme-primary-color-s2)] font-semibold'>12 Dec 2019</p>
                          <h3 className='text-[30px] head-font'>He proposed, I said yes</h3>
                          <p className='text-[var(--body-color)]'>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero.</p>
                      </div>
                  </div>
                  <div>
                      <div className='text-center'>
                          <div className='relative '>
                              <img src='/image/mrg-3.png' className='mx-auto'></img>
                              <div className='absolute top-0  z-[-2]'>
                                  <img src='/image/story-shape-1.png'></img>
                              </div>
                          </div>
                          <p className='text-[var(--theme-primary-color-s2)] font-semibold'>16 Jan 2023</p>
                          <h3 className='text-[30px] head-font'>Our Engagement Day</h3>
                          <p className='text-[var(--body-color)]'>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero.</p>
                      </div>
                  </div>
            </div>
          </div>
    </section>
  )
}

export default Story
