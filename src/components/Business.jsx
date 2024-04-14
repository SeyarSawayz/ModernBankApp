import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeautreCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-1"
    } feature-card`}
  >
    <div className={`size-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="" className="size-[50%] object-contain" />
    </div>
    <div className={`flex-1 flex-col flex ml-3`}>
      <h4
        className={`font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-white`}
      >
        {title}
      </h4>
      <p
        className={`font-poppins font-normal text-[16px] leading-[24px] mb-1 text-dimWhite`}
      >
        {content}
      </p>
    </div>
  </div>
);
const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the Business, <br className="sm:block hidden" />
        we'll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, facere id
        tempora eius repellat molestias, quis placeat, similique adipisci
        consectetur totam.
      </p>
      <Button styles="mt-5" title="Get Started" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeautreCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
