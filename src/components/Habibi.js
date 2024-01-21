import React from 'react';
import Banner from './Banner';
import DayCount from './DayCount';
import MarriageBanner from './MarriageBanner';
import Story from './Story';
import HotItWorks from './HotItWorks';
import Footer from './Footer';

function Habibi() {
  return (
    <div className='md:overflow-auto overflow-x-hidden'>
      <Banner></Banner>
      <DayCount></DayCount>
      <MarriageBanner></MarriageBanner>
            <Story></Story>
      <HotItWorks></HotItWorks>

      {/* <Footer></Footer> */}
    </div>
  )
}

export default Habibi
