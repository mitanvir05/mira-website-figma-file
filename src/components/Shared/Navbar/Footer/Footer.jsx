import { FaMinus } from "react-icons/fa";
import logo from "../Footer/logo.png";
const Footer = () => {
  return (
    <div className="max-w-[1440px] mt-[110px] mx-auto bg-[#02033B] ">
      <div className="max-w-[1120px]  mx-auto ">
        <div className="ps-5 lg:ps-0 grid lg:grid-cols-3 grid-cols-1">
          {/* 1st part */}
          <div>
            <p className="text-white font-bold lg:text-[23px] text-[16px] pt-[60px] pb-8">
              Scan. Detect. Remove.
            </p>
            {/* socal logo part */}
            <div className="flex justify-start gap-10 mb-7">
              <img
                src="/FooterImage/Icon awesome-twitter-square.png"
                alt=""
              />
              <img
                src="/FooterImage/Icon awesome-facebook-square.png"
                alt=""
              />
              <img src="/FooterImage/Exclusion 8.png" alt="" />
            </div>

            <div className="flex justify-start  gap-7 text-[11px] text-white">
              <p className="border-b border-white mt-5">Privacy Policy</p>
              <p className="border-b border-white mt-5">Terms of Service</p>
            </div>

            <p className="mt-9 text-white text-[11px] leading-[15px]">
              Copyright &copy; 2022 Certo Software Limited | Registered in
              <br />
              England & Wales No. 10072356
            </p>
            <p className="mt-5 text-white text-[11px]  leading-[15px]">
              Designed & developed by{" "}
              <span className="border-b border-white">Bigger Picture</span>
            </p>
          </div>

          {/* 2nd part */}
          <div className="pt-[60px]">
            <h1 className="text-white text-[35px] font-bold leading-[45px]  ">
              Miro.
            </h1>

            <p className="border-b border-white mt-5 max-w-[178px]"></p>
            <div className="mt-9">
              <p className="text-[#FFC247] text-[19px] font-bold flex justify-start gap-5 items-center">
                <span>
                  <FaMinus />
                </span>
                iPhone
              </p>
              <p className="text-[#FFC247] text-[19px] font-bold mt-3 flex justify-start gap-5 items-center">
                <span>
                  <FaMinus />
                </span>
                Android
              </p>
              <p className="text-[#FFC247] text-[19px] font-bold flex  mt-3 justify-start gap-5 items-center">
                <span>
                  <FaMinus />
                </span>
                Help
              </p>
              <p className="text-[#FFC247] text-[19px] font-bold flex  mt-3 justify-start gap-5 items-center">
                <span>
                  <FaMinus />
                </span>
                About
              </p>

              <p className="text-[#FFC247] text-[19px] font-bold flex  mt-3 justify-start gap-5 items-center">
                <span>
                  <FaMinus />
                </span>
                Insights
              </p>
            </div>
          </div>
          <div className="pt-[70px]">
            <div
              className="bg-[#FDB235] rounded-3xl max-w-[436px]]"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            >
              <div className="px-8 py-8 ">
                <h1 className="text-[23px] leading-[30px] font-bold">
                  Sign up for our newsletter
                </h1>
                <p className="mt-4 text-[15px] leading-[20px]">
                  Receive the latest mobile security news, exclusive discounts &
                  offers straight to your inbox!
                </p>

                <div className="flex mt-6 rounded-full">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="input rounded-s-full  input-bordered w-full "
                  />
                  <button className="bg-[#02033B] text-[15px] text-white px-5  rounded-r-full py-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[12px] ps-5 lg:ps-0 leading-[15px] text-white mt-[70px] pb-[90px] max-w-[550px]">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
