import React from 'react'
import styles from "./blog.module.scss"
import { useState, useEffect } from "react"

const Blog = ({theme, data, type}) => {

    console.log(type)

    useEffect(()=>{
        if(data){ 
            setDataFetch(true);
        }
    },[])

    // remove this useState and ternary operators when database connected
    const [dataFetch, setDataFetch] = useState(false);

    return <>
   
    {dataFetch ? data.map((input, index)=>{   

        let subheading = input.content.slice(0, 220) + "..."
        const actualDate = new Date(input.dateAndTime.seconds * 1000 + input.dateAndTime.nanoseconds / 1000000);
      
        let options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        };

        const formattedDate = actualDate.toLocaleDateString("en-US", options); // Adjust the format as needed
        
        const nummberOfWords = input.content.trim().split(/\s+/).length;
        let minuteRead = nummberOfWords/100; // divided by avg reading speed
        minuteRead = Math.round(minuteRead);
        minuteRead = minuteRead + " min read"
        

        return <React.Fragment key={index}>
            <div 
            className={`${theme == "Dark" ? styles.blogBoxDark : styles.blogBoxLight}`} 
            id={styles.blogBox}>
                <div className={styles.headingsContainer}>
                    <h2 className={styles.mainheading}>{input.title}</h2>
                    <p className={styles.subheading}>{subheading}</p>
                </div>
                <div className={styles.DateAndTimeContainer}>
                    <p className={`${styles.minuteRead} ${theme == "Dark" ? styles.minuteReadDark : styles.minuteReadLight}`}><span className={styles.removeDesktop}>• </span> {minuteRead}</p>
                    <p className={`${styles.date} ${theme == "Dark" ? styles.dateDark : styles.dateLight}`}> {formattedDate}</p>
                </div>
            </div>
            <hr className={`${styles.hr} ${theme == "Dark" ? styles.hrDark : styles.hrLight}`}/>
        </React.Fragment>
    }) : <h1 id={styles.comingSoon}>No blogs here :)</h1> }
    </> 
}

export default Blog; 