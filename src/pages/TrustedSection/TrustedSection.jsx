const TrustedSection = () => {
  return (
    <div className="max-w-[1120px] lg:mt-20 mt-7 mb-20 mx-auto max-h-[164px]">
      <div className="pt-11 ">
        <p className="text-center lg:text-[18px] text-[14px] leading-[14px] mb-2 lg:leading-[24px] text-gray-500">
          Trusted by 45M+ users
        </p>

        <div className="flex justify-between items-center lg:mt-11 mt-5 lg:mx-20 mx-4 ">
          <img
            src="/public/TrustedSectionImage/Walmart_Index_Only.svg.png"
            alt=""
            className="lg:w-auto w-[60px]"
          />
          <img src="/public/TrustedSectionImage/cisco.svg.png" alt="" className="lg:w-auto w-[100px]" />
          <img
            src="/public/TrustedSectionImage/Volvo_Index_Only.svg.png"
            alt=""
            className="lg:w-auto w-[30px]"
          />
          <img src="/public/TrustedSectionImage/deloitte.svg.png" alt="" className="lg:w-auto w-[80px]" />
          <img src="/public/TrustedSectionImage/okta.svg.png" alt="" className="lg:w-auto w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
