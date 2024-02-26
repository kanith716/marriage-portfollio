import './App.css';
import Habibi from './components/Habibi';
import { Route, Routes, Router } from "react-router-dom";
import Product from './components/Shop';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';
import CheckOut from './components/CheckOut';
import ThankYou from './components/ThankYou';
import WhishList from './components/WhishList';
import Error from './components/Error';





function App() {
  return (
    <main>
      <Error></Error>
        <Routes>
          <Route path="/" element={<Habibi />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="/product-1" element={<SingleProduct />} />
        <Route path="/orderrecived" element={<ThankYou></ThankYou>} />
        <Route path="/wishlist" element={<WhishList></WhishList>} />
          {/* <Route path="*" element={<ErrorPage></ErrorPage>} /> */}
        </Routes>

      {/* <Habibi></Habibi> */}
    </main>
  );
}

export default App;
