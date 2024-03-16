'use client';

import { Image } from '@nextui-org/image';
import React, { useEffect } from 'react'
import NextImage from "next/image";

export default function SkillsRound() {

    useEffect(() => {
        var radius = 300;
        var OrbitItemUl = document.getElementById('orbit-item-ul');
        var OrbitItemLi = document.querySelectorAll('.orbit-item-li');
        var width = OrbitItemUl.style.width, height = OrbitItemUl.style.height;
        var angle = 0, step = (2 * Math.PI) / OrbitItemLi.length;

        OrbitItemLi.forEach(item => {
            var x = Math.round(width / 2 + radius * Math.cos(angle) - item.style.width / 2);
            var y = Math.round(height / 2 + radius * Math.sin(angle) - item.style.height / 2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            angle += step;
        })
    }, [])

    return (
        <ul id='orbit-item-ul' className='orbit-item-ul'>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/firebase.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Firebase'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Firebase
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image
                        as={NextImage}
                        src='/adobe-photoshop.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Photoshop'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Photoshop
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/adobe-xd.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Adobe XD'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Adobe XD
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/blender.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Blender'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Blender
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/nodejs.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Node JS'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Node JS
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/figma.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Figma'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Figma
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/flutter.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Flutter'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Flutter
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/next-js.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Next JS'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Next JS
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/react.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='React JS'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        React JS
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/python.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Python'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Python
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/java.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Java'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Java
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/javascript.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Javascript'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Javascript
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/android.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Android'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Android
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/html.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='HTML'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        HTML
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/css.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='CSS'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        CSS
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/unity.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Unity 3D'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Unity 3D
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/django.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Django'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Django
                    </div>
                </div>
            </li>
            <li className='orbit-item-li rounded-full bg-tertiary-tertiaryContainer'>
                <div>
                    <Image 
                        as={NextImage}
                        src='/dart.svg'
                        height={50}
                        width={50}
                        removeWrapper
                        alt='Dart'
                        className='rounded-none'
                    />
                    <div className="tooltip p-0 text-xs">
                        Dart
                    </div>
                </div>
            </li>
        </ul>
    )
}
