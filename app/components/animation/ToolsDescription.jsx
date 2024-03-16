'use client';

import { Button, Divider, Link } from '@nextui-org/react';
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type';
import gsap from 'gsap';

export default function ToolsDescription({children, text, buttonText, buttonLink}) {

    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const dividerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (textRef.current && buttonRef.current) {
            const myText = new SplitType(textRef.current);

            var timeline = gsap.timeline({
                smoothChildTiming: true,
            });

            timeline.fromTo('.char', {
                opacity: 0,
            }, {
                opacity: 1,
                stagger: 0.01,
                duration: .01
            });

            timeline.fromTo(buttonRef.current, {
                opacity: 0,
                y: -10
            }, {
                opacity: 1,
                duration: 0.3,
                y: 0,
            });

            timeline.from(dividerRef.current, {
                opacity: 0,
                width: 0,
                duration: 1,
                ease: 'slow'
            });

            timeline.fromTo(contentRef.current, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                duration: 0.5,
                y: 0,
            });

            timeline.play();
        }
    }, [])

    return (
        <div className='flex flex-col w-full h-full gap-5'>
            <div ref={textRef} className='text-foreground'>
                {text}
            </div>
            <div ref={buttonRef}>
                <Button className='shrink-0 w-fit' as={Link} target='_blank' href={buttonLink} color={'secondary'} showAnchorIcon={true} variant='flat'>
                    {buttonText}
                </Button>
            </div>
            <Divider ref={dividerRef} />
            <div ref={contentRef} className='flex w-full h-full'>
                {children}
            </div>
        </div>
    )
}
