import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "../components/Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find better card deal <br className="sm:block hidden" /> in few easy
        steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est
        vero dolore sequi repellendus esse molestiae quasi mollitia, sit, dolor
        molestias qui repudiandae corrupti fuga culpa pariatur!{" "}
      </p>
      <Button title="Get Started" styles="mt-5" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="size-[100%] object-contain" />
    </div>
  </section>
);

export default CardDeal;
