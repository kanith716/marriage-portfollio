import React from 'react'
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementItemCount, removeProduct } from '../store/ProductSlice';
import { RiDeleteBin6Line } from "react-icons/ri";


function WhishList() {

    const wishlists = useSelector((state) => state.product);
    const wishlistDispatch = useDispatch();

    const removeItem = (e) => {
        var parentele = e.target.closest('tr').getAttribute('product-id');

        wishlistDispatch(
            removeProduct({
                id: parentele
            })
        )

    }



    return (
        <div >
            <Header></Header>
            <section className='product-banner'>
                <div className='container mx-auto'>
                    <div className='text-center py-[20vh]'>
                        <h1 className='text-[50px]'>wishlist </h1>
                        <p>Home . wishlist</p>
                    </div>
                </div>
            </section>
            <section className='pt-10'>
                <div className='container mx-auto'>
                    <div className='white-shadow mx-5 '>
                        <table className='w-full mx-auto '>
                            <thead>
                                <tr className='border-b-2 border-slate-50'>
                                    <th className='py-10'>Image</th>
                                    <th className='py-10 ps-5'>Product Name</th>
                                    <th className='py-10'>Price</th>
                                    <th className='py-10'>Stock Status</th>
                                    <th className='py-10'>Action</th>
                                </tr>
                                {wishlists && wishlists.map((ele) => (

                                    <tr className='border-b-2 border-slate-50' key={ele.id} product-id={ele.id}>
                                        <td className='w-[15%] p-10'><img alt='cart product' src={ele.itemImgSrc}></img></td>
                                        <td className='ps-10 w-[15%]'>
                                            <ul>
                                                <li className='py-1'>{ele.itemName}</li>
                                                <li className='py-1'><span>Brand :</span> Gucci</li>
                                                <li className='py-1'><span>Size :</span> XXl</li>
                                            </ul>
                                        </td>
                                       
                                        <td className='w-[15%]  text-center '>
                                            <h4 className='text-[20px] text-[var(--body-color)]'>{ele.itemPrice}</h4>
                                        </td>
                                        <td className='w-[15%]  text-center '>
                                            <h4 className='text-[20px] text-[var(--body-color)] total-price'>Stock In</h4>
                                        </td>
                                        <td className='w-[15%]  text-center '>
                                            <span className='text-[20px] inline-block bg-black text-white p-2 rounded ' onClick={removeItem}><RiDeleteBin6Line /></span>
                                        </td>
                                    </tr>
                                ))}
                            </thead>
                        </table>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default WhishList
