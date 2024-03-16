import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import React from 'react'

export default function ExternalLinkButton({text, link, color}) {
    return (
        <Button className='shrink-0 w-fit' as={Link} target='_blank' href={link} color={color} showAnchorIcon={true} variant='flat'>
            {text}
        </Button>
    )
}
