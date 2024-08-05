import searchIcon from "../../assets/icons/search.png";
import downArrow from "../../assets/icons/down-arrow.png";

function toggleDropDownMenu() {
  document.getElementById("DropDownMenu").classList.toggle("hidden");
}

function TopNav() {
  return (
    <div className="top-header border-b-2 flex justify-around items-center py-5">
      <ul className="top-left inline-flex">
        <li className="hover:text-slate-900 text-slate-600 mr-8">
          <a href="#">My Wishlist (0)</a>
        </li>
        <li className="hover:text-slate-900 text-slate-600 border-l-2 pl-8">
          <a href="#">Compare</a>
        </li>
      </ul>
      <ul className="top-center">
        <li className="text-3xl font-medium">
          <a href="#">POVERIA</a>
        </li>
      </ul>
      <ul className="top-right inline-flex">
        <img
          className="cursor-pointer w-4 h-4 mt-1"
          src={searchIcon}
          alt="magnifying glass"
        />
        <li>
          <a
            onClick={toggleDropDownMenu}
            className="hover:text-slate-900 text-slate-600 flex px-9 border-l-2 ml-4 border-r-2 mr-4"
            href="#"
          >
            My Account
            <img
              className="w-4 h-4 mt-1"
              src={downArrow}
              alt="arrow pointing down"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-slate-900 text-slate-600" href="#">
            My Cart (0)
            <div
              id="DropDownMenu"
              className="hidden absolute top-20 right-80 py-5 z-10 bg-slate-50 border-2 transition-all ease-in"
            >
              <ul className="relative border-b-2 *:mb-1 px-5 bottom-full">
                <li>Register</li>
                <li>Login</li>
              </ul>
              <ul className="*:my-1 px-5">
                <li>Language</li>
                <li>$ Currency</li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopNav;
