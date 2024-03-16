import { Favorite } from '@mui/icons-material'
import { Button } from '@nextui-org/button'
import React from 'react'

export default function LikeButton() {
    return (
        <div className='flex items-center justify-start gap-2'>
            <Button isIconOnly startContent={<Favorite />} color='danger' variant='flat' className='rounded-full' />
            <div className='text-small text-tertiary-onTertiaryContainer'>
                1.6K
            </div>
        </div>
    )
}
