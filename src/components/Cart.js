import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addItem, decrementItemCount, removeProduct } from '../store/ProductSlice'



function Cart() {

    const cartProduct = useSelector((state) => state.product);
  
    const productitemsDispatch = useDispatch();

    function addproductCount(e) {
        var curProductAdd = e.target.getAttribute('product-id')    ;
        
        productitemsDispatch(
            addItem({
                id: curProductAdd
            })
        )
    }

    function reduceproduct(e) {
        var curProduct = e.target.getAttribute('product-id');

        productitemsDispatch(
            decrementItemCount({
                id: curProduct
            })
        )
    }

    const removeItem = (e) => {
        var parentele = e.target.closest('tr').getAttribute('product-id');

        productitemsDispatch(
            removeProduct({
                id: parentele
            })
        )
        
    }

    
    useEffect(() => {

        var totalSub = document.querySelectorAll(".total-price");
        var totalSubprice = 0;
        totalSub.forEach((ele,index) => {
             totalSubprice = Number(totalSubprice) + Number(ele.innerHTML.replace("$", " "))
           
        });
      
        document.getElementsByClassName("total-subprice")[0].innerHTML = `$${totalSubprice}`;
       

    }, [cartProduct]);


    

    return (
        <div>
            <Header></Header>
            <section className='product-banner'>
                <div className='container mx-auto'>
                    <div className='text-center py-[20vh]'>
                        <h1 className='text-[50px]'>Cart </h1>
                        <p>Home . Cart</p>
                    </div>
                </div>
            </section>
            <section className='py-[15vh]'>
                <div className='container mx-auto'>
                    <div className='white-shadow mx-5 '>
                        <table className='w-full mx-auto '>
                            <thead>
                                <tr className='border-b-2 border-slate-50'>
                                    <th className='py-10'>Image</th>
                                    <th className='py-10 ps-5'>Product Name</th>
                                    <th className='py-10'>Quantity</th>
                                    <th className='py-10'>Price</th>
                                    <th className='py-10'>Total Price</th>
                                    <th className='py-10'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProduct && cartProduct.map((ele) =>(

                                    <tr className='border-b-2 border-slate-50' key={ele.id} product-id={ ele.id }>
                                        <td className='w-[15%] p-10'><img alt='cart product' src={ele.itemImgSrc}></img></td>
                                    <td className='ps-10 w-[15%]'>
                                        <ul>
                                            <li className='py-1'>{ele.itemName}</li>
                                            <li className='py-1'><span>Brand :</span> Gucci</li>
                                            <li className='py-1'><span>Size :</span> XXl</li>
                                        </ul>
                                    </td>
                                    <td className='w-[15%]'>
                                        <div className='flex items-center justify-center'>
                                                <button className='border px-2' onClick={reduceproduct} product-id={ele.id}>-</button>
                                                <input type='text' className='text-center w-[50px] border text-[18px] cart-count' value={ele.itemCount}></input>
                                                <button className='inline-block border px-2' onClick={addproductCount} product-id={ele.id}>+</button>
                                        </div>
                                    </td>
                                    <td className='w-[15%]  text-center '>
                                        <h4 className='text-[20px] text-[var(--body-color)]'>{ele.itemPrice}</h4>
                                    </td>
                                    <td className='w-[15%]  text-center '>
                                            <h4 className='text-[20px] text-[var(--body-color)] total-price'>${((ele.itemPrice).replace("$", "")) * (ele.itemCount)}</h4>
                                    </td>
                                    <td className='w-[15%]  text-center '>
                                        <span className='text-[20px] inline-block bg-black text-white p-2 rounded ' onClick={removeItem}><RiDeleteBin6Line /></span>
                                    </td>
                                    </tr>
                                ))}
                               
                            </tbody>
                        </table>
                        <div className='text-end py-10 pe-10 border-b-2 border-slate-50'>
                            <div>
                                <button type='button' className='p-3 me-4 bg-[var(--theme-primary-color)] text-[16px] font-semibold text-white px-10'>Continue Shopping</button>
                                <button type='button' className='p-3 bg-[var(--dark-gray)] text-white px-10 text-[16px] font-semibold'>Update Cart</button>
                            </div>
                        </div>
                        <div className='py-10 border-b-2 border-slate-50'>
                            <div className='flex justify-between '>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10'>Total product</p>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10'>({cartProduct.length})</p>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10'>Sub Price</p>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10 total-subprice'></p>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10'>Eco Tax</p>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10'>$0</p>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10'>Delivery Charge</p>
                                <p className='text-[18px] text-[var(--cart-text)] font-light px-10'>$40</p>
                            </div>
                        </div>
                        <div className='py-5 border-b-2 border-slate-50'>
                            <div className='flex justify-between pt-3'>
                                <p className='text-[18px] font-bold  px-10'>Total Price</p>
                                <p className='text-[18px] text-[var(--cart-text)] font-bold px-10'>$640</p>
                            </div>
                        </div>
                        <div className='text-end py-10 pe-10 border-b-2 border-slate-50'>
                            <div>
                                <button type='button' className='p-3 me-4 bg-[var(--theme-primary-color)] text-[16px] font-semibold text-white px-10'>Proceed To Checkout</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
