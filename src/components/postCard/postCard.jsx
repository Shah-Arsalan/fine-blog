import React from 'react'
import styles from "./postCard.module.css"
import Image from 'next/image'
import Link from 'next/link'

function PostCard({post}) {

  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={post.img} alt='' fill className={styles.img}/>
            </div>
            <span className={styles.date}>10.10.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p  className={styles.desc}>{post.desc}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`} >Read More...</Link>
        </div>
    </div>
  )
}

export default PostCard