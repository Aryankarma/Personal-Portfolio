"use client";
import "./App.css";
import styles from "./App.module.scss";
import TextAnimation from "./components/TextAnimation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// firebase setup
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import firebaseConfig from "./config/firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetching portfolio (main) data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "portfolio", "main");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPortfolioData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("portfolioData: ", portfolioData);
  }, [portfolioData]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // scroll handle and navigator animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / scrollHeight) * 100);

      const home = document.getElementById("home");
      const skills = document.getElementById("skills");
      const projects = document.getElementById("projects");
      const connect = document.getElementById("connect");
      const elementArray = [home, skills, projects, connect];
      function udpateClass(element) {
        // addclass
        elementArray.find((currentElement) => {
          // // // // // // console.log(currentElement + " scrollpercentage:  " + scrollPercentage)
          if (currentElement == element) {
            currentElement.classList.add("activeSection");
          } else {
            currentElement.classList.remove("activeSection");
          }
        });
      }
      if (scrollPercentage < 25 && scrollPercentage > 0) {
        // home
        udpateClass(home);
      } else if (scrollPercentage < 50 && scrollPercentage > 25) {
        // skills
        udpateClass(skills);
      } else if (scrollPercentage <= 87 && scrollPercentage > 50) {
        // projects
        udpateClass(projects);
      } else if (scrollPercentage < 100 && scrollPercentage >= 87) {
        // connect
        udpateClass(connect);
      }
    };
    // // // // // console.log("scrolling")
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Side progress bar script
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / scrollHeight) * 100);

      const firstPage = document.getElementById("homepage");
      const secondPage = document.getElementById("biopage");
      const thirdPage = document.getElementById("skillspage");
      const fourthPage = document.getElementById("projectspage");
      const fifthPage = document.getElementById("connectpage");
      const elementArray = [
        firstPage,
        secondPage,
        thirdPage,
        fourthPage,
        fifthPage,
      ];

      function udpateClass(element) {
        if (element == firstPage) {
          const removeStyle = document.createElement("style");
          const style = document.createElement("style");

          removeStyle.textContent = `
                #hitcontainer2::before, #hitcontainer3::before, #hitcontainer4::before, #hitcontainer5::before{
                    background-color: black;           
            }
            `;

          style.textContent = `
            #hitcontainer1::before{
                background-color: white;
                box-shadow: 0 0 10px black; 
            }
            `;

          document.head.appendChild(removeStyle);
          document.head.appendChild(style);
        } else if (element == secondPage) {
          const removeStyle = document.createElement("style");
          const style = document.createElement("style");

          removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer3::before, #hitcontainer4::before, #hitcontainer5::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                } 
            `;

          style.textContent = `
            #hitcontainer2::before{
                background-color: white;
                box-shadow: 0 0 10px black; 
            }
            `;

          document.head.appendChild(removeStyle);
          document.head.appendChild(style);
        } else if (element == thirdPage) {
          const removeStyle = document.createElement("style");
          const style = document.createElement("style");

          removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer2::before,#hitcontainer4::before, #hitcontainer5::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                } 
            `;

          style.textContent = `
            #hitcontainer3::before{
                background-color: white;  
                box-shadow: 0 0 10px black;              
            }
            `;

          document.head.appendChild(removeStyle);
          document.head.appendChild(style);
        } else if (element == fourthPage) {
          const removeStyle = document.createElement("style");
          const style = document.createElement("style");
          const style2 = document.createElement("style");

          removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer2::before, #hitcontainer3::before, #hitcontainer5::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                }  
            `;

          style.textContent = `
            #hitcontainer4::before {
                background-color: white;
                box-shadow: 0 0 10px black;
            }
            `;

          document.head.appendChild(removeStyle);
          document.head.appendChild(style);
        } else if (element == fifthPage) {
          const removeStyle = document.createElement("style");
          const style = document.createElement("style");
          const style2 = document.createElement("style");

          removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer2::before, #hitcontainer3::before, #hitcontainer4::before, #hitcontainer4::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                } 
            `;

          style.textContent = `
            #hitcontainer5::before {
                background-color: white;
                box-shadow: 0 0 10px black;
              }
            `;

          document.head.appendChild(removeStyle);
          document.head.appendChild(style);
        }
      }

      if (scrollPercentage < 20) {
        udpateClass(firstPage);
      } else if (scrollPercentage < 40 && scrollPercentage > 20) {
        udpateClass(secondPage);
      } else if (scrollPercentage < 60 && scrollPercentage > 40) {
        udpateClass(thirdPage);
      } else if (scrollPercentage < 80 && scrollPercentage > 60) {
        udpateClass(fourthPage);
      } else if (scrollPercentage < 100 && scrollPercentage > 80) {
        udpateClass(fifthPage);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // circle following the cursor
  useEffect(() => {
    const circleElement = document.querySelector("#circlecursor");

    // curr mouse position
    const mouse = { x: 0, y: 0 };
    // storing prev mouse position
    const previousMouse = { x: 0, y: 0 };
    // circle position
    const circle = { x: 0, y: 0 };

    // scaling and rotation
    let currentScale = 0;
    let currentAngle = 0;

    // update circle's position when cursor's position changes
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // speed of the circle following the cursor
    const speed = 0.04;

    // Start animation
    const tick = () => {
      // MOVE
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;

      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      // SQUEEZE
      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;

      // updating previous position
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
      // calculate pointer speed
      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );
      // convert the speed into a value b/w 0-0.5
      const scaleValue = (mouseVelocity / 150) * 0.1;
      // update current state
      currentScale += (scaleValue - currentScale) * speed;
      // creating transformation
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      // ROTATE
      // calculation angle to rotate
      const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
      // check for a threshold
      if (mouseVelocity > 20) {
        currentAngle = angle;
      }
      // create a transformation string for rotation
      const rotateTransform = `rotate(${currentAngle}deg)`;

      // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      // tell the next frame to continue animation
      window.requestAnimationFrame(tick);
    };

    // Start the animation loop
    tick();
  }, []);

  // change theme
  const [theme, setTheme] = useState("Dark");

  const changeTheme = () => {
    setTheme(theme == "Dark" ? "Light" : "Dark");
    if (theme) {
      const element1 = document.getElementsByClassName("slick-prev")[0];
      const element2 = document.getElementsByClassName("slick-next")[0];
      element1.classList.toggle(`${styles.changeSlickTheme}`);
      element2.classList.toggle(`${styles.changeSlickTheme}`);
    }
  };

  return (
    <>
      {/* a circle that is following mouse cursor */}
      <div
        className={`circlecursor ${
          theme == "Dark" ? styles.circlecursordark : styles.circlecursorlight
        }`}
        id="circlecursor"
      ></div>

      <div
        id="fixpadding"
        className={`pagecontainer ${
          theme == "Dark" ? styles.darkPageContainer : styles.lightPageContainer
        } `}
      >
        {/* Home page */}
        <div id="homepage" className="page">
          <div className="nav">
            {/* <img onClick={changeTheme} id="chand" src="/svg/moon.svg" alt="" /> */}
            {/* <i className="fa-solid fa-moon"></i> */}
            <div
              onClick={changeTheme}
              className={`${
                theme == "Dark" ? styles.chandDark : styles.chandLight
              }`}
              id="chand"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.4008 14.8352C18.8431 15.8367 16.9894 16.4176 15 16.4176C9.47715 16.4176 5 11.9405 5 6.41761C5 5.21727 5.21149 4.06632 5.59924 3C2.83263 4.77874 1 7.88416 1 11.4176C1 16.9405 5.47715 21.4176 11 21.4176C15.3225 21.4176 19.0045 18.6751 20.4008 14.8352Z"
                />
                <path d="M20.4008 14.8352L21.3406 15.177L22.3537 12.3908L19.86 13.9941L20.4008 14.8352ZM5.59924 3L6.53903 3.34174L7.55218 0.555541L5.05843 2.15885L5.59924 3ZM19.86 13.9941C18.4588 14.8949 16.792 15.4176 15 15.4176V17.4176C17.1868 17.4176 19.2274 16.7784 20.9416 15.6764L19.86 13.9941ZM15 15.4176C10.0294 15.4176 6 11.3882 6 6.41761H4C4 12.4927 8.92487 17.4176 15 17.4176V15.4176ZM6 6.41761C6 5.3355 6.19053 4.30012 6.53903 3.34174L4.65944 2.65826C4.23244 3.83253 4 5.09904 4 6.41761H6ZM2 11.4176C2 8.23855 3.64752 5.44367 6.14004 3.84115L5.05843 2.15885C2.01773 4.11381 0 7.52977 0 11.4176H2ZM11 20.4176C6.02944 20.4176 2 16.3882 2 11.4176H0C0 17.4927 4.92487 22.4176 11 22.4176V20.4176ZM19.461 14.4935C18.2038 17.9508 14.8887 20.4176 11 20.4176V22.4176C15.7563 22.4176 19.8052 19.3994 21.3406 15.177L19.461 14.4935Z" />
              </svg>
            </div>
            <button style={{ display: "none" }}>
              <Link href={"./blogs"}>Blogs</Link>
            </button>
          </div>

          <div className="headProfile">
            <div id="headContainer">
              <div className="maskContainer">
                <span
                  className={`${theme == "Dark" ? "" : styles.iamaryanLight}`}
                  id="imaryan"
                >
                  I&apos;m Aryan Karma
                </span>
              </div>
              <TextAnimation theme={theme} /> {/* rendering component */}
            </div>
            <div
              id="profileContainer"
              className={`${theme == "Dark" ? styles.ppDark : styles.ppLight}`}
            >
              <Image
                width={190}
                height={190}
                src={portfolioData?.personalInfo?.profilePicture}
                alt="profile picture"
              />
            </div>
          </div>
        </div>

        {/* bio page */}
        <div id="biopage" className="page">
          <div
            id="removeMobile"
            className={`head ${
              theme == "Dark" ? styles.headDark : styles.headLight
            }`}
          >
            Bio
            <span
              className={`${theme == "Dark" ? "" : styles.headDotLight}`}
              id="headdotpurple"
            >
              .
            </span>
          </div>

          <div
            className={`contentBox ${
              theme == "Dark" ? styles.contentBoxDark : styles.contentBoxLight
            }`}
          >
            <div className="card-content">
              <p
                className={`content ${
                  theme == "Dark" ? styles.contentDark : styles.contentLight
                }`}
              >
                {portfolioData?.personalInfo?.bio}
              </p>
            </div>
          </div>
        </div>

        {/* skills page */}
        <div id="skillspage" className="page">
          <div
            className={`head ${
              theme == "Dark" ? styles.headDark : styles.headLight
            }`}
          >
            Skills
            <span
              className={`${theme == "Dark" ? "" : styles.headDotLight}`}
              id="headdotlightblue"
            >
              .
            </span>
          </div>

          <div
            className={`contentBox ${
              theme == "Dark" ? styles.contentBoxDark : styles.contentBoxLight
            }`}
          >
            <div id="skillscircle">
              {portfolioData?.skills.map((skill, index) => (
                <div
                  key={index}
                  style={{ borderColor: skill.borderColor }}
                  className={`skillcircle ${
                    theme === "Dark" ? "" : skill.lightStyle
                  }`}
                >
                  <div className="tooltip">
                    <div className="tooltipcorner"></div>
                    {skill.name}
                  </div>
                  <Image
                    style={{
                      padding: skill.padding || "0px",
                      transform: `scaleX(${skill.scale || "1"})`,
                    }}
                    height={skill?.height}
                    width={skill?.width}
                    src={skill?.imgSrc}
                    alt={skill?.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* projects page */}
        <div id="projectspage" className="page">
          <div
            className={`head ${
              theme == "Dark" ? styles.headDark : styles.headLight
            }`}
          >
            Projects
            <span
              className={`${theme == "Dark" ? "" : styles.headDotLight}`}
              id="headdotpurple"
            >
              .
            </span>
          </div>

          {/* <div style={{background:"none", boxShadow:'none'}} className={`contentBox ${theme == "Dark" ? styles.contentBoxDark : styles.contentBoxLight}`} id='removeMobile'>
        <Slider {...settings}>
        
        <div className={`projectBox projectBox1 ${theme == "Dark" ? styles.projectBoxDark : styles.projectBoxLight}`}>
            
            <div className="laptop">
              <img src="/img/weather-app.png" alt="" />
            </div>

            <div className="projectAbout">
              <div className="projectHeading">
                <h5 style={{ margin: "0", marginLeft: "-2%" }}>Weather App</h5>
              </div>
              <div className="projectFeatures">
                <ul style={{ paddingLeft: "7%", listStyle: "disc"}}>
                  <li>Tech: React & Next</li>
                  <li>Elegant UI/UX</li>
                  <li>load time: 950ms </li>
                  <li>refresh time: 300ms</li>
                </ul>
              </div>
              <div className="checkoutbtn">
                <a href="https://weather-app-aryankarma.vercel.app/" target="_blank">
                  <button href="">
                    <p> Checkout
                      <img className='arrowimg' style={{ scale: "2.1", marginLeft: ".3rem" }} src="/svg/Arrow1.svg" alt="" />
                    </p>
                  </button>
                </a>
                <a href="https://github.com/aryankarma/weatherapp" target="_blank">
                  <button className='github' href="">
                      <img className='githubimg' style={{height:"15px"}} src="/svg/github.svg" alt="" />
                  </button>
                </a>
              </div>
            </div>

          </div>


          <div className={`projectBox projectBox2 ${theme == "Dark" ? styles.projectBoxDark : styles.projectBoxLight}`}>
            
            <div className="laptop">
              <img src="/img/bookswap.png" alt="" />
            </div>
            
            <div className="projectAbout">
              <div className="projectHeading">
                <h5 style={{ margin: "0", marginLeft: "-2%" }}>BookSwap</h5>
              </div>
              <div className="projectFeatures">
                <ul style={{ paddingLeft: "7%", listStyle: "disc" }}>
                  <li>HTML, CSS, and JavaScript</li>
                  <li>Responsive design</li>
                </ul>
              </div>
              <div className="checkoutbtn">
                <a href="" target="_blank">
                  <button href="">
                    <p> Checkout
                      <img className='arrowimg' style={{ scale: "2.1", marginLeft: ".3rem"  }} src="/svg/Arrow1.svg" alt="" />
                    </p>
                  </button>
                </a>
                <a href="https://github.com/aryankarma/bookswap" target="_blank">
                  <button className='github' href="">
                      <img className='githubimg' style={{height:"15px"}} src="/svg/github.svg" alt="" />
                  </button>
                </a>
              </div>
            </div>

          </div>


          <div className={`projectBox projectBox3 ${theme == "Dark" ? styles.projectBoxDark : styles.projectBoxLight}`}>
            
            <div className="laptop">
              <img src="/img/UniHosp.png" alt="" />
            </div>

            <div className="projectAbout">
              <div className="projectHeading">
                <h5 style={{ margin: "0", marginLeft: "-2%" }}>UniHosp</h5>
              </div>
              <div className="projectFeatures">
                <ul style={{ paddingLeft: "7%", listStyle: "disc" }}>
                <li>Full Stack Hackathon Project</li>
                  <li>HTML, CSS, JS, SASS</li>
                  <li>Responsive layout</li>
                </ul>
              </div>
              <div className="checkoutbtn">
                <a href="https://github.com/glxymesh/UniHosp" target="_blank">
                  <button href="">
                    <p> Checkout
                      <img className='arrowimg' style={{scale: "2.1", marginLeft: ".3rem"}} src="/svg/Arrow1.svg" alt="" />
                    </p>
                  </button>
                </a>
                <a href="https://github.com/glxymesh/UniHosp" target="_blank">
                  <button className='github' href="">
                      <img className='githubimg' style={{height:"15px"}} src="/svg/github.svg" alt="" />
                  </button>
                </a>
              </div>
            </div>

          </div>  

        </Slider>
      </div> */}

          <div
            style={{ background: "none", boxShadow: "none" }}
            className={`contentBox ${
              theme === "Dark" ? styles.contentBoxDark : styles.contentBoxLight
            }`}
            id="removeMobile"
          >
            <Slider {...settings}>
              {portfolioData?.projects.map((project, index) => (
                project.name !== "null" ? 
                  <div
                  key={index}
                  className={`projectBox projectBox${index + 1} ${
                    theme === "Dark"
                      ? styles.projectBoxDark
                      : styles.projectBoxLight
                  }`}
                >
                  <div className="laptop">
                    <img src={project.imageURL} alt={project.name} />
                  </div>

                  <div className="projectAbout">
                    <div className="projectHeading">
                      <h5 style={{ margin: "0", marginLeft: "-2%" }}>
                        {project.name}
                      </h5>
                    </div>
                    <div className="projectFeatures">
                      <ul style={{ paddingLeft: "7%", listStyle: "disc" }}>
                        {project.description.map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="checkoutbtn">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <p>
                              Checkout
                              <img
                                className="arrowimg"
                                style={{ scale: "2.1", marginLeft: ".3rem" }}
                                src="/svg/Arrow1.svg"
                                alt=""
                              />
                            </p>
                          </button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="github">
                            <img
                              className="githubimg"
                              style={{ height: "15px" }}
                              src="/svg/github.svg"
                              alt="GitHub"
                            />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div> : null
              ))}
            </Slider>
          </div>

          <div
  style={{ background: "none", boxShadow: "none" }}
  className={`contentBox ${
    theme === "Dark" ? styles.contentBoxDark : styles.contentBoxLight
  }`}
>
  <div
    style={{ scale: "1.05", marginTop: "1.5rem" }}
    id="projectBoxContainer"
    className="removeDesktop"
  >
    {portfolioData?.projects.map((project, index) => (
      project.name !== "null" ? (
        <div
          key={index}
          className={`projectBox projectBoxMobile projectBox${index + 1} ${
            theme === "Dark" ? styles.projectBoxDark : styles.projectBoxLight
          }`}
        >
          <div className="laptop">
            <img src={project.imageURL} alt={project.name} />
          </div>

          <div className="projectAbout projectAboutMobile">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-5%" }}>
                {project.name}
              </h5>
            </div>
            <div className="projectFeatures projectFeaturesMobile">
              <ul style={{ paddingLeft: "0%", listStyle: "none" }}>
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="checkoutbtn">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <p>
                      Checkout
                      <img
                        className="arrowimg"
                        style={{ scale: "2", marginLeft: ".3rem" }}
                        src="/svg/Arrow1.svg"
                        alt=""
                      />
                    </p>
                  </button>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="github">
                    <img
                      className="githubimg"
                      style={{ height: "10px" }}
                      src="/svg/github.svg"
                      alt="GitHub"
                    />
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ) : null
    ))}
  </div>
</div>


{/* 
          <div
            style={{ background: "none", boxShadow: "none" }}
            className={`contentBox ${
              theme == "Dark" ? styles.contentBoxDark : styles.contentBoxLight
            }`}
          >
            <div
              style={{ scale: "1.05", marginTop: "1.5rem" }}
              id="projectBoxContainer"
              className="removeDesktop"
            >
              <div
                className={`projectBox projectBox1 ${
                  theme == "Dark"
                    ? styles.projectBoxDark
                    : styles.projectBoxLight
                }`}
              >
                <div className="laptop">
                  <img src="/img/weather-app.png" alt="" />
                </div>

                <div className="projectAbout">
                  <div className="projectHeading">
                    <h5 style={{ margin: "0", marginLeft: "-5%" }}>
                      Weather App
                    </h5>
                  </div>
                  <div className="projectFeatures">
                    <ul style={{ paddingLeft: "10%", listStyle: "disc" }}>
                      <li>Tech: React & Next</li>
                      <li>Elegant UI/UX</li>
                      <li>load time: 950ms </li>
                      <li>refresh time: 300ms</li>
                    </ul>
                  </div>
                  <div className="checkoutbtn">
                    <a
                      href="https://weather-app-aryankarma.vercel.app/"
                      target="_blank"
                    >
                      <button href="">
                        <p>
                          {" "}
                          Checkout
                          <img
                            className="arrowimg"
                            style={{ scale: "2", marginLeft: ".3rem" }}
                            src="/svg/Arrow1.svg"
                            alt=""
                          />
                        </p>
                      </button>
                    </a>
                    <a
                      href="https://github.com/aryankarma/weatherapp"
                      target="_blank"
                    >
                      <button className="github" href="">
                        <img
                          className="githubimg"
                          style={{ height: "10px" }}
                          src="/svg/github.svg"
                          alt=""
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`projectBox projectBox2 ${
                  theme == "Dark"
                    ? styles.projectBoxDark
                    : styles.projectBoxLight
                }`}
              >
                <div className="laptop">
                  <img src="/img/bookswap.png" alt="" />
                </div>

                <div className="projectAbout">
                  <div className="projectHeading">
                    <h5 style={{ margin: "0", marginLeft: "-5%" }}>BookSwap</h5>
                  </div>
                  <div className="projectFeatures">
                    <ul style={{ paddingLeft: "10%", listStyle: "disc" }}>
                      <li>HTML, CSS, and JavaScript</li>
                      <li>Responsive design</li>
                    </ul>
                  </div>
                  <div className="checkoutbtn">
                    <a href="" target="_blank">
                      <button href="">
                        <p>
                          {" "}
                          Checkout
                          <img
                            className="arrowimg"
                            style={{ scale: "2", marginLeft: ".3rem" }}
                            src="/svg/Arrow1.svg"
                            alt=""
                          />
                        </p>
                      </button>
                    </a>
                    <a
                      href="https://github.com/aryankarma/bookswap"
                      target="_blank"
                    >
                      <button className="github" href="">
                        <img
                          className="githubimg"
                          style={{ height: "10px" }}
                          src="/svg/github.svg"
                          alt=""
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`projectBox projectBox3 ${
                  theme == "Dark"
                    ? styles.projectBoxDark
                    : styles.projectBoxLight
                }`}
              >
                <div className="laptop">
                  <img src="/img/UniHosp.png" alt="" />
                </div>

                <div className="projectAbout">
                  <div className="projectHeading">
                    <h5 style={{ margin: "0", marginLeft: "-5%" }}>UniHosp</h5>
                  </div>
                  <div className="projectFeatures">
                    <ul style={{ paddingLeft: "10%", listStyle: "disc" }}>
                      <li>Full Stack Hackathon Project</li>
                      <li>HTML, CSS, JS, SASS</li>
                      <li>Responsive layout</li>
                    </ul>
                  </div>
                  <div className="checkoutbtn">
                    <a
                      href="https://github.com/glxymesh/unihosp"
                      target="_blank"
                    >
                      <button href="">
                        <p>
                          {" "}
                          Checkout
                          <img
                            className="arrowimg"
                            style={{ scale: "2", marginLeft: ".3rem" }}
                            src="/svg/Arrow1.svg"
                            alt=""
                          />
                        </p>
                      </button>
                    </a>
                    <a
                      href="https://github.com/glxymesh/unihosp"
                      target="_blank"
                    >
                      <button className="github" href="">
                        <img
                          className="githubimg"
                          style={{ height: "10px" }}
                          src="/svg/github.svg"
                          alt=""
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div id='removeMobile' className="hr">
        <div className="circle"></div>
        <div id="hrdotpurple" className="circle"></div>
        <div id="hrdotpurple" className="circle"></div>
        <div id="hrdotpurple" className="circle"></div>
      </div> */}
        </div>

        {/* connect page */}
        <div
          style={{ height: "calc(100vh - 30px)" }}
          id="connectpage"
          className="page"
        >
          <div
            className={`head ${
              theme == "Dark" ? styles.headDark : styles.headLight
            }`}
          >
            Connect
            <span
              className={`${theme == "Dark" ? "" : styles.headDotLight}`}
              id="headdotyellow"
            >
              .
            </span>
          </div>

          <form
            id="form"
            method="POST"
            action="https://formspree.io/f/mleqedkj"
          >
            <input
              className={`${
                theme == "Dark" ? styles.inputNameDark : styles.inputNameLight
              }`}
              autoComplete="off"
              type="text"
              name="name"
              id="inputname"
              placeholder="Name"
              required
            />
            <input
              className={`${
                theme == "Dark" ? styles.inputMailDark : styles.inputMailLight
              }`}
              autoComplete="off"
              type="email"
              name="email"
              id="inputemail"
              placeholder="Email"
              required
            />
            <textarea
              className={`${
                theme == "Dark" ? styles.inputMsgDark : styles.inputMsgLight
              }`}
              autoComplete="off"
              type="text"
              name="message"
              id="inputtextarea"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button
              className={`${
                theme == "Dark" ? styles.buttonDark : styles.buttonLight
              }`}
              type="submit"
            >
              SEND
              <svg
                style={{ scale: "1.5" }}
                className="arrowimg"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
              >
                <path d="M8.51008 4.35355C8.70534 4.15829 8.70534 3.84171 8.51008 3.64645L5.3281 0.464467C5.13284 0.269204 4.81626 0.269204 4.62099 0.464467C4.42573 0.659729 4.42573 0.976311 4.62099 1.17157L7.44942 4L4.62099 6.82843C4.42573 7.02369 4.42573 7.34027 4.62099 7.53553C4.81626 7.7308 5.13284 7.7308 5.3281 7.53553L8.51008 4.35355ZM0 4.5H8.15653V3.5L0 3.5L0 4.5Z" />
              </svg>
            </button>
          </form>
        </div>

        <div
          className={`footer ${
            theme == "Dark" ? styles.footerDark : styles.footerLight
          }`}
        >
          <div className="socials">
            <a href="https://www.x.com/karmaaryan" target="_blank">
              Twitter
              <svg
                className="arrowimg"
                width="10"
                height="10"
                viewBox="0 0 4 4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.275 1C3.275 0.848122 3.15188 0.725 3 0.725L0.525 0.725C0.373122 0.725 0.25 0.848122 0.25 1C0.25 1.15188 0.373122 1.275 0.525 1.275L2.725 1.275L2.725 3.475C2.725 3.62688 2.84812 3.75 3 3.75C3.15188 3.75 3.275 3.62688 3.275 3.475L3.275 1ZM1.19445 3.19445L3.19445 1.19445L2.80555 0.805546L0.805546 2.80555L1.19445 3.19445Z" />
              </svg>
            </a>
            <a href="https://www.github.com/aryankarma" target="_blank">
              Github
              <svg
                className="arrowimg"
                width="10"
                height="10"
                viewBox="0 0 4 4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.275 1C3.275 0.848122 3.15188 0.725 3 0.725L0.525 0.725C0.373122 0.725 0.25 0.848122 0.25 1C0.25 1.15188 0.373122 1.275 0.525 1.275L2.725 1.275L2.725 3.475C2.725 3.62688 2.84812 3.75 3 3.75C3.15188 3.75 3.275 3.62688 3.275 3.475L3.275 1ZM1.19445 3.19445L3.19445 1.19445L2.80555 0.805546L0.805546 2.80555L1.19445 3.19445Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aryankarma" target="_blank">
              Linkedin
              <svg
                className="arrowimg"
                width="10"
                height="10"
                viewBox="0 0 4 4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.275 1C3.275 0.848122 3.15188 0.725 3 0.725L0.525 0.725C0.373122 0.725 0.25 0.848122 0.25 1C0.25 1.15188 0.373122 1.275 0.525 1.275L2.725 1.275L2.725 3.475C2.725 3.62688 2.84812 3.75 3 3.75C3.15188 3.75 3.275 3.62688 3.275 3.475L3.275 1ZM1.19445 3.19445L3.19445 1.19445L2.80555 0.805546L0.805546 2.80555L1.19445 3.19445Z" />
              </svg>
            </a>
            <a
              id="removeMobile"
              href="https://www.bento.me/aryankarma"
              target="_blank"
            >
              Bento
              <svg
                className="arrowimg"
                width="10"
                height="10"
                viewBox="0 0 4 4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.275 1C3.275 0.848122 3.15188 0.725 3 0.725L0.525 0.725C0.373122 0.725 0.25 0.848122 0.25 1C0.25 1.15188 0.373122 1.275 0.525 1.275L2.725 1.275L2.725 3.475C2.725 3.62688 2.84812 3.75 3 3.75C3.15188 3.75 3.275 3.62688 3.275 3.475L3.275 1ZM1.19445 3.19445L3.19445 1.19445L2.80555 0.805546L0.805546 2.80555L1.19445 3.19445Z" />
              </svg>
            </a>
          </div>
          <div className="email">
            <a href="mailto:aryankarma29@gmail.com" target="_blank">
              aryankarma29@gmail.com
              <svg
                className="arrowimg"
                width="10"
                height="10"
                viewBox="0 0 4 4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.275 1C3.275 0.848122 3.15188 0.725 3 0.725L0.525 0.725C0.373122 0.725 0.25 0.848122 0.25 1C0.25 1.15188 0.373122 1.275 0.525 1.275L2.725 1.275L2.725 3.475C2.725 3.62688 2.84812 3.75 3 3.75C3.15188 3.75 3.275 3.62688 3.275 3.475L3.275 1ZM1.19445 3.19445L3.19445 1.19445L2.80555 0.805546L0.805546 2.80555L1.19445 3.19445Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* bottom navigator */}
      <div
        className={`removeDesktop ${
          theme == "Dark" ? styles.navigatorDark : styles.navigatorLight
        }`}
        id="navigator"
      >
        {/* <p href='#homepage' id='home' >Home</p>
    <p href='#skillspage' id='skills' >Skills</p> */}
        <a href="#homepage" className="activeSection" id="home">
          Home
        </a>
        <a href="#skillspage" id="skills">
          Skills
        </a>
        <a href="#projectspage" id="projects">
          Project
        </a>
        <a href="#connectpage" id="connect">
          Connect
        </a>
        {/* <p id='projects' >Project</p>
    <p id='connect' >Connect</p> */}
      </div>

      {/* Progress Bar */}
      <div id="removeMobile" className="anchors-wrap">
        <ul id="removeMobile" className="anchors">
          <li>
            <a id="hitcontainer1" href="#homepage"></a>
          </li>
          <li>
            <a id="hitcontainer2" href="#biopage"></a>
          </li>
          <li>
            <a id="hitcontainer3" href="#skillspage"></a>
          </li>
          <li>
            <a id="hitcontainer4" href="#projectspage"></a>
          </li>
          <li>
            <a id="hitcontainer5" href="#connectpage"></a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;

/*
  Additions -
  1. Update written content about aryan's skills

*/
