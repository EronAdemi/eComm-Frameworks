import { Link } from 'react-router-dom'
import Layout from '../../components/layout'

const Success = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 w-[50%] mx-auto py-4">
        <div className="text-center">
          <h1 className="font-bold text-4xl">SUCCESS!</h1>
        </div>

        <div className="flex items-center justify-center mt-2">
          <div
            className="flex items-center justify-center bg-green-700 md:w-[20rem] md:h-[20rem] w-[10rem] h-[10rem] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="4"
              stroke="currentColor"
              className="text-white md:w-32 md:h-32 w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
        <div className="text-center w-full md:w-1/2 mx-auto">
          <span className="text-base md:text-lg font-semibold"
          >Your order will be delivered soon. Thank you for choosing us!</span
          >
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <button className="md:w-[50%] w-full py-4 px-3 rounded-md bg-black text-white">Track Your Order</button>
          <Link to={'/'} className="md:w-[50%] w-full py-4 px-3 rounded-md text-black bg-white border border-black">
            <button >Back To Home</button>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export default Success
