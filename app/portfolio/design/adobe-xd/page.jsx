import NextButton from '@/app/components/NextButton'
import ProjectCard from '@/app/components/ProjectCard'
import ToolsDescription from '@/app/components/animation/ToolsDescription'
import AdobeXD from '@/app/icons/tools/AdobeXD'
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
                        <AdobeXD forButton={false} />
                    </div>
                    Adobe XD
                </div>
                <div className='text-surfaceVariant-foreground'>
            </div>
                <ToolsDescription buttonLink={'https://adobexdplatform.com/'} buttonText={'Visit Adobe XD'} text={"Adobe XD is a vector-based design tool for creating user interfaces (UI) for mobile and web applications. It's also known as Adobe Experience Design."} >
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
                            <NextButton next={false} text={'Figma'} link={'/portfolio/design/figma'} />
                            <div></div>
                        </div>
                    </div>
                </ToolsDescription>
            </div>
        </ScrollShadow>
    )
}
