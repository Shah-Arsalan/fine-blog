import React from 'react'
import styles from "./navbar.module.css"
import Links from "./links/Links"
import { auth } from '@/lib/auth'
import { handleLogout } from '@/lib/action';


async function Navbar() {
    const session = await auth();
    console.log("session is", session);
    const handleLogoutFunc = handleLogout;
    return (
        <div className={styles.container}>
            <div>Logo</div>
            <div>
                <Links session={session} handleLogout={handleLogoutFunc}/>
            </div>


        </div>
    )
}

export default Navbar