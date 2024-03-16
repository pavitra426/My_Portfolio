import Image from 'next/image';
import React from 'react'

export default function ProfileImage() {
    return ( 
        <Image 
            unoptimized
            src='/images/avatar.JPG'
            width={150}
            height={150}
            alt='Profile Image'
            className='rounded-full'
        />
    )
}
