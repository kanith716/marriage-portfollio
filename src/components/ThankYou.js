import React, { useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ThankYou() {

    const cartStore = useSelector(state => state.product);

    useEffect(() => {

        var grandTotal = 0;
        var totalItems = 0;

        cartStore.forEach((ele) => {
            grandTotal += ele.itemCount * (ele.itemPrice.replace("$", ""));
            totalItems += ele.itemCount;
        })
        document.getElementById("grandTotal").innerHTML = `$${grandTotal}`;
        document.getElementById("subprice").innerHTML = `$${grandTotal}`;
        document.getElementById("totalItemsCount").innerHTML = `${totalItems}`;


    }, [cartStore])


  return (
    <div>
        <Header></Header>
          <div className='w-10/12 mx-auto mt-[25vh] items-center white-shadow py-10 flex justify-between'>
              <div className='ps-10'>
                  <h1 className='text-[35px]'>Thank You For Your Shoping!</h1>
                  <p>Your Shoping has been recived</p>
              </div>
              <div className='pe-10'>
                  <button type='button' className='p-3 me-4 bg-[var(--theme-primary-color)] text-[16px] font-semibold text-white px-10'><Link className='text-[15px] font-semibold inline-block' to="/">Back Home</Link></button>
              </div>
         </div>
         <div className='my-[10vh] w-10/12 mx-auto'>
              <div className='white-shadow p-5'>
                  <h2 className='head-font text-[25px] pb-5'>Cart Total</h2>

                  {cartStore && cartStore.map((ele) => (
                      <div className='flex justify-between items-center pb-3 border-slate-100 border-b'>
                          <div>

                              <img alt='product' className='inline-block w-[80px] me-2 h-[80px] object-cover' src={ele.itemImgSrc}></img>

                              <p className='text-[15px] inline-block ps-5'>{`${ele.itemName} ${ele.itemPrice} x ${ele.itemCount}`  }</p>
                          </div>

                          <span className='text-[15px]'>{ele.itemPrice}</span>
                      </div>
                  ))}

                  <div className='flex justify-between pt-3 items-center pb-3 border-slate-100 border-b'>
                      <p className='text-[15px]'>
                          Total Item
                      </p>
                      <span className='text-[15px]' id='totalItemsCount'>1</span>
                  </div>
                  <div className='flex justify-between pt-3 items-center pb-3 border-slate-100 border-b'>
                      <p className='text-[15px]'>
                          Sub Price
                      </p>
                      <span className='text-[15px]' id='subprice'>$6400</span>
                  </div>
                  <div className='flex justify-between pt-3 items-center pb-3 border-slate-100 border-b'>
                      <p className='text-[15px]' >
                          Total Price
                      </p>
                      <span className='text-[15px]' id='grandTotal'>$6400</span>
                  </div>
              </div>
         </div>
    </div>
  )
}

export default ThankYou
