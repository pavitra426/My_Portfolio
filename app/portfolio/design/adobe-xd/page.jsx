import ExternalLinkButton from '@/app/components/ExternalLinkButton'
import NextButton from '@/app/components/NextButton'
import ProjectCard from '@/app/components/ProjectCard'
import { Star } from '@mui/icons-material'
import { Divider } from '@nextui-org/react'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col w-full h-full items-start justify-start gap-5'>
            <div className='text-surfaceVariant-foreground'>
                Adobe XD is a vector-based design tool for creating user interfaces (UI) for mobile and web applications. It&apos;s also known as Adobe Experience Design.
            </div>
            <ExternalLinkButton color={'secondary'} text={'Visit Adobe XD'} link={'https://adobexdplatform.com/'} />
            <Divider />
            <div className='flex items-center justify-start gap-3 uppercase text-foreground text-medium tracking-widest py-3'>
                <Star />
                <div>
                    Top Projects
                </div>
            </div>
            <ProjectCard />
            <ProjectCard />
            <div className='w-full flex items-center justify-between'>
                <NextButton next={false} text={'Figma'} />
                <div></div>
            </div>
        </div>
    )
}
