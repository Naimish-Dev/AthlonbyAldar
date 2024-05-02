import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { BiCycling } from "react-icons/bi";
import { MdBrunchDining } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { FaHouseChimney } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { GiAnchor } from "react-icons/gi";

const Amenities = () => {
  return (
    <div className=" py-14 px-2 " id="amenities">
      <h2 className="text-3xl text-black font-semibold text-center mb-6">
        Amenities
      </h2>
      <div className="grid gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="shadow-lg ">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaUmbrellaBeach />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Beach Access</h3>
              <p className="text-sm">
                Take a stroll on the private beach to relax and unwind.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <BiCycling />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Cycling Trails</h3>
              <p className="text-sm">
                A low-impact sport that gives your cardiovascular system an
                effective workout.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <MdBrunchDining />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Dining Outlets</h3>
              <p className="text-sm">
                Where good food is served to people, often in a formal way.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <IoIosFitness />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Fitness Centre</h3>
              <p className="text-sm">
                Routine exercise helps you to change your overall lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-1 h-fit flex items-center justify-center">
              <FaHouseChimney />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Housekeeping</h3>
              <p className="text-sm">
                Keeping spaces clean, tidy, and welcoming.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaChessKnight />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Indoor Games</h3>
              <p className="text-sm">
                A very small play area, usually limited to a single tabletop.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <MdOutlinePool />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Infinity Pool</h3>
              <p className="text-sm">
                A swimming pool where the water flows over one or more edges.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaRunning />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Jogging Trails</h3>
              <p className="text-sm">
                It improves your cardiovascular fitness and decreases your risk
                of heart attack.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaRunning />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Jogging Trails</h3>
              <p className="text-sm">
                It improves your cardiovascular fitness and decreases your risk
                of heart attack.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaRunning />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Jogging Trails</h3>
              <p className="text-sm">
                It improves your cardiovascular fitness and decreases your risk
                of heart attack.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <GiAnchor />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Marina & Yacht Club</h3>
              <p className="text-sm">
                Luxury berthing where you can dock your yacht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
