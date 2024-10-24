"use client"

import { auth } from "@/lib/auth";
import styles from "./profileUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

export const ProfileUser = async () => {
    const session = await auth();
    const user = await getUser(session?.user.id);
    

    return (
        <div className={styles.Container}>
            <div className={styles.profileImageContainer}>
                <Image
                    src={user?.profilePicture || "/noAvatar.png"}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className={styles.profileImage}
                />
            </div>
            <div className={styles.profileDetails}>
                <p>Username : {user?.username}</p>
                <p>Email: {user?.email}</p>
                <p>IsAdmin: {user?.isAdmin ? "✅" : "❌" }</p>
                <p>Joined: {new Date(user?.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};


