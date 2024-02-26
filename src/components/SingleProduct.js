import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Header from './Header';


function SingleProduct() {
  return (
    <div>
      <Header></Header>
      <section className='product-banner'>
        <div className='container mx-auto'>
          <div className='text-center py-[20vh]'>
            <h1 className='text-[50px]'>Product Single </h1>
            <p>Home . Product</p>
          </div>
        </div>
      </section>
      <section className='py-[15vh]'>
        <div className='container mx-auto'> 
          <div className='grid grid-cols-2 gap-1 md:w-11/12 mx-auto'>
              <div className=''>
                <img className='mx-auto' alt='single Product' src='/image/3-p.jpg'></img>
              </div>
              <div>
              <h1 className='text-[30px]'>Mixed Rose Bouquet</h1>
              <p className='pt-3'>
                <span><FaStar className='text-[yellow] inline-block' /></span>
                <span><FaStar className='text-[yellow] inline-block' /></span>
                <span><FaStar className='text-[yellow] inline-block' /></span>
                <span><FaStar className='text-[yellow] inline-block' /></span>
                <span><CiStar className='text-[yellow] inline-block text-[24px]' /></span>

                <span className='inline-block ms-3'>(25 customer reviews)</span>
              </p>
              <h4 className='text-[25px] font-bold text-[var(--body-color)] py-5'>$125.00</h4>
              <p className='pt-3 text-[var(--body-color)]'>There are many variations of passages of Lorem Ipsum and available, but the majority have suffered alteration in somey form, by injected humour, or randomised words which don't look even slightly believable.</p>
              <div className='py-5'>
                <ul className='ps-5'>
                  <li className='pt-3 list-disc	text-[var(--body-color)]'>Going through the cites of the word in classNameical.</li>
                  <li className='pt-3 list-disc	text-[var(--body-color)]'>There are many variations of passages.</li>
                  <li className='pt-3 list-disc	text-[var(--body-color)]'>Making it look like readable and spoken English.</li>
                </ul>
                
              </div>
              <button class="p-4 bg-white hover:bg-[var(--theme-primary-color)]  border-2 px-10 inline-block hover:text-[var(--white)] text-[var(--theme-primary-color)]  py-2 mt-3">Add to cart</button>
              <p className='pt-5'><span className='font-bold '>Categories:</span>Ornaments</p>
              <p><span className='font-bold '>Tags:</span> Jewellery, events, wedding</p>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleProduct
