import Image from "next/image";
import styles from "./home.module.css"
const Home = () => {
  return <div className={styles.container}>

    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta saepe quis atque. Facilis sit sequi rem nemo saepe, vero minima amet dolorem et labore eius? Adipisci nobis molestias veniam consequatur!</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImage}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" className={styles.heroImg} fill/>
    </div>


  </div>;
};

export default Home;