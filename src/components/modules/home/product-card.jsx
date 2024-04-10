import { Link } from "react-router-dom";
import jacket from "../../../assets/Jacket-Free-PNG-Image.png";
import { addItem } from "../../../store/slices";
import { useDispatch } from "react-redux";
import { customToast } from "../../../../static-functins";

const ProductCard = ({ product }) => {
  const { title, id, price, image } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    customToast("success", "Product Added To Cart!");
  };

  return (
    <div>
      <div className="w-[24.4375rem] h-[29.6875rem] bg-slate-300 relative rounded-md shadow-lg">
        <Link to={`/product-details/${id}`}>
          <img
            src={product.image.url}
            alt=""
            className="max-h-[475px] rounded-[5px] w-full h-full"
          />
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="absolute right-1 bottom-1 w-8 h-8 p-1 cursor-pointer rounded-[3px] bg-[#4B4B4B] invert"
          onClick={() => handleAddToCart()}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
      <div className="flex flex-row items-center justify-between space-x-4">
        <span className="text-gray-600">{title}</span>
        <h3 className="font-bold text-gray-600">{price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
