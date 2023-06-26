import React from "react";
import retimg from "../img/return.png";

const Return = () => {
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[645px] grad rounded-lg flex justify-center items-center">
            <img src={retimg} alt="" className="w-full max-w-[75%]" />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category title */}
            <div className="uppercase text-accent text-lg font-medium mb-2">
              Hassle Free Refund in 24 hrs
            </div>
            {/* title */}
            <h2 className="h2 mb-4">Return Policy</h2>
            {/* description */}
            <p className="mb-12">
              We apologize for any inconvenience you may have experienced with
              your purchase at IndSoftware. We understand that sometimes
              products may not meet your expectations or there may be unforeseen
              circumstances that require a refund. In such cases, we have a
              hassle-free return policy in place to ensure your satisfaction.
              <br></br>
              <br></br>
              To initiate a return, please email your return request to
              the mentioed email. Kindly include the necessary details and our
              dedicated team will promptly review your request
              and guide you through the refund process. <br></br> <br></br>
              Email - aadesh0313@gmail.com  <br></br>
              Phone / WhatsApp - 8800030603 <br></br> <br></br>
              *Return should be initiated within 15 Days of the Purchase Date*
            </p>
            {/* price & btn */}
            <div className="flex items-center gap-x-8">
              {/* price */}
              <div className="text-3xl text-accent font-semibold">
                Easy Refunds, No Questions Asked
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
