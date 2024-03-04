export default function WorkTogether() {
    return (
      <div className="lg:mt-[70px] mt-[40px] ps-3 lg:ps-0">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mt-[120px] mt-[40px]">
            <h1 className="lg:text-[48px] mx-auto lg:mx-0 text-[24px] font-bold text-[#050038] max-w-[440px] leading-[26px] lg:leading-[56px]">
              Work together, wherever you work
            </h1>
            <p className="lg:text-[18px] text-[14px] mx-auto lg:mx-0  max-w-[453px] lg:mt-5 mt-3 text-gray-500">
              In the office, remote, or a mix of the two, with Miro, your team can
              connect, collaborate, and co-create in one space no matter where you
              are.
            </p>
            <p className="text-blue-500 lg:text-[18px] text-[14px]   lg:mt-8 mt-4 border-b-blue-500 ">
              Learn More →
            </p>
          </div>
          <div>
            <img src="/WorktogetherImage/hybridwork.png.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    );
  }
  