'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

export default function ToolsBar({children}) {

    const toolsBar = useRef(null);

    useEffect(() => {
        if (toolsBar.current) {
            gsap.fromTo(toolsBar.current, {
                opacity: 0,
                x: 250,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'expo.out'
            })
        }
    }, [])

    return (
        <div ref={toolsBar} className='flex flex-col w-fit h-full bg-tertiary-tertiaryContainer/50 border-t-1 border-b-1 border-l-1 border-tertiary/30 rounded-tl-3xl rounded-bl-3xl min-w-[250px]'>
            {children}
        </div>
    )
}
