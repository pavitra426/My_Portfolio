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
                Figma is a browser-based design tool that allows users to collaborate on user interface and user experience (UI/UX) design. It&apos;s considered the industry standard for creating websites, user interfaces, and graphic designs.
            </div>
            <ExternalLinkButton color={'secondary'} text={'Visit Figma'} link={'https://www.figma.com/'} />
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
                <div></div>
                <NextButton next={true} text={'Adobe XD'} />
            </div>
        </div>
    )
}
