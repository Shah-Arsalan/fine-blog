import React, { Suspense } from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'
import { getPost } from '@/lib/data';
import PostUser from '@/components/postUser/postUser';

async function SinglePostPage({params}) {
    const {slug} = params;
    console.log("the slug is", slug);

    const post = await getPost(slug);
    console.log("the current post is", post);
    console.log("the current post id is", post.userId);
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={post.img} alt="" fill/>
        </div>
        <div className={styles.textContainer}>  
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.detail}>
                {post && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post?.userId}/>
                    </Suspense>
                )}
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>01.01.2024</span>
                </div>
            </div>
            <div className={styles.content}>
                {post.desc}

            </div>

        </div>
    </div>
  )
}

export default SinglePostPage