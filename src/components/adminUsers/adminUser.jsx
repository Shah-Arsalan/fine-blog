import { getUsers } from "@/lib/data";
import styles from "./adminUser.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";
import { convertBase64ToUrl } from "@/lib/utils";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => {
        const { bufferImage, img } = user;

        let base64Image = null;

        if (!img) {
          base64Image = convertBase64ToUrl(bufferImage);
        }
        return (
          <div className={styles.user} key={user.id}>
            <div className={styles.detail}>
            <img src={user.img ? user.img :( base64Image || "/noAvatar.png") } alt='' fill className={styles.img} />
              <span>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.userButton}>Delete</button>
            </form>
          </div>
        )
      })}
    </div>
  );
};

export default AdminUsers;