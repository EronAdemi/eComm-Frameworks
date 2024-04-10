import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';



const Header = () => {

  const cart = useSelector((store) => store.cart);

  return (
    <nav className=" shadow-lg ">
      <div
        className="flex flex-row items-center justify-between space-x-6 px-10 py-2"
      >
        <NavLink to={'/'}>
          <div>
            <img className="w-[180px] " src={logo} alt="" />
          </div>
        </NavLink>
        <div>
          <input
            className="px-2 py-2 md:w-[429px] h-[52px] border border-orange-400 bg-zinc-100 text-gray-500 outline-none rounded-lg relative"
            type="search"
            name="search"
            id=""
            placeholder="Search for products, brands & more"
          />
        </div>
        <div
          className="flex flex-row space-x-2 items-center justify-center relative"
        >
          <Link to={'/contact'} className='text-[#F38334] text-[16px]' >Contact Us</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <Link to={'/cart'} className='relative'>
            <h1 className=' absolute top-[-14px] right-[-8px] bg-[#4B4B4B] p-[4px] rounded-full flex justify-center items-center text-white w-[20px] h-[20px]'>{cart.items.length}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className=" w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Header
