import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import {  useSelector } from 'react-redux';
// import { Nav, NavLink, NavMenu } from '' ;
import { Link } from 'react-router-dom';
import WhishList from './WhishList';


function Header() {

  const cartCount = useSelector((state) => state.product)







  return (
   
    <div className='px-5 pt-3'>
      
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-3'>
            <div>
                      <a href='/' className='head-font text-[40px] ps-5 md:ps-10 text-[var(--theme-primary-color)]'>Habibi</a>
            </div>
           
        </div>
              <div className='col-span-6 '>
                  <div className='text-center pt-4'>
                     
                  <ul>
                    <li className='inline-block pe-5'><Link className='text-[15px] font-semibold inline-block' to="/">HOME</Link></li>
                    <li className='inline-block pe-5'><Link className='text-[15px] font-semibold inline-block' to="/product">PRODUCT</Link></li>
                    <li className='inline-block pe-5'><Link className='text-[15px] font-semibold inline-block' to="/cart">CART</Link></li>
                    <li className='inline-block pe-5'><Link className='text-[15px] font-semibold inline-block' to="/checkout">CHECKOUT</Link></li>
              <li className='inline-block pe-5'><Link className='text-[15px] font-semibold inline-block' to="/orderrecived">ORDER DETAILS</Link></li>
              <li className='inline-block pe-5'><Link className='text-[15px] font-semibold inline-block' to="/wishlist">WHISHLIST</Link></li>
                  </ul>
                  </div>
              </div>
              <div className='col-span-3 pt-4'>
                  <div className='flex items-center justify-end '>
                      <div className='px-4'><IoIosSearch className='text-[25px]' /></div>
            <div className='px-4 relative'><BsCart2 className='text-[25px] ' />

              {cartCount.length > 0 && <span className='absolute bottom-[12px] right-3 rounded-full text-[10px] text-white text-center w-5 h-5 leading-5 bg-[var(--theme-primary-color)]'>{cartCount.length}</span>}
            
            
            </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default Header
