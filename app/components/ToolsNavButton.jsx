'use client';

import { Button } from '@nextui-org/react';
import React from 'react'
import NextLink from "next/link";
import { usePathname } from 'next/navigation';

export default function ToolsNavButton({icon, text, link}) {
    
    const location = usePathname()
    const isOnPage = location.split('/').filter(Crumb => Crumb !== '')[1]
    const isOnSubPage = location.split('/').filter(Crumb => Crumb !== '')[2]
    const pagelink = isOnPage === undefined ? '/' : `/portfolio/${isOnPage}/${isOnSubPage}`;

    return (
        <Button className='flex items-center justify-start w-full' color={pagelink === `${link}` ? "secondary" : "secondary"} as={NextLink} href={link} variant={pagelink === `${link}` ? "flat" : "light"} startContent={icon}>
            {text}
        </Button>
    )
}
