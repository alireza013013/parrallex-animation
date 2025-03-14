import { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import "./Landing.scss"

import videoFlower from "../../assets/menuMovie/flowers-intro.mp4"
import imagePerson from "../../assets/person.png";


import leaf from "../../assets/menuImage/leaf.webp"
import wolf from "../../assets/menuImage/wolf.png"
import orangeIcon from "../../assets/menuImage/orange-icon.webp"
import flower from "../../assets/menuImage/flower.png"
import cloud from "../../assets/menuImage/cloud.webp"

const Landing = () => {

    const durationFirstSection = 5
    const scubTime = 2

    const triggerFirstSectio = {
        trigger: "#container-first-section",
        start: "top top",
        end: "bottom top",
        scrub: scubTime,
        toggleActions: "play none reverse none",
    }

    const triggerBetweenFistSecond = {
        trigger: "#second-section-div",
        start: "top top",
        end: "100 top",
        scrub: scubTime,
        toggleActions: "play none reverse none",
    }

    useGSAP(() => {

        gsap.to(["#main"],
            {
                backgroundColor: "#cccccc",
                duration: durationFirstSection,
                scrollTrigger: {
                    ...triggerFirstSectio
                }
            }
        )

        ScrollTrigger.create({
            trigger: "#container-first-section",
            start: "top top",
            endTrigger: "#second-section-div",
            end: "bottom top",
            pin: true,
            pinType: "transform"
        })

        gsap.to(["#container-first-section"], {
            width: window.innerWidth < 768 ? 50 : 80,
            height: window.innerWidth < 768 ? 40 : 60,
            left: window.innerWidth < 768 ? "calc(50% - 28px)" : "calc(50% - 42px)",
            top: window.innerWidth < 768 ? "calc(50% + 26px)" : "calc(50% + 12px)",
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: window.innerWidth < 768 ? 20 : 30,
            duration: durationFirstSection,
            scrollTrigger: {
                ...triggerFirstSectio
            }
        }
        )

        gsap.to(["#main-video"],
            {
                borderRadius: window.innerWidth < 768 ? 20 : 30,
                opacity: 0,
                duration: durationFirstSection,
                scrollTrigger: {
                    ...triggerFirstSectio
                }
            }
        )


        gsap.to(["#container-first-section"], {
            opacity: 0,
            duration: durationFirstSection,
            scrollTrigger: {
                ...triggerBetweenFistSecond
            }
        })


        ScrollTrigger.create({
            trigger: "#second-section-div",
            start: "top top",
            end: "bottom top",
            markers: true,
            pin: true,
        })
        gsap.to(["#second-section-div"], {
            opacity: 1,
            duration: durationFirstSection,
            scrollTrigger: {
                ...triggerBetweenFistSecond
            }
        })



    })




    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            title: "test 1",
            img: wolf,
            active: false,
            color: "blue"
        },
        {
            id: 2,
            title: "test 2",
            img: flower,
            active: false,
            color: "red"
        },
        {
            id: 3,
            title: "test 3",
            img: leaf,
            active: true,
            color: "white"
        },
        {
            id: 4,
            title: "test 4",
            img: orangeIcon,
            active: false,
            color: "orange"
        },
        {
            id: 5,
            title: "test 5",
            img: cloud,
            active: false,
            color: "green"
        },
    ])
    const ampilitudeImage = 0.9
    const amilitudeDiv = 0.9

    const enter = (event, item) => {
        if (!item.active) {
            const { left, top, width, height } = event.target.getBoundingClientRect();

            const mouseX = (event.clientX - (left + width / 2));
            const mouseY = (event.clientY - (top + height / 2));
            const element = document.getElementById(item.id)
            const elementImage = document.getElementById(`item-menu-${item.id}`)
            gsap.to(element, {
                x: mouseX * amilitudeDiv,
                y: mouseY * amilitudeDiv,
                duration: 0.5,
            })
            gsap.to(elementImage, {
                x: mouseX * ampilitudeImage,
                y: mouseY * ampilitudeImage,
                scale: 0.7,
                duration: 0.5,
            })
        }
    }
    const leave = (event, item) => {
        const element = document.getElementById(item.id)
        const elementImage = document.getElementById(`item-menu-${item.id}`)
        gsap.to([element, elementImage], {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
        })
    }


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
                {
                    menuItems.map((item) =>
                        <div
                            key={item.id} className='relative-div'>
                            <div
                                onMouseMove={(event) => enter(event, item)}
                                onMouseLeave={(event) => leave(event, item)}
                                className={`item-list ${item.active ? `center` : ``}`}
                                id={item.id}>
                                <img id={`item-menu-${item.id}`} className='image-item' src={item.img} alt={item.title} />
                            </div>
                        </div>
                    )
                }
                {/* <div
                    onPointerMove={(event) => enter(event, "1")}
                    onPointerLeave={(event) => leave(event, "1")}
                    className='item-list'>
                    <img id='1' className='image-item' src={cloud} alt="Leaf" />
                </div>
                <div
                    onPointerMove={(event) => enter(event, "2")}
                    onPointerLeave={(event) => leave(event, "2")}
                    className='item-list'>
                    <img id='2' className='image-item' src={flower} alt="Leaf" />
                </div>
                <div
                    onPointerMove={(event) => enter(event, "3")}
                    onPointerLeave={(event) => leave(event, "3")}
                    className='item-list center'>
                    <img id='3' className='image-item' src={leaf} alt="Leaf" />
                </div>
                <div
                    onPointerMove={(event) => enter(event, "4")}
                    onPointerLeave={(event) => leave(event, "4")}
                    className='item-list'>
                    <img id='4' className='image-item' src={orangeIcon} alt="Leaf" />
                </div>
                <div
                    onPointerMove={(event) => enter(event, "5")}
                    onPointerLeave={(event) => leave(event, "5")}
                    className='item-list'>
                    <img id='5' className='image-item' src={wolf} alt="Leaf" />
                </div> */}
            </div>

            <div className='third-section'>

            </div>
        </div>
    )
}



export default Landing