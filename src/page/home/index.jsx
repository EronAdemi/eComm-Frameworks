import Layout from "../../components/layout";
import twitter from '../../assets/twitter-sign.png'
import application from '../../assets/application.png'
import facebook from '../../assets/facebook.png';
import cover from '../../assets/cover.png';
import ProductCard from "../../components/modules/home/product-card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from '../../components/loading'


const Home = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const data = useSelector((state) => state.cart);

  console.log('===data store', data);

  const filterProducts = (searchInput) => {
  return products.filter(product =>
    product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
    product.price.toString().includes(searchInput)
  );
};

  useEffect(() => {
    setLoad(true)
    axios.get('https://v2.api.noroff.dev/online-shop').then((res) => {
      setProducts(res.data.data);
      setLoad(false);
    })
  }, [])
  return (
    <Layout>
      {/* hero section */}
      <section id="hero">
        <div
          className="w-full bg-gradient-to-l from-[#F8B91D] to-[#f86d0c] "
        >
          <div className="flex flex-col  relative space-y-8 items-center justify-center h-full">
            <img className="w-full min-h-[30.625rem] object-cover " src={cover} alt="" />
            {/* <h1 className="text-4xl md:text-8xl text-[#F8F7F4] font-bold">
              MARKETSQUARE
            </h1> */}
            <div className="flex flex-row space-x-2 pt-24 absolute bottom-[30px]">
              <img className="w-6 h-6" src={twitter} alt="" />
              <img className="w-6 h-6" src={application} alt="" />
              <img className="w-6 h-6" src={facebook} alt="" />

            </div>
          </div>
        </div>
      </section>

      {/* Products sections */}
      <section className="pt-16 pb-8">

        <div
          className="flex flex-col lg:flex-row flex-wrap gap-y-20 gap-x-[5px] space-y-4 md:space-y-0 md:space-x-4 items-center justify-center"
        >
          {
            load ? <Loading /> : products && products.length > 0 ? products.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              )
            }) : 'No data found'
          }
        </div>

      </section>
    </Layout>
  )
}

export default Home
