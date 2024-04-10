import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/slices";
import noData from '../../assets/9214833.jpg';
import { customToast } from "../../../static-functins";

const Cart = () => {

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cart) => {
    dispatch(removeItem(cart));
    customToast('success', 'Cart item Removed!')
  };

  return (
    <Layout>
      <section className="border-y-2 border-black mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <div
              className="w-[80%] my-5 mx-16 border border-gray-600 rounded-md py-3 px-6 space-y-4"
            >
              <h4 className="font-semibold ml-4">Available Offers</h4>
              <div className="flex flex-row items-center justify-start space-x-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-gray-500"
                >10% instant discount when spending more than $270</span
                >
              </div>
              <div className="ml-4">
                <a className="text-blue-700 font-bold" href="#">SHOW MORE</a>
              </div>
            </div>

            <div
              className="w-[80%] mx-16 my-8 font-bold flex flex-col md:flex-row md:justify-between justify-center items-center"
            >
              <h1>My Shopping Bag({cart.items.length} Items)</h1>
              <h2>Total: {cart.items.reduce((total, item) => total + item.price, 0)}</h2>
            </div>

            {
              cart && cart.items && cart.items.length ? cart.items.map((cart) => {
                return (
                  <div key={cart.id}
                    className="w-[80%] my-5 mx-16 border border-gray-600 rounded-md py-3 px-6 space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="col-span-1 bg-gray-400 p-3 rounded">
                        <img src={cart.image.url} alt="" className="max-w-[230px] rounded-md max-h-[230px] w-full h-full" />
                      </div>
                      <div className="col-span-2">
                        <div
                          className="flex flex-col space-y-2 md:flex-row justify-between items-center"
                        >
                          <h1 className="font-bold text-xl">BRAND</h1>
                          <h3 className="font-bold">{cart.price}</h3>
                        </div>
                        <div className="text-center md:text-left">
                          <h2>{cart.title}</h2>
                        </div>
                    
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 border text-center">
                      <div className="col-span-1 border-y md:border-x p-5 h-full" onClick={() => handleRemoveFromCart(cart)}>
                        <button>REMOVE</button>
                      </div>
                      <div className="col-span-2 p-5 border-y md:border-x">
                        <button>MOVE TO WISHLIST</button>
                      </div>
                    </div>
                  </div>
                )
              }) : <div className="flex justify-center">
                <img src={noData} alt="" className="h-[150px] w-[150px]" />
              </div>
            }





            <div
              className="w-[80%] my-5 mx-16 border border-gray-600 rounded-md py-3 px-6 space-y-4"
            >
              <div className="flex flex-row justify-start items-center space-x-5">
                <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    /></svg
                  ></span>
                <span className="font-bold md:text-xl text-base"
                >ADD MORE FROM WISHLIST</span
                >
              </div>
            </div>
          </div>
          <div className="md:border-x border-black mt-2 py-3 px-8">
            <div className="text-center md:text-left text-gray-500">Coupon</div>
            <div
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center border-b border-b-gray-700 pb-7 mt-3"
            >
              <div className="flex items-center justify-start space-x-2">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <h1 className="font-bold">Apply Coupons</h1>
              </div>
              <div>
                <button
                  className="py-1 px-3 border border-pink-600 rounded-md text-pink-600"
                >
                  APPLY
                </button>
              </div>
            </div>

            <div className="mt-3 space-y-3 pb-4 border-b border-b-gray-600">
              <h2 className="text-center md:text-left">PRICE DETAILS ({cart.items.length}  Items)</h2>
              <div
                className="flex flex-col md:flex-row justify-between items-center font-semibold"
              >
                <span>Total</span>
                <span>{cart.items.reduce((total, item) => total + item.price, 0)}</span>
              </div>

              <div
                className="flex flex-col md:flex-row justify-between items-center font-semibold"
              >
                <span>Tax Fee</span>
                <span>$0</span>
              </div>
            </div>
            <div
              className="flex flex-col md:flex-row justify-between items-center font-semibold mt-3"
            >
              <span>Total Amount</span>
              <span>{cart.items.reduce((total, item) => total + item.price, 0)}</span>
            </div>
            <div className="flex items-center justify-center">
              <Link to={'/success'} className={`text-center w-[50%] md:w-full mt-16 py-3 px-6 ${cart.items.length === 0 ? 'bg-[#c7c5c5]' : 'bg-[#ff4b4b]'}  text-white rounded-md md:text-xl font-semibold`}>
                <button disabled={cart.items.length === 0}
                >
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Cart
