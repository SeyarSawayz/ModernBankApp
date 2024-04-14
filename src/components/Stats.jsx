import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section
    className={`flex flex-row flex-wrap sm:mb-20 mb-6 items-center justify-between bg-primary`}
  >
    {stats.map((stat) => (
      <div
        className="flex-1 flex  justify-start m-3 items-center"
        key={stat.id}
      >
        <h1 className="text-white font-semibold xs:text-[40px] text-[30px] font-poppins">
          {stat.value}
        </h1>
        <p className="ml-4 text-gradient font-normal xs:text-[20px] text-[15px] leading-[21px] font-poppins uppercase">
          {stat.title}
        </p>
      </div>
    ))}
  </section>

  //   <div className="flex justify-center items-center">
  //     <h1 className="text-white font-bold text-[28px] font-poppins">230+</h1>
  //     <p className="ml-4 text-gradient font-semibold font-poppins">
  //       TRUSTED BY COMPANY
  //     </p>
  //   </div>
  //   <div className=" justify-center items-center sm:flex hidden">
  //     <p className="ml-4 text-gradient font-semibold font-poppins">|</p>
  //   </div>
  //   <div className="flex justify-center items-center">
  //     <h1 className="text-white font-bold text-[28px] font-poppins">$23M+</h1>
  //     <p className="ml-4 text-gradient font-semibold font-poppins">
  //       TRANSACTIONS
  //     </p>
  //   </div>
  // </div>
);

export default Stats;
