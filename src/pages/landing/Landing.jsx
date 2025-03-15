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
        scrub: true,
        toggleActions: "play none reverse none",
    }


    const triggerSecondItemOpen = {
        trigger: "#relative-div-active",
        start: "top top",
        end: "top top",
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
        })

        gsap.to(["#container-first-section"], {
            width: window.innerWidth < 768 ? 50 : 80,
            height: window.innerWidth < 768 ? 40 : 60,
            left: window.innerWidth < 768 ? "calc(50% - 28px)" : "calc(50% - 40px)",
            top: window.innerWidth < 768 ? "calc(50% + 26px)" : "calc(50% - 30px)",
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: window.innerWidth < 768 ? 20 : 30,
            duration: durationFirstSection,
            scrollTrigger: {
                ...triggerFirstSectio,
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
            duration: 0.5,
            scrollTrigger: {
                ...triggerBetweenFistSecond,
                onEnterBack: () => {
                    const element = document.getElementById("container-first-section")
                    element.style.opacity = "0"
                    element.style.width = window.innerWidth < 768 ? "50px" : "80px";
                    element.style.height = window.innerWidth < 768 ? "40px" : "60px";
                    element.style.left = window.innerWidth < 768 ? "calc(50% - 28px)" : "calc(50% - 40px)";
                    element.style.top = window.innerWidth < 768 ? "calc(50% + 26px)" : "calc(50% - 30px)";
                },
            }
        })


        ScrollTrigger.create({
            trigger: "#second-section-div",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinType: "fixed",
            onLeave: () => {
                const element = document.getElementById("container-first-section")
                element.style.opacity = "0"
                element.style.width = window.innerWidth < 768 ? "50px" : "80px";
                element.style.height = window.innerWidth < 768 ? "40px" : "60px";
                element.style.left = window.innerWidth < 768 ? "calc(50% - 28px)" : "calc(50% - 40px)";
                element.style.top = window.innerWidth < 768 ? "calc(50% + 26px)" : "calc(50% - 30px)";
            },
        })
        gsap.to(["#second-section-div"], {
            opacity: 1,
            duration: 0.1,
            scrollTrigger: {
                ...triggerBetweenFistSecond
            }
        })

        ScrollTrigger.create({
            trigger: "#relative-div-active",
            start: "top top",
            end: "bottom top",
            onEnter: () => {
                console.log("enter");
            },
            onLeave: () => {
                console.log("leave");
            }
        })

        const itemActiveId = menuItems.filter((item) => item.active)[0].id
        gsap.to(["#relative-div-active"], {
            width: 290,
            duration: 0.5,
            scrollTrigger: {
                ...triggerSecondItemOpen,
                id: `triiger-relative-div${itemActiveId}`
            }
        })

        gsap.to(["#image-item-active"], {
            translateX: -145,
            translateY: -30,
            position: "absolute",
            scale: 1.3,
            duration: 0.5,
            scrollTrigger: {
                ...triggerSecondItemOpen,
                id: `triiger-image${itemActiveId}`
            }
        })

        gsap.to(["#item-title-active"], {
            scale: 1,
            duration: 0.5,
            delay: 1,
            scrollTrigger: {
                ...triggerSecondItemOpen,
                id: `triiger-title${itemActiveId}`
            }
        })



    })




    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            title: "Lovely visualize for interior design1",
            img: wolf,
            active: false,
            color: "blue"
        },
        {
            id: 2,
            title: "Lovely visualize for interior design1",
            img: flower,
            active: false,
            color: "red"
        },
        {
            id: 3,
            title: "Lovely visualize for interior design1",
            img: leaf,
            active: true,
            color: "white"
        },
        {
            id: 4,
            title: "Lovely visualize for interior design1",
            img: orangeIcon,
            active: false,
            color: "orange"
        },
        {
            id: 5,
            title: "Lovely visualize for interior design1",
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
        if (!item.active) {
            const element = document.getElementById(item.id)
            const elementImage = document.getElementById(`item-menu-${item.id}`)
            gsap.to([element, elementImage], {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
            })
        }
    }


    const changeActive = (item) => {
        if (!item.active) {
            gsap.to(["#item-title-active"], {
                scale: 0,
                duration: 0.5,
            })
            gsap.to(["#relative-div-active"], {
                width: 80,
                duration: 0.5,
            })

            gsap.to(["#image-item-active"], {
                translateX: 0,
                translateY: 0,
                position: "absolute",
                scale: 1,
                duration: 0.5,
            })

            const element = document.getElementById(item.id)
            const elementImage = document.getElementById(`item-menu-${item.id}`)
            gsap.to([element, elementImage], {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
            })
            const itemActiveId = menuItems.filter((item) => item.active)[0].id
            ScrollTrigger.getById(`triiger-relative-div${itemActiveId}`).disable()
            ScrollTrigger.getById(`triiger-image${itemActiveId}`).disable()
            ScrollTrigger.getById(`triiger-title${itemActiveId}`).disable()
            setMenuItems((prevItems) =>
                prevItems.map((menuItem) => ({
                    ...menuItem,
                    active: menuItem.id === item.id,
                }))
            );

            setTimeout(() => {
                gsap.to(["#relative-div-active"], {
                    width: 290,
                    translateX: 0,
                    translateY: 0,
                    duration: 0.5,
                })

                gsap.to(["#image-item-active"], {
                    translateX: -145,
                    translateY: -30,
                    position: "absolute",
                    scale: 1.3,
                    duration: 0.5,
                })

                gsap.to(["#item-title-active"], {
                    scale: 1,
                    duration: 0.5,
                    delay: 1,
                })


                gsap.to(["#relative-div-active"], {
                    width: 290,
                    duration: 0.5,
                    scrollTrigger: {
                        ...triggerSecondItemOpen,
                        id: `triiger-relative-div${item.id}`
                    }
                })

                gsap.to(["#image-item-active"], {
                    translateX: -145,
                    translateY: -30,
                    position: "absolute",
                    scale: 1.3,
                    duration: 0.5,
                    scrollTrigger: {
                        ...triggerSecondItemOpen,
                        id: `triiger-image${item.id}`
                    }
                })

                gsap.to(["#item-title-active"], {
                    scale: 1,
                    duration: 0.5,
                    delay: 1,
                    scrollTrigger: {
                        ...triggerSecondItemOpen,
                        id: `triiger-title${item.id}`
                    }
                })
            }, 100);
        }
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
                            key={item.id} className='relative-div'
                            id={item.active ? "relative-div-active" : ""}
                            onClick={() => changeActive(item)}
                        >
                            <div
                                onMouseMove={(event) => enter(event, item)}
                                onMouseLeave={(event) => leave(event, item)}
                                className={`item-list ${item.active ? `center` : ``}`}
                                id={item.active ? "item-active" : item.id}
                            >
                                <img id={item.active ? `image-item-active` : `item-menu-${item.id}`} className='image-item' src={item.img} alt={item.title} />
                                {
                                    item.active && <span id='item-title-active' className='item-title'>{item.title}</span>
                                }
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='third-section'>

            </div>
        </div>
    )
}



export default Landing