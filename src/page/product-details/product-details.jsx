import Layout from "../../components/layout";
import jacket from '../../assets/Jacket-Free-PNG-Image.png';
import ProductCard from "../../components/modules/home/product-card";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { addItem } from "../../store/slices";
import { useDispatch } from "react-redux";
import { customToast } from "../../../static-functins";

const ProductDetails = () => {
  const params = useParams();

  const [productData, setProductData] = useState(null);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(productData));
    customToast('success', 'Product Added To Cart!')
  };


  useEffect(() => {
    axios.get(`https://v2.api.noroff.dev/online-shop/${params.id}`).then((res) => {
      setProductData(res.data.data);
      console.log('===res details', res.data.data);
    })
  }, []);
  return (
    <Layout>
      <section className="p-5">
        <div className="mb-4">
          <ul
            className="flex flex-row space-x-1 justify-center items-center md:justify-start text-gray-500"
          >
            <li><a href="#">Home /</a></li>
            <li><a href="#">Men /</a></li>
            <li><a href="#">Jackets /</a></li>
            <li><a href="#">OrangeJacket</a></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
          <div>
            <div className="bg-gray-300 rounded-md shadow-lg max-w-[670px]">
              <img src={productData?.image?.url} alt="" className="max-w-[670px] rounded-md w-full" />
            </div>
          </div>

          <div className="m-5">
            <h1 className="font-bold text-3xl text-center md:text-left">BRAND</h1>
            <h2 className="font-semibold text-2xl mt-2 text-center md:text-left">
              {productData?.title}
            </h2>
            <h3 className="font-bold text-xl mt-4 text-center md:text-left">{productData?.price}</h3>


            <div
              className="flex flex-col justify-center md:justify-start items-center mt-5 space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
            >
              <button
                className="flex flex-row justify-center  items-center md:w-[18.75rem] w-full border py-5 bg-[#ff4b4b] text-white rounded-md hover:scale-105"
                onClick={() => handleAddToCart()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="mr-3 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Add to cart
              </button>

              <button
                className="flex flex-row justify-center items-center md:w-[18.75rem] w-full border py-5 bg-white text-[#ff4b4b] rounded-md hover:scale-105"
              >
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
                WISHLIST
              </button>
            </div>
            <div className="mt-5 text-center md:text-left">
              <h4 className="font-bold">Delivery Options</h4>
            </div>
            <div className="md:inline-block border mt-2 p-2 flex flex-row items-center justify-between">
              <input className="outline-none text-[#ff4b4b]" type="text" name="" id="" placeholder="Enter post code" />
              <span className="font-semibold text-[#ff4b4b]">CHECK</span>
            </div>

            <div className="mt-4 space-y-1 text-gray-500 text-md text-opacity-60 text-center md:text-left">
              <h1>Categories : </h1>
              <div className="flex gap-[8px] flex-wrap">
                {
                  productData?.tags?.map((tag) => {
                    return (
                      <div key={tag} className="bg-gray-500 my-1 text-white p-[4px_10px] rounded-[4px]">{tag}</div>
                    )
                  })
                }
              </div>
              <h5>100% Quality products</h5>
              <h5>100% Money back guarentee</h5>
              <h5>Easy 30-day exchange & return policy</h5>
            </div>

            <div className="my-10 border-b border-black"></div>

            <div className="my-5 text-center space-y-4">
              <h5 className="font-bold">More Info</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum officiis, nihil aut nobis autem laudantium aliquam molestias ab at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum officiis, nihil aut nobis autem laudantium aliquam molestias ab at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum officiis, nihil aut nobis autem laudantium aliquam molestias ab at?</p>
              <p className="mt-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum officiis, nihil aut nobis autem laudantium aliquam molestias ab at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum officiis, nihil aut nobis autem laudantium aliquam molestias ab at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum officiis, nihil aut nobis autem laudantium aliquam molestias ab at?</p>
              <p className="mt-3 text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, facilis natus. Ipsum architecto amet doloribus necessitatibus totam voluptas temporibus ducimus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 my-10">
        <div className="grid grid-cols-3 ">
          <div className=" border-b border-black"></div>
          <div className="text-center">CUSTOMERS ALSO LIKED</div>
          <div className="border-b border-black"></div>
        </div>
        <div
          className="flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center mt-10"
        >

          {/* <ProductCard />
          <ProductCard />
          <ProductCard /> */}

        </div>
      </section>
    </Layout>
  )
}

export default ProductDetails
