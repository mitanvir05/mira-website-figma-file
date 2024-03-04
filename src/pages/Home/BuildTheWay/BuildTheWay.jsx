const BuildTheWay = () => {
  return (
    <div className="lg:mt-[80px] mt-[40px] ps-3 lg:ps-0">
      <h1 className="lg:text-[48px] text-[24px] font-bold text-[#050038] leading-[26px] lg:leading-[56px]">
        Built for the way you work
      </h1>

      <div className="flex justify-between items-center my-8  text-[#050038] lg:text-[14px] text-[7px]">
        <p className="border-[#F1F3FD] bg-[#F2F2F2] py-3 px-3 rounded-full">
          Brainstorming
        </p>
        <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 px-3 rounded-full ">
          Diagramming
        </p>
        <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 px-3 rounded-full ">
          Meetings & Workshops
        </p>
        <p className="border-[#F1F3FD]  bg-[#F2F2F2]  py-3 px-3 rounded-full ">
          Scrum Events
        </p>
        <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 px-3 rounded-full ">
          Mapping
        </p>
        <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 px-3 rounded-full ">
          Research & Design
        </p>
        <p className="border-[#F1F3FD] bg-[#F2F2F2]  py-3 px-3 rounded-full ">
          Strategic Planning
        </p>
      </div>
      <div className="lg:flex flex-row  justify-between items-center">
        <div className="max-w-[360px] ps-3 lg:ps-0">
          <h1 className="text-[18px] leading-[24px] text-[#050038] ">
            Brainstorming
          </h1>
          <p className="text-[18px] leading-[24px] max-w-[302px] text-gray-600 my-8">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <p className="text-blue-500 text-[18px] mt-5 lg:mb-[250px] mb-9 border-b-blue-500 ">
            Learn More →
          </p>
        </div>
        <div className="max-w-full">
          <img
            src="/public/BuildTheWayImage/Brainstormwithoutshadow.jpg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BuildTheWay;
