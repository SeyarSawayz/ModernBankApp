import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section className={layout.sectionReverse} id="product">
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="size-[100%] relative z-[5]" />
      <div className="absolute z-[3] size-[50%] -left-1/2 top-0 rounded-full white__gradient " />
      <div className="absolute z-[0] size-[50%] -left-1/2 bottom-0 rounded-full pink__gradient " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempore,
        hic harum necessitatibus praesentium voluptatum. Voluptatibus quas
        corporis quasi dignissimos tempora at quae?
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-5">
        <img
          src={apple}
          alt="apple"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
        <img
          src={google}
          alt="apple"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
