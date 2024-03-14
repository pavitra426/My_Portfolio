import Figma from '@/app/icons/tools/Figma'
import { ScrollShadow } from '@nextui-org/react'
import React from 'react'

export default function Layout({children}) {
    return (
        <ScrollShadow orientation='vertical' hideScrollBar size={50} offset={10} className='max-h-full w-full scroll-smooth'>
            <div className='flex flex-col w-full h-full p-5 gap-5'>
                <div className='flex items-center justify-start w-full text-3xl gap-3 text-foreground'>
                    <div className='h-[50px] flex items-center justify-center'>
                        <Figma forButton={false} />
                    </div>
                    Figma
                </div>
                {children}
            </div>
        </ScrollShadow>
    )
}
