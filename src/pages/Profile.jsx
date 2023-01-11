import React from "react";
import ProfilePic from "../assets/images/pro_pic.jpg";
import People_1 from "../assets/images/p1.jpg";
import People_2 from "../assets/images/p2.jpg";
import People_3 from "../assets/images/p3.jpg";
import { CardData } from "../components/Data";

const Profile = () => {
  return (
    <div className="wrapper pt-40">
      <fieldset className="h-full border border-[#15CAFC] rounded-2xl m-1 md:m-0">
        <legend className="ml-6 flex">
          <img
            src={ProfilePic}
            alt=""
            className="h-[80px] width-[50px] rounded-full border-4 border-[#15CAFC]"
          />
          <div className="p-2">
            <div className="text-[#0EA9D3] font-semibold text-2xl">
              Alf Murazik
            </div>
            <p className="text-[#AFB8BA] font-semibold text-xl">Info here</p>
          </div>
        </legend>

        <div className="p-1 md:p-6">
          {/* button */}
          <div className="flex gap-4 mt-5 justify-center sm:justify-start">
            <div className="flex justify-center items-center h-[32px] w-[140px] bg-[#15cafc] hover:bg-[#15CAFC5C] rounded-tr-[20px] rounded-bl-[20px] duration-500">
              Dog
            </div>
            <div className="flex justify-center items-center h-[32px] w-[140px] bg-[#15CAFC5C] hover:bg-[#15cafc] rounded-tr-[20px] rounded-bl-[20px] duration-500">
              Rented Dog
            </div>
          </div>

          {/* card design */}

          <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 justify-items-center md:justify-items-start ">
            {CardData.map((record) => {
              return (
                <div
                  className="h-[348px] max-w-[254px] bg-[#242435] rounded-lg hover:-translate-y-2 duration-500"
                  key={record.id}
                >
                  {/* card image */}
                  <img src={record.img} alt="" className="p-1.5 rounded-lg" />

                  {/* card first section */}
                  <div className="pt-2">
                    <div className="flex justify-between px-3">
                      <div className="flex">
                        <img
                          src={People_1}
                          alt=""
                          className="rounded-full h-[25px] z-40"
                        />
                        <img
                          src={People_2}
                          alt=""
                          className="rounded-full h-[25px] z-30"
                        />
                        <img
                          src={People_3}
                          alt=""
                          className="rounded-full h-[25px] z-20"
                        />
                        <div className="pl-2 text-[#BEBBBB] ">lorem ipsum</div>
                      </div>
                      <div className="text-[#BEBBBB]">322</div>
                    </div>
                  </div>

                  {/* card second section */}
                  <div className="px-3 leading-3 pt-2">
                    <div className="text-xl text-white font-bold">Lorem</div>
                    <span className="text-[#BEBBBB]">lorem ipsum</span>
                  </div>

                  {/* card last section */}
                  <div className="flex px-3 leading-3 pt-2 justify-between">
                    <div className="text-xl text-[#4C99D4] font-bold">
                      0.244wETH
                    </div>
                    <button className="border-2 rounded-full px-2 text-[#BEBBBB] hover:bg-[#BEBBBB] hover:text-[#242435] duration-500">
                      Buy now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Profile;
