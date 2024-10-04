import Image from 'next/image'
import styles from "./about.module.css"
import React from 'react'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero sint quo doloribus tenetur consectetur dignissimos sapiente sunt quisquam deleniti? Quo veniam magnam cupiditate nam. Fugiat obcaecati eligendi laudantium beatae excepturi.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Years of experience</p>
          </div>
        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img}/>
      </div>

    </div>
  )
}

export default AboutPage