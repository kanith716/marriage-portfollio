import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Header from './Header';




export default function Shop() {

  
    return (
        <div>
            {/* <Test></Test> */}
            <Header></Header>
            <section className='product-banner'>
                <div className='container mx-auto'>
                    <div className='text-center py-[20vh]'>
                        <h1 className='text-[50px]'>Shop </h1>
                        <p>Home .</p>
                    </div>
                </div>
            </section>
            <section className='py-[10vh]'>
                <div className='md:w-9/12 mx-auto'>
                    <ProductList></ProductList>
                    {/* <div className='text-center pt-10'>
                        <button className='px-5 py-3 bg-[var(--theme-primary-color)] text-white load-btn' onClick={handleLoadMore}>Load More</button>
                    </div> */}
                </div>
            </section>
        </div>
    )
}
