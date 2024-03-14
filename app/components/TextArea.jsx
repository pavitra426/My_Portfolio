'use client';

import React, { useEffect } from 'react'
import SplitType from 'split-type';
import gsap from 'gsap';

export default function TextArea() {

    useEffect(() => {
        const myText = new SplitType('.textflow');
        gsap.fromTo('.char', {
            opacity: 0,
        }, {
            opacity: 1,
            stagger: 0.005,
            duration: .1
        })
    }, []);

    return (
        <>
            <div className='textflow text-3xl text-foreground'>
                Welcome to Pavitra&apos;s Portfolio!
            </div>
            <div className='textflow text-foreground font-extralight'>
                Greetings! I&apos;m Pavitra Patel, a programmer fueled by curiosity and a passion for problem-solving. I&apos;ve immersed myself in the world of coding, diligently mastering languages like Python, Java, Javascript, Dart, HTML, CSS, C#, C++, C, PHP, and many more. My journey is a testament to my relentless pursuit of knowledge and my ability to adapt to new challenges. Outside of coding, I find joy in [Your Hobbies or Interests], which often inspire fresh ideas and perspectives in my programming endeavors. I&apos;m eager to continue expanding my skills and making meaningful contributions to the ever-evolving tech landscape.
            </div>
            <div className='textflow text-foreground font-extralight'>
                As a passionate programmer, I specialize in Fullstack, Android, UI/UX, Game development and various other like 3D Modeling, Video Animation, Image Processing, etc. With a dedication to clean code and innovative solutions, I strive to turn ideas into reality. Explore my projects, delve into my skills, and get to know more about my journey in the world of programming. Let&apos;s connect and explore the possibilities together!
            </div>
        </>
    )
}
