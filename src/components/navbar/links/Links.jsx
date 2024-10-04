"use client";

import styles from "./links.module.css"
import Link from 'next/link'
import NavLink from "./navLink/navLink"
import React, { useState } from 'react'

function Links() {
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

    const session = false;
    const isAdmin = false;


    return (
        <div className={styles.links}>{links.map(link => <NavLink item={link} key={link.title} />
        )}

            {
                session ? (
                    <>
                        {
                        isAdmin && (<NavLink item={{ title: "Admin", path: "/admin" }} />)
                        }
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (<NavLink item={{ title: "Login", path: "/login" }} />)
            }




        </div >
    )
}

export default Links