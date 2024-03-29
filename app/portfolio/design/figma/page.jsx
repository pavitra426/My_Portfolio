import NextButton from '@/app/components/NextButton'
import ProjectCard from '@/app/components/ProjectCard'
import ToolsDescription from '@/app/components/animation/ToolsDescription'
import Figma from '@/app/icons/tools/Figma'
import { Star } from '@mui/icons-material'
import { ScrollShadow } from '@nextui-org/react'
import React from 'react'

export default async function page() {

    const data = await fetch('https://api.sampleapis.com/coffee/hot')

    return (
        <ScrollShadow orientation='vertical' hideScrollBar size={50} offset={10} className='max-h-full w-full scroll-smooth'>
            <div className='flex flex-col w-full h-full p-5 gap-5'>
                <div className='flex items-center justify-start w-full text-3xl gap-3 text-foreground'>
                    <div className='h-[50px] flex items-center justify-center'>
                        <Figma forButton={false} />
                    </div>
                    Figma
                </div>
                <ToolsDescription buttonLink={'https://www.figma.com/'} buttonText={'Visit Figma'} text={"Figma is a browser-based design tool that allows users to collaborate on user interface and user experience (UI/UX) design. It's considered the industry standard for creating websites, user interfaces, and graphic designs."}>
                    <div className='flex flex-col w-full h-full items-start justify-start gap-5'>
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
                            <NextButton next={true} text={'Adobe XD'} link={'/portfolio/design/adobe-xd'} />
                        </div>
                    </div>
                </ToolsDescription>
            </div>
        </ScrollShadow>
    )
}
