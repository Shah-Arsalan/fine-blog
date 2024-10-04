import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data'

async function BlogPosts() {
  const posts = await getPosts();
  console.log("posts in db are", posts);
  console.log("blog page running...")
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