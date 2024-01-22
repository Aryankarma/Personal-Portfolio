"use client"
import styles from "./blogs.module.scss"
import Blog from "../components/blog"
import Link from "next/link"
import Image from "next/image";
import { useState } from "react"

const blogs = () => { 

    const [theme, setTheme] = useState("Dark");

    const changeTheme = () =>{
        setTheme(theme == "Dark" ? "Light" : "Dark")

    }

    return <>

    <div className={`${styles.container} ${theme == "Dark" ? styles.containerDark : styles.containerLight}`}>
        {/* navbar */}
        {/* <div className={styles.nav}> */}
        <div className={`${styles.nav} ${theme == "Dark" ? styles.navDark : styles.navLight }`}>
            <div className={styles.pfpandback}>
                {/* <Link href="../"><img className={styles.arrowimg} style={{ scale: "1", rotate:"180deg" }} src="/svg/backArrow.svg" alt="" /></Link> */}
                <Link href="../">
                    <div style={{ scale: "1", rotate:"180deg" }}>
                        <svg className={`${styles.arrowimg} ${theme == "Dark" ? styles.arrowimgDark : styles.arrowimgLight}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 8" >
                            <path d="M8.51008 4.35355C8.70534 4.15829 8.70534 3.84171 8.51008 3.64645L5.3281 0.464467C5.13284 0.269204 4.81626 0.269204 4.62099 0.464467C4.42573 0.659729 4.42573 0.976311 4.62099 1.17157L7.44942 4L4.62099 6.82843C4.42573 7.02369 4.42573 7.34027 4.62099 7.53553C4.81626 7.7308 5.13284 7.7308 5.3281 7.53553L8.51008 4.35355ZM0 4.5H8.15653V3.5L0 3.5L0 4.5Z" />
                        </svg>
                    </div>
                </Link>
                
                <img id={styles.pfp} src="/img/pfp.jpg" alt="profile picture" />
            </div>
            <div className={`${styles.links} ${theme == "Dark" ? styles.navLinksDark : styles.navLinksLight}`}>
                <a>All</a>
                <a>Latest</a>
                <a>Technical</a>
                <a>this&that</a>
            </div>
            <div onClick={changeTheme} className={`${theme == "Dark" ? styles.chandDark : styles.chandLight}`} id={styles.chand}>
                <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4008 14.8352C18.8431 15.8367 16.9894 16.4176 15 16.4176C9.47715 16.4176 5 11.9405 5 6.41761C5 5.21727 5.21149 4.06632 5.59924 3C2.83263 4.77874 1 7.88416 1 11.4176C1 16.9405 5.47715 21.4176 11 21.4176C15.3225 21.4176 19.0045 18.6751 20.4008 14.8352Z"/>
                    <path d="M20.4008 14.8352L21.3406 15.177L22.3537 12.3908L19.86 13.9941L20.4008 14.8352ZM5.59924 3L6.53903 3.34174L7.55218 0.555541L5.05843 2.15885L5.59924 3ZM19.86 13.9941C18.4588 14.8949 16.792 15.4176 15 15.4176V17.4176C17.1868 17.4176 19.2274 16.7784 20.9416 15.6764L19.86 13.9941ZM15 15.4176C10.0294 15.4176 6 11.3882 6 6.41761H4C4 12.4927 8.92487 17.4176 15 17.4176V15.4176ZM6 6.41761C6 5.3355 6.19053 4.30012 6.53903 3.34174L4.65944 2.65826C4.23244 3.83253 4 5.09904 4 6.41761H6ZM2 11.4176C2 8.23855 3.64752 5.44367 6.14004 3.84115L5.05843 2.15885C2.01773 4.11381 0 7.52977 0 11.4176H2ZM11 20.4176C6.02944 20.4176 2 16.3882 2 11.4176H0C0 17.4927 4.92487 22.4176 11 22.4176V20.4176ZM19.461 14.4935C18.2038 17.9508 14.8887 20.4176 11 20.4176V22.4176C15.7563 22.4176 19.8052 19.3994 21.3406 15.177L19.461 14.4935Z" />
                </svg>
            </div>
            {/* <img id={styles.chand} src="/svg/moon.svg" alt="" /> */}
        </div>

        {/* blogs */}
        <div className={styles.blogsContainer}>
            <Blog theme={theme}/>
        </div>
    </div>

    </>

}

export default blogs;