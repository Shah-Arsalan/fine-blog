import React, { Suspense } from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'
import { getPost } from '@/lib/data';
import PostUser from '@/components/postUser/postUser';
import { convertBase64ToUrl } from '@/lib/utils';


export const generateMetadata = async ({params}) => {
    const {slug} = params;

    const post = await getPost(slug);

    return {
        title: post.title,
        description : post.desc
    }
}


const getSinglePost = async (slug) => {
    const res = await fetch(`https://fine-blog-two.vercel.app//api/blog/${slug}`);
    console.log('the res from slug api is' , res);
    
    if(!res.ok){
        throw new Error("Something went wrong");
    }

    return res.json();
}

async function SinglePostPage({params}) {


    const {slug} = params;
    const post = await getSinglePost(slug);
    const { bufferImage, img } = post;

    // let base64Image = null;

    // if (!img) {
    //   base64Image = convertBase64ToUrl(bufferImage);
    // }


    
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={img ? img : "/noAvatar.png"} alt="" fill/>
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