import ChatBot from "./chatbot";

function FooterLinks() {
  return (
    <div className="overflow-hidden">
      <div className="bg-[#F2F2F2] p-2 flex">
        {/* row-1 */}
        <ul className="flex-col">
          <li className="font-semibold mb-2 sm:mb-12 font-size:6xl sm:text-5xl">
            <h1>POVERIA</h1>
          </li>
          <li>My Company, 42 Puffin Street Puffinville France</li>
          <li>(+91) 0123 456 789</li>
          <li>
            <a href="#">Info@YourStore.com</a>
          </li>
        </ul>
        {/* row-2 for desktop */}
        <ul className="hidden sm:block">
          <li className="mb-2 sm:mb-12 font-semibold">
            <h3>Extras</h3>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Brands
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Gift Certificates
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Affiliate
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Specials
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <ul>
          <li className="mb-2 sm:mb-12 font-semibold">
            <h3>MY ACCOUNT</h3>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Order History
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Wish List
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              Newsletter
            </a>
          </li>
        </ul>
        <ul>
          <li className="mb-2 sm:mb-12 font-semibold">
            <h3>GET DAILY UPDATE</h3>
          </li>
          <li>
            <p className="text-slate-600">
              Stay Updated On All Thats New and Noteworthy
            </p>
          </li>
          <li>
            <form> 
              <div>
                <img
                  className="relative left-[186px] top-[36px] cursor-pointer"
                  src="/assets/icons/send.png"
                  alt="send icon"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="px-6 py-2 rounded-full"
                />
              </div>
            </form>
          </li>
        </ul>
        <ChatBot />
      </div>
    </div>
  );
}

export default FooterLinks;
