"use client"
import Image from "next/image";
import styles from "./home.module.css"
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return <div className={styles.container}>

    <div className={styles.textContainer}>
      <h1 className={styles.title}>Fine Blog, Creative Thoughts Agency</h1>
      <p className={styles.desc}>Fine Blog is a blogging website for creators like you to share your thoughts on any topic of your linking!</p>
      <div className={styles.buttons}>
        <button onClick={()=>router.push("/about")} className={styles.button}>Learn More</button>
        <button onClick={()=>router.push("/contact")} className={styles.button}>Contact</button>
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