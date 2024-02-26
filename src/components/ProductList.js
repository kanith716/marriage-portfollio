import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addproduct } from '../store/ProductSlice';
import { wishlistAdd } from './WhishList';
import  Error  from './Error';

function ProductList() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const productDispatch = useDispatch();


    // Function to make the Axios call
    const fetchData = async () => {
        try {
            // Make the Axios GET request to a sample API endpoint
            const response = await axios.get('http://localhost:5000/getdata');
            // Set the response data in the state
            setResponseData(response.data);
            
            // Clear any previous error
            setError(null);
        } catch (error) {
            // If an error occurs, set the error state
            console.log("error", error)
            setError(error);
        }
    };


    const [productsToShow, setProductsToShow] = useState(4);

    function addCartHandle(event) {
        var  parentElement = event.target.closest('.product-wrap');
        var itemPrice = parentElement.querySelectorAll('.item-price')[0].innerHTML;
        var itemName = parentElement.querySelectorAll('.item-name')[0].innerHTML;
        var itemImgSrc = parentElement.querySelectorAll('.pro-img')[0].getAttribute('src');
    //    var addCountCart =  cartItemCount.filter(item => item.itemName == itemName);
        var itemCount = 1
        // var totalItemPrice = itemPrice * itemCount;
        productDispatch(
            addproduct({
                id: nanoid(),
                itemName,
                itemPrice,
                itemImgSrc,
                itemCount
            })
        )
       
    }

    

    useEffect(()=>{
        fetchData();
       
        // alert()
    }, [productsToShow]);
    // Function to handle "Load More" button click
    const handleLoadMore = () => {
        setProductsToShow(prev => prev + 4); // Increase the number of products to show by 4
    };


    //wishlist add proceess to store 

    const dispatchWishlist = useDispatch();

    function wishlistAdd (event) {

        var wishlistParent = event.target.closest('.product-wrap');
        var itemPrice = wishlistParent.querySelectorAll('.item-price')[0].innerHTML;
        var itemName = wishlistParent.querySelectorAll('.item-name')[0].innerHTML;
        var itemImgSrc = wishlistParent.querySelectorAll('.pro-img')[0].getAttribute('src');

        dispatchWishlist(
            wishlistAdd(
                {
                    id: nanoid(),
                    itemName,
                    itemPrice,
                    itemImgSrc,
                }
            )
        )
    }

    return (
        <div>
            
        <div className='grid grid-cols-4  gap-4'>
            {responseData && responseData.slice(0, productsToShow).map(ele=>(
                <div className='product-wrap' key={ele.id}>
                <div className='overflow-hidden group relative'>
                            <img alt='Product' src={`http://localhost:5000/${ele.imagePath}`} className='transition-all duration-300  group-hover:scale-110 
                            pro-img'></img>
                    <div className="absolute h-[90%] w-[90%]  flex items-end justify-center border  -bottom-10 group-hover:bottom-[15px] group-hover:left-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className='flex items-center pb-4 justify-center'>
                            <button className='p-2 bg-white mr-3 hover:bg-[var(--theme-primary-color)] hover:text-[var(--white)]' onClick={wishlistAdd}><span className=''><CiHeart className='text-[25px]' /></span></button>
                            <button className="p-4 bg-white hover:bg-[var(--theme-primary-color)] hover:text-[var(--white)] text-[var(--theme-primary-color)]  py-2 px-5 " onClick={addCartHandle}>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                        <a href='#' className='block head-font text-[20px] pt-4 item-name' >{ele.productName}</a>
                        <span className='text-[--theme-primary-color-s2] pt-2 item-price'>{ele.price}</span>
                </div>
            </div>
               
            )) }
            {error && <div>Error: {error.message}</div>}
        </div>
            { productsToShow && (
                <div className='text-center pt-10'>
                    <button className='px-5 py-3 bg-[var(--theme-primary-color)] text-white load-btn' onClick={handleLoadMore}>Load More</button>
                </div>
            )}
         </div>
    )
}

export default ProductList
