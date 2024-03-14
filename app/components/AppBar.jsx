'use client';

import { ArrowBack } from '@mui/icons-material';
import { Button } from '@nextui-org/react';
import React, { useEffect, useRef } from 'react'
import NextLink from "next/link";
import gsap from 'gsap';

export default function AppBar({title}) {

    const backButtonRef = useRef(null);
    const appbarTitleRef = useRef(null);

    useEffect(() => {
        if (backButtonRef.current && appbarTitleRef.current) {
            var timeline = gsap.timeline({
                smoothChildTiming: true
            });
            timeline.fromTo(backButtonRef.current, {
                rotation: 0,
                opacity: 0,
                x: -300,
            }, {
                opacity: 1,
                rotation: 360,
                duration: 0.5,
                x: 0,
                ease: 'circ',
            });
            timeline.fromTo(appbarTitleRef.current, {
                opacity: 0,
                x: 100,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'back.out'
            });

            timeline.play();
        }
    }, [])

    return (
        <div className='flex w-full items-center justify-start p-2 gap-5'>
            <Button as={NextLink} ref={backButtonRef} href='/portfolio' isIconOnly startContent={<ArrowBack />} variant='flat' color='secondary' />
            <div ref={appbarTitleRef} className='uppercase text-foreground text-large tracking-widest'>
                {title}
            </div>
        </div>
    )
}
