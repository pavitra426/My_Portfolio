'use client';

import { Button } from '@nextui-org/react';
import React from 'react'
import NextLink from "next/link";
import { usePathname } from 'next/navigation';

export default function NavButton({icon, iconfilled, text, link}) {

    const location = usePathname()
    const isOnPage = location.split('/').filter(Crumb => Crumb !== '')[0]
    const pagelink = isOnPage === undefined ? '/' : `/${isOnPage}`;

    return (
        <div className='flex flex-col items-center gap-1'>
            <Button isIconOnly as={NextLink} href={link} color={pagelink === `${link}` ? "primary" : "secondary"} variant={pagelink === `${link}` ? "solid" : "light"}>
                {
                    pagelink === `${link}` ? iconfilled : icon
                }
            </Button>
            {pagelink === `${link}` ? 
            <div className='text-primary text-xs uppercase'>
                {text}
            </div> : <div className='text-secondary-onSecondaryContainer text-xs uppercase'>
                {text}
            </div>}
        </div>
    )
}
