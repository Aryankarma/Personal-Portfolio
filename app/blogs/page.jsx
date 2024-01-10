"use client"
import styles from "./blogs.module.scss"
import Blog from "../components/blog"
import "./customScroll.css"
import Link from "next/link"

const blogs = () => {
    return <>
    <div className={styles.container}>
        {/* navbar */}
        <div className={styles.nav}>
            <div className={styles.pfpandback}>
                <Link href="../"><img className={styles.arrowimg} style={{ scale: "1", rotate:"180deg" }} src="/svg/backArrow.svg" alt="" /></Link>
                <img id={styles.pfp} src="/img/pfp.jpg" alt="profile picture" />
            </div>
            <div className={styles.links}>
                <a>All</a>
                <a>Latest</a>
                <a>Technical</a>
                <a>this&that</a>
            </div>
            <img id={styles.chand} src="/svg/moon.svg" alt="" />
        </div>

        {/* blogs */}
        <div className={styles.blogsContainer}>
            <Blog/>
        </div>
    </div>


    </>
}

export default blogs;