
import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import { convertBase64ToUrl } from "@/lib/utils";

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => {
        const { bufferImage, img } = post;

        let base64Image = null;

        if (!img) {
          base64Image = convertBase64ToUrl(bufferImage);
        }
        return (
          <div className={styles.post} key={post.id}>
            <div className={styles.detail}>
              <img src={post.img ? post.img : base64Image} alt='' fill className={styles.img} />
              <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        )
      })}
    </div>
  );
};

export default AdminPosts;
