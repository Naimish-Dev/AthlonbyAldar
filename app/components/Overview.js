import React from "react";

const Overview = () => {
  return (
    <div className=" py-14 px-2 bg-orange-50 " id="overview">
      <h2 className="text-3xl text-black font-semibold text-center mb-10 ">
        Overview
      </h2>
      <div className="flex flex-wrap  gap-4  items-center justify-between">
        <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)]  ">
          <img
            src={"/assets/overview/Villas.jpg"}
            className="object-cover w-full h-[500px]"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(45%_-_17px)] pr-4 gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap">
          <p className="break-all">
            Discover Dubai’s latest master community,{" "}
            <span className="font-semibold">Athlon by Aldar</span>, a pioneering
            development designed to redefine the concept of active living. As
            the city’s first community centered around physical movement and
            wellness, Athlon by Aldar integrates active design principles
            developed by wellness experts to foster a lifestyle where movement
            is an integral part of daily life.
          </p>

          <p className="break-all">
            The community features expansive walking and cycling loops,
            interspersed with lush, green parks and spaces, creating a seamless
            blend of natural beauty and active living. Athlon marks Aldar’s
            inaugural master community project in Dubai. practices.
          </p>
          <p className="break-all">
            Aldar, based in Abu Dhabi, is one of the{" "}
            <span className="font-semibold">
              largest developers in the country{" "}
            </span>{" "}
            with a wealth of experience building fully integrated master
            communities. Strategically located adjacent to Arabian Ranches 3,
            and nestled between Sheikh Zayed Bin Maktoum Al Nahyan Street (D54)
            and Emirates Road, Athlon is poised to set a new standard for
            residential communities in Dubai. , it sets a new standard for
            ultra-luxurious living with its cutting-edge wellness facilities,
            superb location, and architectural grandeur. Immerse yourself in the
            pinnacle of refinement and a dynamic lifestyle in the heart of Dubai
            Marina.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
