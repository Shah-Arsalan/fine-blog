import React from 'react'
import styles from "./postCard.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { convertBase64ToUrl } from '@/lib/utils';

function PostCard({ post }) {

  const { bufferImage , img } = post;

  let base64Image = null;

  if(!img){
    base64Image = convertBase64ToUrl(bufferImage);
  }


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <img src={post.img ? post.img : base64Image} alt='' className={styles.img} />
        </div>
        <span className={styles.date}>10.10.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`} >Read More...</Link>
      </div>
    </div>
  )
}

export default PostCard