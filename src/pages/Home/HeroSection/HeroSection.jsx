const HeroSection = () => {
    return (
      <div className="lgt:mt-11  mt-5 pt-5">
        <div className="lg:flex flex-row justify-start ps-3 lg:ps-0 items-center lg:gap-[60px]">
          {/* 1st part of the section */}
          <div className="max-w-[440px] mx-auto text-[#050038] ">
            <h1 className=" font-bold lg:text-[48px]  text-[25px] lg:leading-[56px] leading-[26px]">
              Take ideas from better to best
            </h1>
            <p className="my-6 text-[18px] leading-[24px]">
              Miro is your team's visual platform to connect, collaborate, and
              create — together.
            </p>
  
            <input
              type="text"
              placeholder="Enter your work email"
              className="input input-bordered mt-2 w-full rounded-full"
            />
            <button className="bg-[#4262FF] mt-3 w-full rounded-full py-3 px-7 text-white ">
              Sign up free → <span></span>
            </button>
            <p className="mt-3 text-gray-400 text-[14px] leading-[20px]">
              Collaborate with your team within minutes
            </p>
  
            <div className="bg-[#F5F5F7] max-w-[350px] mt-9 p-3 rounded flex justify-between gap-3">
              <div className="">
                <img src="/HeroSectionImage/star.png" alt="" className="w-full" />
                <p className="text-[11px]">Based on 5149+ reviews:</p>
              </div>
  
              <div className="flex justify-center items-center">
                <img src="./getapp.png" alt="" className="" />
              </div>
            </div>
          </div>
          {/* 
      2nd part */}
          <div className="pt-5">
            <img
              src="/HeroSectionImage/headerimage-without-text.png.png"
              alt=""
              className="lg:w-[640px]  w-[330px] mx-auto"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  