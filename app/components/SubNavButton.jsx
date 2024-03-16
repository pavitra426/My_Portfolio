'use client';

import { Button } from '@nextui-org/button';
import React from 'react'
import NextLink from "next/link";
import { usePathname } from 'next/navigation';

export default function SubNavButton({icon, text, link}) {

    const location = usePathname()
    const isOnPage = location.split('/').filter(Crumb => Crumb !== '')[1]
    const pagelink = isOnPage === undefined ? '/' : `/portfolio/${isOnPage}`;

    return (
        <Button className='flex items-center justify-start w-full' color={pagelink === `${link}` ? "primary" : "secondary"} as={NextLink} href={link} variant={pagelink === `${link}` ? "flat" : "light"} startContent={icon}>
            {text}
        </Button>
    )
}
