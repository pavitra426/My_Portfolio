import { Camera, Extension, Info } from '@mui/icons-material'
import { Divider } from '@nextui-org/divider'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import Image from 'next/image'
import React from 'react'
import MaterialDesign from '../icons/plugins/MaterialDesign'
import ExternalLinkButton from './ExternalLinkButton'
import LikeButton from './LikeButton'


export default function ProjectCard() {
    return (
        <div className='flex w-full flex-col gap-5 p-5 rounded-2xl bg-tertiary-tertiaryContainer/80 border-1 border-tertiary/30'>
            <div className='text-tertiary-onTertiaryContainer text-3xl py-3'>
                Application desgin for ...
            </div>
            <div className='gap-3 flex items-center justify-start text-tertiary-onTertiaryContainer text-lg'>
                <Info />
                About the project
            </div>
            <div className='text-tertiary-onTertiaryContainer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos quo aut nisi perspiciatis iste autem temporibus exercitationem numquam quasi! Recusandae, laborum itaque, commodi sed quisquam magnam beatae alias nostrum ipsum vero molestias eveniet dignissimos. Illum quod fuga voluptatibus ad dolore nihil amet similique iste, doloribus, minus enim numquam dolorem.
            </div>
            <div className='gap-3 flex items-center justify-start text-tertiary-onTertiaryContainer text-lg'>
                <Camera />
                Screenshots
            </div>
            <ScrollShadow orientation='horizontal' offset={1} size={100} hideScrollBar className='max-w-full'>
                <div className='flex gap-2'>
                    <Image alt='test' unoptimized className='rounded-xl aspect-video' src='https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={300} height={200} />
                    <Image alt='test' unoptimized className='rounded-xl aspect-video' src='https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={300} height={200} />
                    <Image alt='test' unoptimized className='rounded-xl aspect-video' src='https://images.unsplash.com/photo-1710183353216-15d487febf3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={300} height={200} />
                </div>
            </ScrollShadow>
            <Divider />
            <div className='gap-3 flex items-center justify-start text-tertiary-onTertiaryContainer text-lg'>
                <Extension />
                Plugins used
            </div>
            <div className='w-full grid grid-cols-3 gap-y-3'>
                <div className='gap-3 flex items-center justify-start text-tertiary-onTertiaryContainer text-small h-[30px]'>
                    <MaterialDesign forButton={false} />
                    Material Design 3
                </div>
                <div className='gap-3 flex items-center justify-start text-tertiary-onTertiaryContainer text-small h-[30px]'>
                    <MaterialDesign forButton={false} />
                    Material Theme Builder
                </div>
                <div className='gap-3 flex items-center justify-start text-tertiary-onTertiaryContainer text-small h-[30px]'>
                    <MaterialDesign forButton={false} />
                    Material Theme Builder
                </div>
                <div className='gap-3 flex items-center justify-start text-tertiary-onTertiaryContainer text-small h-[30px]'>
                    <MaterialDesign forButton={false} />
                    Material Theme Builder
                </div>
            </div>
            <div className='flex w-full items-center justify-between'>
                <LikeButton />
                <ExternalLinkButton color={'secondary'} text={'Visit Project'} link={'https://www.figma.com/file/8CPffdrDKlFEs9kimKy1Sk/Sampark?type=design&node-id=0%3A1&mode=design&t=S89OYOEMVvuINYEp-1'} />
            </div>
        </div>
    )
}
