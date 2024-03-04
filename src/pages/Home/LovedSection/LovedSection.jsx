const LovedSection = () => {
  return (
    <div className="lg:mt-[100px] mt-[50px]">
      <h1 className="text-center lg:text-[48px] text-[24px] leading-[26px] font-bold text-[#050038] lg:leading-[56px]">
        Loved by the world&#39;s best teams
      </h1>

      <div className="flex justify-center">
        <button className="lg:text-[18px] text-[14px] lg:mt-7 mt-3 btn btn-outline btn-blue-500 rounded-full lg:px-6 px-3 py-4 mx-auto text-blue-500">
          See all customer stories →
        </button>
      </div>

      <div className="lg:mt-[70px] ps-3 lg:ps-0 mt-[40px] grid  gap-3 grid-cols-3">
        <div>
          <img src="/LovedSectionImage/vmware.svg.png" alt="" className="lg:w-full w-[120px]" />
          <p className="text-gray-500 my-6  max-w-[291px] lg:text-[18px] text-[13px] leading-[12px] lg:leading-[24px]">
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          <div className="flex justify-start lg:mt-[50px]  mt-[20px] gap-4 items-center">
            <img src="/LovedSectionImage/Mask_group-1.png.png" alt="" />
            <h1 className="lg:text-[14px] text-[10px] text-gray-500">
              Roxanne Mustafa <br />
              Design Team Lead at VMware
            </h1>
          </div>
        </div>
        <div>
          <img
            src="/LovedSectionImage/Docusign-Testimonials-280-60-Baseline.svg.png"
            alt=""
            className="lg:w-full w-[120px]"
          />
          <p className="text-gray-500 my-6  max-w-[291px] lg:text-[18px] text-[13px] leading-[12px] lg:leading-[24px]">
            “Miro helps solve one of the major gaps in product design: how to
            manage tasks across product designers whose projects are in
            different tools.”
          </p>

          <div className="flex justify-start lg:mt-[125px] mt-[60px] gap-4 items-center">
            <img src="/LovedSectionImage/Mask_group3.png.png" alt="" />
            <h1 className="lg:text-[14px] text-[10px] text-gray-500">
              Jane Ashley <br />
              Head of Design at DocuSign
            </h1>
          </div>
        </div>
        <div>
          <img src="/LovedSectionImage/frog.svg.png" alt="" className="lg:w-full w-[120px]" />
          <p className="text-gray-500 my-6  max-w-[291px] lg:text-[18px] text-[13px] leading-[12px] lg:leading-[24px]">
            “As we used Miro we moved from skepticism to belief to innovation,
            and now we have a tool that’s at the core of what we do and will
            continue to extend into the future.”
          </p>

          <div className="flex justify-start lg:mt-[125px] mt-[60px] gap-4 items-center">
            <img src="/LovedSectionImage/Mask_group2.png.png" alt="" />
            <h1 className="lg:text-[14px] text-[10px] text-gray-500">
              Laura Baird <br />
              Associate Design Director at frog
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovedSection;
