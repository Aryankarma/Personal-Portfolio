"use client"
import './App.css'
import TextAnimation from "./components/TextAnimation"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Head from 'next/head'

function App() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



//   // scroll handle and navigator animation
useEffect(()=>{
  const handleScroll = () =>{
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = Math.round((scrolled / scrollHeight) * 100);
  
    const home = document.getElementById("home")
    const skills = document.getElementById("skills")
    const projects = document.getElementById("projects")
    const connect = document.getElementById("connect")
    const elementArray = [home, skills, projects, connect]
    function udpateClass(element){
      // addclass
      elementArray.find((currentElement) => {
        // console.log(currentElement + " scrollpercentage:  " + scrollPercentage)
        if(currentElement == element){
          currentElement.classList.add("activeSection");
        }else{
          currentElement.classList.remove("activeSection")
        }
      })
    }
    if(scrollPercentage < 25 && scrollPercentage > 0){
      // home
      udpateClass(home)
    }else if(scrollPercentage < 50 && scrollPercentage > 25){
      // skills
      udpateClass(skills)
    }else if(scrollPercentage <= 87 && scrollPercentage > 50){
      // projects
      udpateClass(projects)
    }else if(scrollPercentage < 100 && scrollPercentage >= 87){
      // connect
      udpateClass(connect)
    }
  }
  // console.log("scrolling")
  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };

}, [])

// Side progress bar script
useEffect(()=>{
  const handleScroll = () =>{

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = Math.round((scrolled / scrollHeight) * 100);

    const firstPage = document.getElementById("homepage")
    const secondPage = document.getElementById("biopage")
    const thirdPage = document.getElementById("skillspage")
    const fourthPage = document.getElementById("projectspage")
    const fifthPage = document.getElementById("connectpage")
    const elementArray = [firstPage, secondPage, thirdPage, fourthPage, fifthPage]

    function udpateClass(element) {

        if(element == firstPage){

            const removeStyle = document.createElement('style');
            const style = document.createElement('style');
            
            removeStyle.textContent = `
                #hitcontainer2::before, #hitcontainer3::before, #hitcontainer4::before, #hitcontainer5::before{
                    background-color: black;           
            }
            `
            
            style.textContent = `
            #hitcontainer1::before{
                background-color: white;
                box-shadow: 0 0 10px black; 
            }
            `

            document.head.appendChild(removeStyle);
            document.head.appendChild(style);

        }else if(element == secondPage){

            const removeStyle = document.createElement('style');
            const style = document.createElement('style');
            
            removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer3::before, #hitcontainer4::before, #hitcontainer5::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                } 
            `
            
            style.textContent = `
            #hitcontainer2::before{
                background-color: white;
                box-shadow: 0 0 10px black; 
            }
            `

            document.head.appendChild(removeStyle);
            document.head.appendChild(style);
        }else if(element == thirdPage){

            const removeStyle = document.createElement('style');
            const style = document.createElement('style');
            
            removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer2::before,#hitcontainer4::before, #hitcontainer5::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                } 
            `
            
            style.textContent = `
            #hitcontainer3::before{
                background-color: white;  
                box-shadow: 0 0 10px black;              
            }
            `;     

            document.head.appendChild(removeStyle);
            document.head.appendChild(style);
        }else if(element == fourthPage){

            const removeStyle = document.createElement('style');
            const style = document.createElement('style');
            const style2 = document.createElement('style');
            
            removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer2::before, #hitcontainer3::before, #hitcontainer5::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                } 
            `
            
            style.textContent = `
            #hitcontainer4::before {
                background-color: white;
                box-shadow: 0 0 10px black;
            }
            `;


            document.head.appendChild(removeStyle);
            document.head.appendChild(style);
        }else if(element == fifthPage){

            const removeStyle = document.createElement('style');
            const style = document.createElement('style');
            const style2 = document.createElement('style');
            
            removeStyle.textContent = `
                #hitcontainer1::before, #hitcontainer2::before, #hitcontainer3::before, #hitcontainer4::before, #hitcontainer4::before{
                    background-color: black;
                    transition:scale(1);
                    transition: 300ms; 
                } 
            `
            
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

    if(scrollPercentage < 20){
        udpateClass(firstPage)
    }else if(scrollPercentage < 40 && scrollPercentage > 20){
        udpateClass(secondPage)
    }else if(scrollPercentage < 60 && scrollPercentage > 40){
        udpateClass(thirdPage)
    }else if(scrollPercentage < 80 && scrollPercentage > 60){
        udpateClass(fourthPage)
    }else if(scrollPercentage < 100 && scrollPercentage > 80){
        udpateClass(fifthPage)
    }
  }
  
  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };

}, [])


  return <>

<div id='fixpadding' className="pagecontainer">

  {/* Home page */}
  <div id='homepage' className="page">
    <div className="nav">
      <img id="chand" src="/svg/moon.svg" alt="" />
      {/* <i className="fa-solid fa-moon"></i> */}
      <button style={{display:"none"}}>
        <Link href={'./blogs'}>Blogs</Link>
      </button>
    </div>

    <div className="headProfile">
      <div id='headContainer'>
        <div className="maskContainer">
          <span id='imaryan' >I&apos;m Aryan Karma</span>
        </div>
        <TextAnimation /> {/* rendering component */}
      </div>

      <div id="profileContainer">
        <img src="/img/pfp.jpg" alt="profile picture" />
      </div>
    </div>
    
    {/* <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div> */}
  </div>

  {/* bio page */}
  <div id="biopage" className="page">
    <div id='removeMobile' className="head">Bio<span id="headdotpurple">.</span></div>

    <div className="contentBox">
      <div className="card-content">
        <p className='content'>
        “ <span id='bold'>Keen interest</span> in attention to detail and passion for the smallest details makes my work pixel perfect.”
        </p>
      </div>
    </div>

    {/* <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
    </div> */}
  </div>

  {/* skills page */}
  <div id='skillspage' className="page">
    <div className="head">Skills<span id="headdotlightblue">.</span></div>

    <div className="contentBox">
      <div id="skillscircle">
        <div style={{borderColor:"#212D30"}} className="skillcircle">
          <div className="tooltip">
            <div className="tooltipcorner"></div>
            Aryan has a strong command on react with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px",}}  src="/img/react.png" alt="" /></div>
        <div style={{borderColor:"#172027"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on c++ with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"40px", height:"45px",}} src="/img/c++.png" alt="" /></div>
        <div style={{borderColor:"#222820"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on nodejs with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px", }} src="/img/nodejs.png" alt="" /></div>
        <div style={{borderColor:"#313131"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on expressjs with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px", }} src="/img/expressjs.png" alt="" /></div>
        <div style={{borderColor:"#313131"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on nextjs with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px", }} src="/img/nextjs.png" alt="" /></div>
        <div style={{borderColor:"#252E43"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on htmlcss with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"35px", }} src="/img/htmlcss.jpg" alt="" /></div>
        <div style={{borderColor:"#352B30"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on sass with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"30px", scale:".9"}} src="/img/sass.jpg" alt="" /></div>
        <div style={{borderColor:"#3B2C2B"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on figma with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"28.5px", height:"42.5px", padding:"0 7.5px", scale:".9"}}  src="/img/figma.jpg" alt="" /></div>
        <div style={{borderColor:"#3A3627"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on javascript with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"40px", height:"45px", padding:"0px 5px",  scale:".9"}}  src="/img/javascript.jpg" alt="" /></div>
        <div style={{borderColor:"#21392B"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on mongodb with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px"}}  src="/img/mongodb.png" alt="" /></div>
      </div>
    </div>

    {/* <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div className="circle"></div>
      <div id="hrdotlightblue"  className="circle"></div>
      <div id="hrdotlightblue" className="circle"></div>
    </div> */}
  </div>

  {/* projects page */}
  <div id='projectspage' className="page">

    <div className="head">Projects<span id="headdotpurple">.</span></div>
    
    <div style={{background:"none", boxShadow:'none'}} className="contentBox" id='removeMobile'>
      <Slider {...settings}>
      
      <div className="projectBox projectBox1">
          
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


        <div className="projectBox projectBox2">
          
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


        <div className="projectBox projectBox3">
          
          <div className="laptop">
            <img src="/img/your-wellness.png" alt="" />
          </div>

          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-2%" }}>Your-wellness</h5>
            </div>
            <div className="projectFeatures">
              <ul style={{ paddingLeft: "7%", listStyle: "disc" }}>
                <li>HTML, CSS, JavaScript, jQuery</li>
                <li>Responsive layout</li>
              </ul>
            </div>
            <div className="checkoutbtn">
              <a href="https://aryankarma.github.io/Your-wellness/" target="_blank">
                <button href="">
                  <p> Checkout
                    <img className='arrowimg' style={{scale: "2.1", marginLeft: ".3rem"}} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="https://github.com/aryankarma/Your-wellness" target="_blank">
                <button className='github' href="">
                    <img className='githubimg' style={{height:"15px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>  

      </Slider>
    </div>

    <div style={{background:"none", boxShadow:'none'}} className="contentBox">
      <div style={{scale:"1.05",marginTop: "1.5rem"}} id='projectBoxContainer' className='removeDesktop' >


        <div className="projectBox projectBox1">
          
          <div className="laptop">
            <img src="/img/weather-app.png" alt="" />
          </div>

          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-5%" }}>Weather App</h5>
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
              <a href="https://weather-app-aryankarma.vercel.app/" target="_blank">
                <button href="">
                  <p> Checkout
                    <img className='arrowimg' style={{ scale: "2", marginLeft: ".3rem" }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="https://github.com/aryankarma/weatherapp" target="_blank">
                <button className='github' href="">
                    <img className='githubimg' style={{height:"10px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>


        <div className="projectBox projectBox2">
          
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
                  <p> Checkout
                    <img className='arrowimg' style={{ scale: "2", marginLeft: ".3rem" }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="https://github.com/aryankarma/bookswap" target="_blank">
                <button className='github' href="">
                    <img className='githubimg' style={{height:"10px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>


        <div className="projectBox projectBox3">
          
          <div className="laptop">
            <img src="/img/your-wellness.png" alt="" />
          </div>

          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-5%" }}>Your-wellness</h5>
            </div>
            <div className="projectFeatures">
              <ul style={{ paddingLeft: "10%" }}>
                <li>HTML, CSS, JavaScript, jQuery</li>
                <li>Responsive layout</li>
              </ul>
            </div>
            <div className="checkoutbtn">
              <a href="https://aryankarma.github.io/Your-wellness/" target="_blank">
                <button href="">
                  <p> Checkout
                    <img className='arrowimg' style={{ scale: "2", marginLeft: ".3rem" }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="https://github.com/aryankarma/Your-wellness" target="_blank">
                <button className='github' href="">
                    <img className='githubimg' style={{height:"10px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>  


      </div>
    </div>


    {/* <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
    </div> */}

  </div>



  {/* connect page */}
  <div style={{height:"calc(100vh - 30px)"}} id='connectpage' className="page">

    <div className="head">Connect<span id="headdotyellow">.</span></div>

    <form id='form' method='POST' action="https://formspree.io/f/mleqedkj">
      <input autoComplete='off' type="text" name="name" id="inputname"  placeholder='Name' required/>
      <input autoComplete='off' type="email" name="email" id="inputemail" placeholder='Email' required/>
      <textarea autoComplete='off' type="text" name="message" id="inputtextarea" rows="5" placeholder='Message' required></textarea>
      <button type="submit">SEND <img className='arrowimg' style={{ scale: "1.5", marginLeft: ".3rem" }} src="/svg/sendarrow.svg" alt="" /> </button>
    </form>

  </div>


  <div className="footer">

    <div className="socials">
      <a href='https://www.x.com/karmaaryan' target="_blank">Twitter <img className='arrowimg' src="/svg/Arrow2.svg" alt="" /></a>
      <a href='https://www.github.com/aryankarma' target="_blank">Github <img className='arrowimg' src="/svg/Arrow2.svg" alt="" /></a>
      <a href='https://www.linkedin.com/in/aryankarma' target="_blank">Linkedin <img className='arrowimg' src="/svg/Arrow2.svg" alt="" /></a>
      <a href='https://www.bento.me/aryankarma' target="_blank">Bento<img className='arrowimg' src="/svg/Arrow2.svg" alt="" /></a>
    </div>
    <div className="email">
      <a href="mailto:aryankarma29@gmail.com" target='_blank' >aryankarma29@gmail.com <img className='arrowimg' src="/svg/Arrow2.svg" alt="" /></a>
    </div>
  </div>

</div>



  {/* bottom navigator */}
  <div className="removeDesktop" id="navigator"> 
    {/* <p href='#homepage' id='home' >Home</p>
    <p href='#skillspage' id='skills' >Skills</p> */}
    <a href='#homepage' className='activeSection' id='home' >Home</a>
    <a href='#skillspage' id='skills' >Skills</a>
    <a href='#projectspage' id='projects' >Project</a> 
    <a href='#connectpage' id='connect' >Connect</a> 
    {/* <p id='projects' >Project</p>
    <p id='connect' >Connect</p> */} 
  </div>

  

  {/* Progress Bar */}
  <div id='removeMobile' className="anchors-wrap">
    <ul id='removeMobile' className="anchors">
      <li><a id="hitcontainer1" href="#homepage" ></a></li>
      <li><a id="hitcontainer2" href="#biopage" ></a></li>
      <li><a id="hitcontainer3" href="#skillspage" ></a></li>
      <li><a id="hitcontainer4" href="#projectspage" ></a></li>
      <li><a id="hitcontainer5" href="#connectpage" ></a></li>
    </ul>
  </div>

  </>
  
}

export default App;


/*
  Additions -
  1. Update written content about aryan's skills

*/