import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="navbar max-w-[1380px] max-h-[91px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            {/* amll device responsive */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-4 lg:hidden"
            >
              <RiMenu3Line className="text-black text-xl"></RiMenu3Line>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-4 p-4  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Enterprise</li>
              <li>Pricing</li>
            </ul>
          </div>
          {/* logo */}
          <img src="/public/navImage/Vector.png" alt="" />
          {/* other content */}
          <div className="lg:flex gap-1 text-[#050038] mt-2 text-[16px] ms-8 justify-start items-center hidden">
            <ul className="menu">
              <li>
                <details>
                  <summary>Products</summary>
                </details>
              </li>
            </ul>

            <ul className="menu">
              <li>
                <details>
                  <summary>Solutions</summary>
                </details>
              </li>
            </ul>

            <ul className="menu">
              <li>
                <details>
                  <summary>Resources</summary>
                </details>
              </li>
            </ul>

            <ul className="menu">
              <li>
                <p>Enterprise</p>
              </li>
            </ul>

            <ul className="menu">
              <li>
                <p>Pricing</p>
              </li>
            </ul>
          </div>
        </div>

        {/* end side */}
        <div className="navbar-end gap-5 text-[#050038] mt-2 text-[10px] lg:text-[16px]">
          <div className="lg:flex hidden justify-start gap-2 items-end">
            <img src="/public/navImage/navworldlogo.png" alt="" />
            <p>EN</p>
          </div>
          <p>Contact Sales</p>
          <p>Login</p>
          <button className="bg-[#4262FF] rounded-full lg:py-3 py-2 lg:px-7 px-4 text-white ">
            Sign up free → <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
