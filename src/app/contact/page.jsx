import Image from "next/image"
import styles from "./contact.module.css"

import React from 'react'

export const metadata = {
  title: 'Next App Contact Page',
  description: 'Contact description',
}


function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact image" fill className={styles.img}/>
      </div>
      <div className={styles.formContaiiner}>
       <form className={styles.form}>
        <input type="text" placeholder="Name and Surname"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Phone Number (Optional)"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"/>
        <button>Send</button>

       </form>
      </div>
    </div>
  )
}

export default ContactPage