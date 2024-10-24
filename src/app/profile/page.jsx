"use client"
import { auth } from "@/lib/auth";
import styles from "./profile.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getSession, userGetter } from "@/lib/action";
import UserEditForm from "@/components/userEditForm/userEditForm";
import { convertBase64ToUrl } from "@/lib/utils";


const ProfilePage = () => {
    const [user , setUser] = useState()
    const [appear , setAppear] = useState(false);
    let base64Image = null;

    if(user){
        const { bufferImage, img } = user;
    
        if (!img) {
            base64Image = convertBase64ToUrl(bufferImage);
        }

    }
   

    useEffect(()=>{

        const sessionGetter = async () => {
            const session = await getSession();
            console.log("🚀 ~ sessionGetter ~ session:", session)
            const user = await userGetter(session?.user.id);
            console.log("🚀 ~ sessionGetter ~ user:", user)
            setUser(user);
        }
        sessionGetter();
    },[])



    return (
        <div className={styles.Container}>
            <div className={styles.profileImageContainer}>
                <Image
                    src={user?.img ? user.img : ( base64Image || "/noAvatar.png")}
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
            <button className={styles.edit} onClick={()=>setAppear(prev => !prev)}>Edit details</button>
          
            {appear &&   <div className={styles.modalBackground} > <UserEditForm user={user} setAppear={setAppear} /> </div>}
            
        </div>
    );
};

export default ProfilePage;
