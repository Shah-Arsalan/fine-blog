
import React from 'react'
import styles from "./navbar.module.css"
import Links from "./links/Links"

function Navbar() {
    return (
        <div className={styles.container}>
            <div>Logo</div>
            <div>
                <Links/>
            </div>


        </div>
    )
}

export default Navbar