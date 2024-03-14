'use client';

import { Button, Link } from '@nextui-org/react';
import React from 'react'

export default function ExternalLinkButton({text, link, color}) {
    return (
        <Button className='shrink-0 w-fit' as={Link} target='_blank' href={link} color={color} showAnchorIcon={true} variant='flat'>
            {text}
        </Button>
    )
}
