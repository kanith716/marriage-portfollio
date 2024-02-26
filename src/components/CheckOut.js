import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Header from './Header';
import { FaMinus } from "react-icons/fa6";
import { useSelector } from 'react-redux';




const CheckOut = () => {

    const [accOneOpen, setOneOpen] = useState(false);
    const [accTwoOpen, setTwoOpen] = useState(false);
    const [accThreeOpen, setThreeOpen] = useState(false);

    const accOpenFunTwo = () => {
        setTwoOpen(!accTwoOpen);
    }


    const accOpenFunThree = () => {
        setThreeOpen(!accThreeOpen);
    }

    const accOpenFunOne = () => {
        setOneOpen(!accOneOpen);
    }

    // cart form 
    const [formData, setFormData] = useState({
        firstname: '',
        lastname:'',
        age:'',
        email: '',
        address: '',
        phonenumber:'',
        district:'',
        pricetag:'',
        cardnumber:'',
        expriaydata:'',
        cvv:'',
        cardholdernames:''

    });

    const checkoutFields = (e)=>{
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // form handle validation 
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate and submit form data

        var formStatus;
    
        for (let key in formData) {
            if (formData[key] === '' && key !== "pricetag"){
                document.querySelector(`[name=${key}]`).classList.add("error");
                setThreeOpen(true);
                setTwoOpen(true);
                formStatus = false;
            }else{
                document.querySelector(`[name=${key}]`).classList.remove("error")
            }
        }

        if (formStatus){
            setFormData(
                {
                    firstname: '',
                    lastname: '',
                    age: '',
                    email: '',
                    address: '',
                    phonenumber: '',
                    district: '',
                    pricetag: '',
                    cardnumber: '',
                    expriaydata: '',
                    cvv: '',
                    cardholdernames: ''

                }
            )
        }


      
    };
  

    // total in checkout page 

    const cartStore = useSelector(state => state.product);
   
    useEffect(() => {
 
        var grandTotal = 0;
        var totalItems = 0;
        
        cartStore.forEach((ele) => {
            grandTotal += ele.itemCount * (ele.itemPrice.replace("$", ""));
            totalItems += ele.itemCount ;
        })
        document.getElementById("grandTotal").innerHTML = `$${grandTotal}`;
        document.getElementById("subprice").innerHTML = `$${grandTotal}`;
        document.getElementById("totalItemsCount").innerHTML = `${totalItems}`;
       

    }, [cartStore])


    return (
        <div>
            <Header></Header>
            <section className='product-banner'>
                <div className='container mx-auto'>
                    <div className='text-center py-[20vh]'>
                        <h1 className='text-[50px]'>Shop </h1>
                        <p>Home . Shop</p>
                    </div>
                </div>
            </section>
            <section className='py-[15vh]'>
                <div className='container md:w-10/12  mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 grid-flow-col gap-10'>
                            <div className='white-shadow p-5 items-center flex justify-center flex-col'>
                                <div className='pb-5 w-full'>
                                    <div className='border flex justify-between items-center p-3 transition duration-700 ease-in-out' onClick={accOpenFunOne}>
                                        <button className='btn text-[16px] font-semibold check-btn'>Have a coupon ? Click here to enter your code.</button>
                                        <p>{accOneOpen ? <FaMinus /> : <FaPlus />} </p>
                                    </div>

                                    <div className={accOneOpen ? ' acc-wrapper  h-full transition duration-700 ease-in-out  ' : 'h-[0] acc-wrapper overflow-hidden transition duration-700 ease-in-out'}>
                                        <p className='pb-5 text-[14px] font-semibold text-[var(--body-color)] pt-3'>If you have coupon code,please apply it</p>
                                        <input
                                            type="text"
                                            onChange={checkoutFields}
                                            name="pricetag"
                                            id="price"
                                            className="block w-full rounded-md border-0 py-4 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder=""
                                            value={formData.pricetag}
                                        />
                                        <button className="p-2 bg-[var(--dark-gray)] hover:bg-[var(--theme-primary-color)]  border-2 px-5 inline-block hover:text-[var(--white)] text-white  py-2 mt-3 rounded-md">Apply</button>
                                    </div>
                                </div>
                                <div className='pb-5'>
                                    <div className='border flex justify-between items-center p-3' onClick={accOpenFunTwo}>
                                        <button className='btn text-[16px] font-semibold check-btn' type='button'>Billing Address</button>
                                        <p>{accTwoOpen ? <FaMinus /> : <FaPlus />} </p>
                                    </div>
                                    <div className={accTwoOpen ? ' acc-wrapper h-full overflow-hidden' : ' acc-wrapper h-[0] overflow-hidden'}>

                                        <div className='grid grid-cols-12 gap-4 pt-4'>
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="firstname"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="First Name"
                                                value={formData.firstname}
                                            />
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="lastname"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="Last Name"
                                                value={formData.lastname}
                                            />
                                            <div className='col-span-4'>
                                                <div
                                                    className="relative flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
                                                    {/* <!-- Select m enu --> */}
                                                    <select required 
                                                    name="age"
                                                    onChange={checkoutFields}
                                                        value={formData.age}
                                                        className="text-black/70 bg-white px-3 py-2 text-[14px] transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64">
                                                        {/* <option value="" disabled selected>Select an option</option> */}
                                                        <option value="ten">Ten</option>
                                                        <option value="twenty">Twenty</option>
                                                        <option value="thirty">Thirty</option>
                                                        <option value="other">other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="district"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-8"
                                                placeholder="District"
                                                value={formData.district}
                                            />
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="address"
                                                id="price"
                                                className="block w-full  rounded-md border-0 py-10 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-12"
                                                placeholder="Address"
                                                value={formData.address}
                                            />

                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="phonenumber"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="Phone Number"
                                                value={formData.phonenumber}
                                            />
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="email"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="Email"
                                                value={formData.email}
                                            />

                                           
                                        </div>

                                        {/* <button classNamw="p-2 bg-[var(--dark-gray)] hover:bg-[var(--theme-primary-color)]  border-2 px-5 inline-block hover:text-[var(--white)] text-white  py-2 mt-3 rounded-md">Apply</button> */}
                                    </div>
                                </div>
                                <div className='pb-0 mb-0'>
                                    <div className='border flex justify-between items-center p-3' onClick={accOpenFunThree}>
                                        <button className='btn text-[16px] font-semibold check-btn' type='button'>Payment Methode</button>
                                        <p>{accThreeOpen ? <FaMinus /> : <FaPlus />} </p>
                                    </div>
                                    <div className={accThreeOpen ? ' acc-wrapper  overflow-hidden' : ' acc-wrapper h-[0px] overflow-hidden'}>

                                        <div className='grid grid-cols-12 gap-4 pt-4'>
                                            <div className='col-span-12 '>
                                                <div className='grid grid-cols-4 gap-2'>
                                                    <div className='border flex justify-center items-center p-5'>
                                                        <img src='/image/c-1.png'></img>
                                                    </div>
                                                    <div className='border flex justify-center items-center p-5'>
                                                        <img src='/image/c-2.png'></img>
                                                    </div>
                                                    <div className='border flex justify-center items-center p-5'>
                                                        <img src='/image/c-3.png'></img>
                                                    </div>
                                                    <div className='border flex justify-center items-center p-5'>
                                                        <img src='/image/c-4.png'></img>
                                                    </div>
                                                </div>
                                            </div>

                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="cardholdernames"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="Card Holder Name"
                                                value={formData.cardholdernames}
                                            />
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="cardnumber"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="Card Number"
                                                value={formData.cardnumber}
                                            />
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="cvv"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="CVV"
                                                value={formData.cvv}
                                            />
                                            <input
                                                type="text"
                                                onChange={checkoutFields}
                                                name="expriaydata"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-6"
                                                placeholder="Expiry Date"
                                                value={formData.expriaydata}
                                            />
                                            <button type='submit' className='p-3  bg-[var(--theme-primary-color)] text-[16px] font-semibold text-white px-10 sm:leading-6 col-span-12'>Continue Shopping</button>
                                        </div>

                                        {/* <button class="p-2 bg-[var(--dark-gray)] hover:bg-[var(--theme-primary-color)]  border-2 px-5 inline-block hover:text-[var(--white)] text-white  py-2 mt-3 rounded-md">Apply</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='white-shadow p-5'>
                                    <h2 className='head-font text-[25px] pb-5'>Cart Total</h2>
                                   
                                        {cartStore && cartStore.map((ele) =>(
                                             <div className='flex justify-between items-center pb-3 border-slate-100 border-b'>
                                                <p className='text-[15px]'>{ele.itemName}</p>
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
                    </form>
                   
                </div>
            </section>
        </div>
    )
}

export default React.memo(CheckOut);

