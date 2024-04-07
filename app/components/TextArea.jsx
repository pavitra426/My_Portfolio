'use client';

import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type';
import gsap from 'gsap';
import { Divider } from '@nextui-org/divider';

export default function TextArea() {

    const dividerRef = useRef(null);

    useEffect(() => {
        const myText = new SplitType('.textflow');
        
        var timeline = gsap.timeline({
            smoothChildTiming: true,
        });

        timeline.fromTo('.char', {
            opacity: 0,
        }, {
            opacity: 1,
            stagger: 0.005,
            duration: .1
        })

        timeline.from(dividerRef.current, {
            opacity: 0,
            width: 0,
            duration: 1,
            ease: 'slow'
        });
    }, []);

    return (
        <>
            <div className='textflow text-foreground'>
                Greetings! I&apos;m Pavitra Patel, a programmer fueled by curiosity and a passion for problem-solving. I&apos;ve immersed myself in the world of coding, diligently mastering languages like Python, Java, Javascript, Dart, HTML, CSS, C#, C++, C, PHP, and many more. My journey is a testament to my relentless pursuit of knowledge and my ability to adapt to new challenges. Outside of coding, I find joy in [Your Hobbies or Interests], which often inspire fresh ideas and perspectives in my programming endeavors. I&apos;m eager to continue expanding my skills and making meaningful contributions to the ever-evolving tech landscape.
            </div>
            <div className='textflow text-foreground'>
                As a passionate programmer, I specialize in Fullstack, Android, UI/UX, Game development and various other like 3D Modeling, Video Animation, Image Processing, etc. With a dedication to clean code and innovative solutions, I strive to turn ideas into reality. Explore my projects, delve into my skills, and get to know more about my journey in the world of programming. Let&apos;s connect and explore the possibilities together!
            </div>
            <Divider ref={dividerRef} />
        </>
    )
}
