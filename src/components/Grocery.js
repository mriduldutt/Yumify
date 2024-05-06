import React from "react";
import { BISCUITS_IMG_URL, PIZZA_IMG_URL,BODY_IMG_URL, TEA_IMG_URL, BEVERAGES_IMG_URL, CLEANING_IMG_URL, DAIRY_IMG_URL, FRESH_VEG_IMG_URL, MEAT_IMG_URL, BREAKFAST_IMG_URL } from "../utils/constant";

const Grocery = () => {
  return (
    <div className="my-5 shadow-lg w-full">
      <div className="h-auto p-5 m-5 flex flex-wrap justify-between">
        <div className="w-auto p-3 m-3 flex">
          <div>
            <div className="m-3">
              <p className="text-3xl font-bold">Easy grocery shopping</p>
              <p className="text-3xl font-bold">or your requirements</p>
            </div>
            <div className="m-3 my-12">
              <p>
                🛵{" "}
                <span className="font-semibold">
                  Food delivered in a matter of minutes.
                </span>
                Just as fast as we bring meals!
              </p>
              <p>
                ⏲{" "}
                <span className="font-semibold">
                  Every day from 6 a.m. until late at night,{" "}
                </span>
                we provide everything from morning coffee to late-night nibbles.
              </p>
            </div>
          </div>

          <img src={FRESH_VEG_IMG_URL} alt="" />
        </div>

        <div className="flex flex-wrap w-10/12  mx-auto justify-center md:justify-between shadow-lg rounded-3xl p-8">
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={BISCUITS_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={BODY_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={TEA_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={BEVERAGES_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
        </div>

        <div className="flex flex-wrap w-10/12  mx-auto justify-center md:justify-between shadow-lg rounded-3xl p-8 border-none">
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={CLEANING_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={DAIRY_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={BREAKFAST_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
          <div className="cursor-pointer hover:text-orange-400">
            <img
              src={MEAT_IMG_URL}
              className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
            />
          </div>
        </div>
        <div className="w-10/12 p-3 mt-10 m-3 ml-auto text-center ">
            <div className="m-3">
              <h1 className="text-3xl font-bold">
                Recently included feature for groceries
              </h1>
              <p className="text-3xl font-bold">Place your order today!</p>
         
            <div className="m-3 my-12">
              <p>
                🥦Fresh fruits and vegetables, dairy products, bread, eggs, and
                much more are daily requirements & so on .....{" "}
              </p>
              <p>
                💖 Countless consumers in Bangalore, Delhi-NCR, Hyderabad,
                Mumbai, Chennai, Pune, and other places have faith in us.
              </p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default Grocery;
