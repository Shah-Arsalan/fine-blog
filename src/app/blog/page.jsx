import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data'

const getAllPosts = async () => {
  const res = await fetch('https://fine-blog-two.vercel.app//api/blog');
  if(!res.ok){
    throw new Error("Something went wrong");
  }
  
  console.log("the response of api is", res);

  return res.json();
}

async function BlogPosts() {

  // without using  api 

  // const posts = await getPosts();
  // console.log("posts in db are", posts);
  // console.log("blog page running...")

  // with api

  const posts = await getAllPosts();
  console.log("all posts are", posts);




  return (
    <div className={styles.container}>

      {
        posts?.map(ele => {
          return (<div key={ele._id} className={styles.post}>
            <PostCard post={ele} />
          </div>)
        })
      }



    </div>
  )
}

export default BlogPosts