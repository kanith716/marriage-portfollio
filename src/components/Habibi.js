import React from 'react';
import Banner from './Banner';
import DayCount from './DayCount';
import MarriageBanner from './MarriageBanner';
import Story from './Story';
import HotItWorks from './HotItWorks';
import Footer from './Footer';
import Invitation from './Invitation';
import Shop from './Shop';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import CheckOut from './CheckOut';
import Header from './Header';
import Audio from './Audio';
import Accordion from './Log';

function Habibi() {
  return (
    <div className='md:overflow-auto overflow-x-hidden'>
      {/* <CheckOut></CheckOut>
      <Cart></Cart>
      <SingleProduct></SingleProduct>
      <Shop></Shop>
      <Invitation></Invitation> */}
      <Header></Header>
      <Banner></Banner>
      <DayCount></DayCount>
      <MarriageBanner></MarriageBanner>
            <Story></Story>
      <HotItWorks></HotItWorks>
      {/* <Audio></Audio> */}
      <Accordion></Accordion>

      {/* <Footer></Footer> */}
    </div>
  )
}

export default Habibi
