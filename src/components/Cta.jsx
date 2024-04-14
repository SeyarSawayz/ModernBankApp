import styles from "../style";
import Button from "../components/Button";
const Cta = () => (
  <section
    className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col my-5 bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex flex-1 flex-col">
      <h1 className={styles.heading2}>Lets try our service now!</h1>
      <p className={` ${styles.paragraph} max-w-[470px] my-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum
        corporis
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button title="Get Started" />
    </div>
  </section>
);

export default Cta;
