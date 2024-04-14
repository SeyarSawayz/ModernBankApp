import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "../components/GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col  ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
    >
      <div
        className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] md:mt-8 mt-20 mb-2`}
      >
        <img src={discount} alt="dicount" className="size-[32px]" />
        <p className={`${styles.paragraph} ml-2 `}>
          <span className="text-white">20% </span>
          Discount For <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 text-[52px] font-poppins font-semibold text-white ss:text-[72px] ss:leading-[100px] leading-[52px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Geneartion</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className=" text-[52px] font-poppins font-semibold text-white ss:text-[68px] ss:leading-[100px] leading-[52px] w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo
        optio, nobis, numquam dolore architecto quas voluptatem repellendus quae
        non doloremque dolor quisquam magnam!
      </p>
    </div>
    <div
      className={`flex-1 flex ${styles.flexCenter} px-[50px] md:my-0 my-10 relative `}
    >
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] "
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
      <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient " />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
