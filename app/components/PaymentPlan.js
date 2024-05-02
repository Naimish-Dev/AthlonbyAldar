import React from "react";
import { FaHome } from "react-icons/fa";

export const PaymentPlan = () => {
  return (
    <div className=" py-14 px-2  " id="payment-plan">
      <h2 className="text-3xl text-black font-semibold text-center mb-10">
        Payment Plan
      </h2>
      <div className="flex flex-wrap items-center gap-8">
        <div className="grid w-full lg:w-[calc(50%_-_32px)] xl:w-[calc(45%_-_32px)] grid-cols-1 sm:grid-cols-2 gap-4">
          <div className=" gap-1 mb-2  ">
            <div className="shadow-lg bg-white">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <FaHome />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Simple Booking & Payment
                  </h3>
                  <p className="text-sm">
                    Effortless booking and secure payments for hassle-free
                    experiences on our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-1 mb-2">
            <div className="shadow-lg  bg-white">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <FaHome />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">5% On Booking Date</h3>
                  <p className="text-sm">
                    Secure your booking with just 5% deposit today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-1 mb-2">
            <div className="shadow-lg bg-white">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <FaHome />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {" "}
                    55% During construction
                  </h3>
                  <p className="text-sm">
                    Make a 55% payment during the construction process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-1 mb-2">
            <div className="shadow-lg bg-white">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <FaHome />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">40% on hand over</h3>
                  <p className="text-sm">
                    Finalize payment with 40% upon project handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[55%]">
          <img
            src={"/assets/overview/Community-Park.jpg"}
            className="object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};
