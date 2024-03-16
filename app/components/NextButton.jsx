import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@nextui-org/button';
import React from 'react'
import NextLink from "next/link";

export default function NextButton({text, next, link}) {
    return (
        next ? 
        <Button as={NextLink} href={link} color='primary' variant='light' endContent={<ChevronRight />}>
            {text}
        </Button>
        :
        <Button as={NextLink} href={link} color='primary' variant='light' startContent={<ChevronLeft />}>
            {text}
        </Button>
    )
}
