import { MdDone } from "react-icons/md";
const BuildForTeam = () => {
  return (
    <div>
      <div className="lg:mt-[80px] mt-[40px] ps-3 lg:ps-0">
        <h1 className="lg:text-[48px] text-[24px] font-bold text-[#050038] leading-[26px] lg:leading-[56px]">
          Built for all kinds of teams
        </h1>

        <div className="flex justify-start items-center lg:gap-4 gap-1 my-8  text-[#050038] lg:text-[14px] text-[7px]">
          <p className="border-[#F1F3FD] bg-[#F2F2F2] py-3 lg:px-4 px-2 rounded-full">
            UX & Design
          </p>
          <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 lg:px-4 px-2 rounded-full">
            Marketing
          </p>
          <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 lg:px-4 px-2 rounded-full">
            Product Management
          </p>
          <p className="border-[#F1F3FD]  bg-[#F2F2F2]  py-3 lg:px-4 px-2 rounded-full">
            Engineering
          </p>
          <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 lg:px-4 px-2 rounded-full">
            Consultants
          </p>
          <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 lg:px-4 px-2 rounded-full">
            Agile Coaches
          </p>
          <p className="border-[#F1F3FD]  bg-[#F2F2F2]  py-3 lg:px-4 px-2 rounded-full">
            Sales
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="max-w-[360px] ">
            <div className="flex justify-start items-center gap-3">
              <MdDone className="text-lg" />
              <h1 className="lg:text-[18px] text-[12px] text-gray-500">
                Build low-fi wireframes
              </h1>
            </div>
            <div className="flex justify-start items-center mt-3 gap-3">
              <MdDone className="text-lg mb-6" />
              <h1 className="lg:text-[18px] text-[12px] text-gray-500">
                Involve stakeholders in the <br /> design process
              </h1>
            </div>
            <div className="flex justify-start items-center mt-3 gap-3">
              <MdDone className="text-lg" />
              <h1 className="lg:text-[18px] text-[12px] text-gray-500">
                Run engaging design workshops
              </h1>
            </div>

            <p className="text-blue-500 lg:text-[18px] text-[12px] mt-10  border-b-blue-500 ">
              Learn More →
            </p>
            <p className="lg:text-[18px] text-[12px] text-gray-500 mt-8 lg:mt-[60px]">
              Integrate your favorite tools
            </p>

            <img
              className="mt-3 lg:mb-[100px] mb-[10px]"
              src="/BuildForTeamImage/logosdesign.svg.png"
              alt=""
            />
          </div>
          <div className="max-w-full">
            <img
              className="lg:w-full w-[250px]"
              src="/BuildForTeamImage/uxdesignwithoutshadow.jpg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildForTeam;
