"use client"
import Image from 'next/image'
import styles from "./about.module.css"
import React from 'react'
import {useRouter} from "next/navigation"

const AboutPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We aim to spread ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>Sign In with your credentials and get started sharing!</p>
        <button className={styles.login} onClick={()=> router.push("/login")}>Login</button>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Users</p>
          </div>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Posts</p>
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