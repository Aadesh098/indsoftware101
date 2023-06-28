import React from "react";
import visimg from "../img/vision.jpg";

const Vision = () => {
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[575px] grad rounded-lg flex justify-center items-center">
            <img src={visimg} alt="" className="w-full max-w-[75%]" />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category title */}
            <div className="uppercase text-accent text-lg font-medium mb-2">
              Welcome to the Hustler's Bay !
            </div>
            {/* title */}
            <h2 className="h2 mb-4">Our Vision</h2>
            {/* description */}
            <p className="mb-12">
              At IndSoftware, our mission is to narrow the divide between
              software companies and university students by ensuring accessible
              and affordable high-quality education and digital services. We
              empathize with the obstacles students encounter in realizing their
              aspirations due to varying purchasing power.
              <br></br>
              <br></br>
              Through our committed team, we endeavor to establish advantageous
              partnerships with esteemed software companies both domestically
              and internationally. This allows us to extend courses, self-help
              subscriptions, and digital services at significantly reduced
              prices. Our objective is to empower students with the requisite
              knowledge and resources, unleashing their maximum potential and
              sculpting a more promising future for India.
            </p>
            {/* price & btn */}
            <div className="flex items-center gap-x-8">
              {/* price */}
              <div className="text-3xl text-accent font-semibold">
                Exclusive Education meets Afforable Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
