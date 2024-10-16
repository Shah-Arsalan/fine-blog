"use client";

import styles from "./links.module.css"
import Link from 'next/link'
import NavLink from "./navLink/navLink"
import React, { useState } from 'react'
// import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

function Links({session , handleLogout}) {
    const [open , setOpen ] = useState(false);
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]

    const isAdmin = session?.user?.isAdmin;


    return (
        <div className={styles.links}>{links.map(link => <NavLink item={link} key={link.title} />
        )}

            {
                session?.user ? (
                    <>
                        {
                        isAdmin && (<NavLink item={{ title: "Admin", path: "/admin" }} />)
                        }
                        <form action={handleLogout}>

                            <button className={styles.logout}>Logout</button>

                        </form>
                    </>
                ) : (<NavLink item={{ title: "Login", path: "/login" }} />)
            }




        </div >
    )
}

export default Links