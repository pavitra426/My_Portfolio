'use client';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@nextui-org/react';
import React from 'react'

export default function NextButton({text, next}) {
    return (
        next ? 
        <Button color='primary' variant='light' endContent={<ChevronRight />}>
            {text}
        </Button>
        :
        <Button color='primary' variant='light' startContent={<ChevronLeft />}>
            {text}
        </Button>
    )
}
