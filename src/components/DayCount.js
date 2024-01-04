import React from 'react'

function DayCount() {
  return (
      <section className='h-[100vh] flex items-center'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 w-sm-[45%]'>
                  <div className='text-center round-image p-10'>
                    <div>
                          <h2 className='leading-[130px] text-[100px] head-font text-[var(--theme-primary-color)]'>357</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Days</span>
                    </div>
                  </div>
                  <div className='text-center round-image p-10'>
                      <div>
                          <h2 className='leading-[130px] text-[100px] head-font text-[var(--theme-primary-color)]'>19</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Month</span>
                      </div>
                  </div>
                  <div className='text-center round-image p-10'>
                      <div>
                          <h2 className='leading-[130px] text-[100px] head-font text-[var(--theme-primary-color)]'>12</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Min</span>
                      </div>
                  </div>
                  <div className='text-center round-image p-10'>
                      <div>
                          <h2 className='leading-[130px] text-[100px] head-font text-[var(--theme-primary-color)]'>11</h2>
                          <span className='text-[var(--theme-primary-color)] text-[30px]'>Sec</span>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default DayCount
