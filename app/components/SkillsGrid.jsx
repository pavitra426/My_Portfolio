'use client';

import React, { useEffect } from 'react'


import ProfileImage from './ProfileImage';
import Figma from '../icons/tools/Figma';
import AdobeXD from '../icons/tools/AdobeXD';

export default function SkillsGrid() {

    useEffect(() => {
        const offset = 69;
        const borderWidth = 3;
        const angles = []; //in  rad
        for (let i = 0; i <= 2; i += 0.25) {
        angles.push(Math.PI * i);
        }
        let nearBy = [];

        function clearNearBy() {
            nearBy.splice(0).forEach((e) => (e.style.borderImage = null));
        }

        const body = document.querySelector(".gridDisplay");
        
        body.addEventListener("mousemove", (e) => {
            let x = e.clientX; //x position of cursor.
            let y = e.clientY; //y position of cursor
          
            clearNearBy();
          
            nearBy = angles.reduce((acc, rad, index, arr) => {
              const offsets = [offset * 0.35, offset * 1.105];
          
              const elements = offsets.reduce((elementAccumulator, o, i, offsetArray) => {
                //to skip the intermediate first points calculation
                // if (index % 2 === 0 && i === 0) return elementAccumulator;
                const cx = Math.floor(x + Math.cos(rad) * o);
                const cy = Math.floor(y + Math.sin(rad) * o);
                const element = document.elementFromPoint(cx, cy);
          
                if (
                  element &&
                  element.classList.contains("gridDisplay") &&
                  elementAccumulator.findIndex((ae) => ae.id === element.id) < 0
                ) {
                  const brect = element.getBoundingClientRect();
                  const bx = x - brect.left; //x position within the element.
                  const by = y - brect.top; //y position within the element.
                  const gr = Math.floor(offset * 1.7);
                  if (!element.style.borderImage)
                    element.style.borderImage = `radial-gradient(${gr}px ${gr}px at ${bx}px ${by}px ,rgba(255,255,255,0.3),rgba(255,255,255,0.1),transparent ) 9 / ${borderWidth}px / 0px stretch `;
                  console.log("element at", offsets, (rad * 180) / Math.PI, element);
          
                  return [...elementAccumulator, element];
                }
                return elementAccumulator;
              }, []);
          
              return acc.concat(elements);
            }, []);
        });

        body.onmouseleave = (e) => {
            clearNearBy();
        };
    }, [])

    return (
        <div className='grid grid-cols-7 bg-background/50 rounded-3xl p-3 items-center justify-items-center'>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='w-[210px] p-2 h-[210px] col-span-3 row-span-3 flex items-center justify-center'><ProfileImage /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><Figma forButton={true} /></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
            <div className='gridDisplay w-[70px] p-2 h-[70px] flex items-center justify-center'><AdobeXD forButton={true}/></div>
        </div>
    )
}
