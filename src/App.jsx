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

  const firstSection = {
    trigger: "#container-first-section",
    start: "top top",
    endTrigger: "#second-section-div",
    end: "+=30% top",
    scrub: scubTime,
    toggleActions: "play none none none",
    // markers: true,

  }

  useGSAP(() => {
    gsap.to(["#main"],
      {
        backgroundColor: "#cccccc",
        duration: durationFirstSection,
        scrollTrigger: {
          ...firstSection,
        }
      }
    )
    gsap.to(["#container-first-section"],
      {
        scaleX: 0.07,
        scaleY: 0.1,
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 500,
        duration: durationFirstSection,
        scrollTrigger: {
          ...firstSection,
          pin: true,
        }
      }
    )
    gsap.to(["#main-video"],
      {
        borderRadius: 500,
        opacity: 0,
        duration: durationFirstSection,
        scrollTrigger: {
          ...firstSection,
        }
      }
    )

    gsap.to(["#image-person"],
      {
        width: 160,
        duration: durationFirstSection,
        scrollTrigger: {
          ...firstSection,
        }
      }
    )

    // gsap.to(["#second-section-div"],
    //   {
    //     duration: durationFirstSection,
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: "#second-section-div",
    //       start: "top center",
    //       end: "+=200px center",
    //       scrub: scubTime,
    //       toggleActions: "play none none none",
    //       markers: true,
    //       // pin: true
    //     }
    //   }
    // )
    // gsap.to(["#item-list"],
    //   {
    //     scaleX: 0.07,
    //     scaleY: 0.1,
    //     backgroundColor: "white",
    //     borderStyle: "solid",
    //     borderWidth: 4,
    //     borderColor: "black",
    //     borderRadius: 500,
    //     duration: durationFirstSection,
    //     opacity: 1,
    //     scrollTrigger: {
    //       ...firstSection,
    //     }
    //   }
    // )
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
        {/* <div id='item-list' className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div id='item-list' className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div id='item-list' className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div> */}
      </div>

      <div className='image-person-div'>
        <img id='image-person' className='image-person' src={imagePerson} alt="Person" />
      </div>


      {/* <div id='second-section-div' className='second-section'>
        <div id='item-list' className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div id='item-list' className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
        <div id='item-list' className='item-list'>
          <img className='image-item' src={leaf} alt="Leaf" />
        </div>
      </div> */}



      <div className='third-section'>

      </div>
    </div>
  )
}

export default App
