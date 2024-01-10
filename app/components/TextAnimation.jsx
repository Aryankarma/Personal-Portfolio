"use client"
import React, { useState, useEffect } from "react";
// import '../App.css'
import styles from './TextAnimation.module.scss'

const words = ['Web Developer', 'Web Designer', 'Tech Enthusiast'];


function TextAnimation() {
  const [part, setPart] = useState('');
  let i = 0;
  let offset = 0;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 25;
  const speed = 100;

  const wordFlick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= words.length) {
            i = 0;
          }
        }
      }
      const currentPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setPart(currentPart);
    }, speed);
  };

  useEffect(() => {
    wordFlick();
    
  }, []); // Run once when the component mounts

  return (
      <div id={styles.subhead}> A {part}</div>
  );
}

// export default TextAnimation
export default TextAnimation;


function TextAnimation2() {
  const [part, setPart] = useState("");
  let i = 0;
  let offset = 0;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 15;

  const wordFlick = () => {
    const animate = () => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= words.length) {
            i = 0;
          }
        }
      }
      const currentPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setPart(currentPart);
      requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    wordFlick();
  }, []); // Run once when the component mounts

  return <div id={styles.subhead}>{part}</div>;
}