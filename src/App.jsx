import { useEffect, useState } from 'react'
import "./App.scss"

import videoFlower from "./assets/flowers-intro.mp4"
import imagePerson from "./assets/person.png";
import leaf from "./assets/leaf.webp"

import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {


  const durationFirstSection = 5
  const scubTime = 2

  // const firstSection = {

  //   // trigger: "#container-first-section",
  //   // start: "top top",
  //   // endTrigger: "#second-section-div",
  //   // end: "+=30% top",
  //   // scrub: scubTime,
  //   // toggleActions: "play none none none",
  //   // markers: true,
  //   trigger: "#container-first-section",
  //   start: "-=10 top",
  //   endTrigger: "#second-section-div",

  //   // endTrigger: "#item-list",
  //   end: "bottom top",
  //   scrub: scubTime,
  //   toggleActions: "play none none none",

  // }

  useGSAP(() => {
    // gsap.to(["#main"],
    //   {
    //     backgroundColor: "#cccccc",
    //     duration: durationFirstSection,
    //     scrollTrigger: {
    //       ...firstSection,
    //     }
    //   }
    // )

    // gsap.to(["#container-first-section"],
    //   {
    //     width: 80,
    //     height: 61,
    //     left: "calc(50% - 40px)",
    //     top: "calc(50% - 32px)",
    //     backgroundColor: "white",
    //     borderStyle: "solid",
    //     borderWidth: 2,
    //     borderColor: "black",
    //     borderRadius: 20,
    //     duration: durationFirstSection,
    //     scrollTrigger: {
    //       trigger: "#container-first-section",
    //       start: "top top",
    //       endTrigger: "#second-section-div",
    //       end: "+=30% top",
    //       scrub: scubTime,
    //       toggleActions: "play none none none",
    //       markers: true,
    //     }
    //   }
    // )
    // gsap.to(["#container-first-section"],
    //   {
    //     // scaleX: 0.1,
    //     // scaleY: 0.1,
    //     // width: 80,
    //     // height: 60,
    //     // left: "50%",
    //     // top: "50%",
    //     // backgroundColor: "white",
    //     // borderStyle: "solid",
    //     // borderWidth: 2,
    //     // borderColor: "black",
    //     // borderRadius: 500,
    //     duration: durationFirstSection,
    //     scrollTrigger: {
    //       ...firstSection,
    //       pin: true,
    //       pinSpacing: false,
    //       // markers: true
    //     }
    //   }
    // )

    // gsap.to(["#container-first-section"],
    //   {
    //     // opacity: 0,
    //     // backgroundColor: "red",
    //     duration: durationFirstSection,
    //     scrollTrigger: {
    //       ...firstSection,
    //       trigger: "#second-section-div",
    //       start: "top top",
    //       end: "100 top",
    //       scrub: scubTime,
    //       toggleActions: "play none none none",
    //       markers: true,
    //       // pin: true,
    //       // pinSpacing: false,
    //     }
    //   }
    // )

    // gsap.to(["#main-video"],
    //   {
    //     borderRadius: 500,
    //     opacity: 0,
    //     duration: durationFirstSection,
    //     scrollTrigger: {
    //       // ...firstSection,
    //       trigger: "#container-first-section",
    //       start: "top top",
    //       endTrigger: "#second-section-div",
    //       end: "+=30% top",
    //       scrub: scubTime,
    //       toggleActions: "play none none none",
    //     }
    //   }
    // )

    // gsap.to(["#image-person"],
    //   {
    //     width: 160,
    //     duration: durationFirstSection,
    //     scrollTrigger: {
    //       ...firstSection,
    //     }
    //   }
    // )

    // gsap.to(["#second-section-div"],
    //   {
    //     duration: durationFirstSection,
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: "#second-section-div",
    //       start: "top top",
    //       end: "center top",
    //       scrub: scubTime,
    //       toggleActions: "play none none none",
    //       // markers: true,
    //       pin: true,
    //       pinSpacing: false,
    //     }
    //   }
    // )


    ScrollTrigger.create({
      trigger: "#container-first-section",
      start: "top top",
      endTrigger: "#second-section-div",
      end: "bottom top",
      // markers: true,
      pin: true,
      pinType: "transform"
    })

    gsap.to(["#container-first-section"], {
      width: 80,
      height: 61,
      left: "calc(50% - 40px)",
      top: "calc(50% + 12px)",
      backgroundColor: "white",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 500,
      duration: durationFirstSection,
      scrollTrigger: {
        trigger: "#container-first-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none reverse none",
        // markers: true,
        // pin: true
      }
    }
    )

    gsap.to(["#main-video"],
      {
        borderRadius: 500,
        opacity: 0,
        duration: durationFirstSection,
        scrollTrigger: {
          trigger: "#container-first-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none reverse none",
        }
      }
    )


    gsap.to(["#container-first-section"], {
      opacity: 0,
      duration: durationFirstSection,
      scrollTrigger: {
        trigger: "#second-section-div",
        start: "top top",
        end: "100 top",
        scrub: true,
        toggleActions: "play none reverse none",
        // markers: true,
        // pin: true
      }
    })


    ScrollTrigger.create({
      trigger: "#second-section-div",
      start: "top top",
      end: "bottom top",
      markers: true,
      pin: true,
      // pinType: "transform"
    })
    gsap.to(["#second-section-div"], {
      opacity: 1,
      duration: durationFirstSection,
      scrollTrigger: {
        trigger: "#second-section-div",
        start: "top top",
        end: "100 top",
        scrub: true,
        toggleActions: "play none reverse none",
        // markers: true,
        // pin: true
      }
    })



  })


  return (
    <div className='main-app-div' id='main'>
      <div className='first-section'>
        <div id='container-first-section' className='container-first-section'>
          <video id='main-video' autoPlay loop muted >
            <source src={videoFlower} type="video/mp4"></source>
          </video>
          <div className='left-top-title'>
            <span className='title'>NEW</span>
            <span className='title freedom'>Freedom</span>
          </div>
          <div className='left-bottom-description'>
            <span className='description'>
              Ideate and iterate as fast as you think. Explore endless ideas, make something unique and spectacular. Powered by Luma Photon, the most creative AI model.
            </span>
          </div>

          <div className='right-bottom-title'>
            <span className='title'>of</span>
            <span className='title'>imagination</span>
          </div>
        </div>

      </div>
      {/* 
      <div className='image-person-div'>
        <img id='image-person' className='image-person' src={imagePerson} alt="Person" />
      </div> */}


      <div id='second-section-div' className='second-section'>
        <div className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div className='item-list center'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
      </div>

      <div className='third-section'>

      </div>
    </div>
  )
}

export default App
