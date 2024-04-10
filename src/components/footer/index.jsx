
const Footer = () => {
  return (
    <section className="mt-16 p-6 bg-[#f38334]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-white">SHOPPING</h4>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-white">NEED HELP?</h4>
          <ul className="mt-5 space-y-4 font-light text-center">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shopping Information </a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-white">LOCATIONS</h4>
          <ul className="mt-5 space-y-4 font-light text-center">
            <li><a href="#">Stores</a></li>
            <li><a href="#">Popups</a></li>
            <li><a href="#">Exhibitions</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-white">SOCIAL</h4>
          <ul className="mt-5 space-y-4 font-light text-center">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <h4 className="font-semibold text-white">THE LATEST</h4>
          <span className="text-center">sign up your email for newsletter on the latest products</span>
          <input className="bg-[#f38334] border-b w-full placeholder:text-black outline-none" type="email" name="email" id="email" placeholder="EMAIL" />
          <button className="bg-[#660000] w-full py-4 px-8 text-white rounded-lg">SIGN UP</button>
        </div>
      </div>
    </section>
  )
}

export default Footer
