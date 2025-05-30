import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'

function App() {
  let [showContent , setShowContent] = useState(false);
  useGSAP(()=>{
    const timeline = gsap.timeline();

    timeline.to(".mask-Group",{
      rotate: 10,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
      duration: 2
    })
    .to(".mask-Group",{
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if(this.progress() >= 0.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      duration: 2,
      ease: "Expo.easeInOut",
      rotate: 0,
      delay: "-1"
    })
    gsap.to(".sky",{
      scale:1.1,
      duration: 2,
      ease: "Expo.easeInOut",
      rotate: 0,
      delay: "-.8"
    })
    gsap.to(".bg",{
      scale:1.1,
      duration: 2,
      ease: "Expo.easeInOut",
      rotate: 0,
      delay: "-.8"
    })
    gsap.to(".boy",{
      scale: 0.7,
      x: "-50%",
      bottom: "-38%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
      left: "50%",
    })
    gsap.to(".text",{
      scale:1,
      duration: 2,
      ease: "Expo.easeInOut",
      rotate: 0,
      delay: "-.8"
    })
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove" , function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 80;
      const yMove = (e.clientY / window.innerWidth - 0.5) * 80;
      gsap.to(".imagesDiv .text",{
        x: `${xMove*0.4}%`
      })
      gsap.to(".sky",{
        x: `${xMove*0.1}%`,

      })
      gsap.to(".bg",{
        x: xMove
      })
    });
  },[showContent]);

  return (
    <>
      <div className="svg  fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox='0 0 800 500'preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='viMask'>
                <rect height="100%" width="100%" fill='black' />
                <g className='mask-Group'>
                  <text
                    x = "50%"
                    y = "50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="250"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
            </mask>
          </defs>
          <image
              href='./bg.webp'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid slice'
              mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main rotate-[-10deg] w-full">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="Navbar absolute top-0 left-0 z-[10] w-full px-10 py-10 ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-13 h-1.5 bg-white"></div>
                  <div className="line w-8 h-1.5 bg-white"></div>
                  <div className="line w-4 h-1.5 bg-white"></div>
                </div>
                <h2 className="text-4xl -mt-2 leading-none text-white">Rockstar</h2>
              </div>
            </div>
            <div className="imagesDiv relative w-full h-screen ">
              <img className='sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-screen object-cover object-[center_45%]' src="./sky.png" alt="" />
              <img className='bg scale-[1.8] rotate-[-5deg] absolute top-0 left-0 w-full h-screen object-cover object-[center_1%]' src="./bg.png" alt="" />
              <div className="text text-white flex flex-col gap-3 absolute top-15 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
              <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
              <h1 className="text-[12rem] leading-none ml-20">theft</h1>
              <h1 className="text-[12rem] leading-none -ml-30">auto</h1>
            </div>
              <img className='boy absolute character -bottom-[150%] left-0 -translate-x-1/2  scale-[2] rotate-[-10deg]' src="./Boy.png" alt="" />
            </div>
            <div className="btmbar text-white w-full py-15 px-10 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-5 items-center">
                <i className="text-2xl ri-arrow-down-line"></i>
                <h2 className="font-[sans-serif] ">Scroll Down</h2>
              </div>
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[4vw]" src="./ps5.png" alt="" />
            </div>
          </div>
          <div className="SecondPage overflow-hidden w-full h-screen px-10 flex items-center justify-center">
            <div className="container text-white w-full flex h-[80%] mt-[5%] overflow-hidden">
              <div className="limg relative w-1/2 h-full">
              <img
               className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
               src="./imag.png" alt="" />
              </div>
              <div className="rimg w-[40%] py-10">
                <h1 className='text-8xl'>STILL DRIVING,</h1>
                <h1 className='text-8xl'>NEVER HIDING</h1>
                <p className='mt-15 font-[sans-serif] font-bold text-xl'>Welcome to the streets of Vice City. <br/> Fast rides, high stakes, and no rules. <br/> This ain't a game — it's a way of life.</p>
                <p className='mt-5 font-[sans-serif] font-bold text-xl'>Every corner holds danger, every mile a new hustle. <br/> Gear up, lock in, and claim your empire.</p>
                <button className='bg-yellow-500 px-20 py-5 mt-10 text-black  text-4xl'>Get Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App