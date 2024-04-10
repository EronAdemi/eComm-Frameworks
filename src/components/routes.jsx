import { Route, Routes } from 'react-router'
import Home from '../page/home'
import Cart from '../page/cart'
import Checkout from '../page/checkout'
import Success from '../page/checkout-success'
import ProductDetails from '../page/product-details/product-details'
import ContactUs from '../page/contact'

const Links = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default Links
