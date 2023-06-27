import React from "react";
import conimg from "../img/top.png";

const ContactUs = () => {
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img src={conimg} alt="" className="w-full max-w-[65%]" />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category title */}
            <div className="uppercase text-accent text-lg font-medium mb-2">
              Got Any Queries ?
            </div>
            {/* title */}
            <h2 className="h2 mb-4">Contact Us </h2>
            {/* description */}
            <p className="mb-12">
              We value your feedback, inquiries, and suggestions. If you have
              any questions or need assistance regarding any of our products offered,
              we are here to help. Please feel free to reach out to us using the
              contact information provided below. We would surely reach back in 24 hours.
            </p>
            <ul className="mb-14">
              <li>Email - aadesh0313@gmail.com</li>
              <li>Phone/WhatsApp - 8800030603</li>
            </ul>
            {/* price & btn */}
            <div className="flex items-center gap-x-8">
              {/* price */}
              <div className="text-3xl text-accent font-semibold">
                We Would Love To Help
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
