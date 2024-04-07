import React from 'react'
import SubNavButton from '../components/SubNavButton'
import { Cloud, Code, Devices, DrawOutlined, Language, Memory, SportsEsports } from '@mui/icons-material'
import { Divider } from '@nextui-org/divider'

export default function Layout({children}) {
  return (
    <div className='flex w-full h-full items-center justify-center backdrop-blur-md bg-background/80'>
        <div className="flex flex-col bg-surfaceVariant/0 items-start p-5 h-full gap-5">
            <div className='uppercase text-foreground text-small pl-5 tracking-widest'>
                Categories
            </div>
            <div className='flex flex-col items-start h-full w-full gap-2'>
              <SubNavButton text={"Design"} link={"/portfolio/design"} icon={<DrawOutlined />} />
              <SubNavButton text={"Web Development"} link={"/portfolio/web-development"} icon={<Language />} />
              <SubNavButton text={"Application Development"} link={"/portfolio/app-development"} icon={<Code />} />
              <SubNavButton text={"Cross Platform Development"} link={"/portfolio/cross-development"} icon={<Devices />} />
              <SubNavButton text={"Cloud Technologies"} link={"/portfolio/cloud-tech"} icon={<Cloud />} />
              <SubNavButton text={"Game Development"} link={"/portfolio/game-development"} icon={<SportsEsports />} />
              <SubNavButton text={"Other Technologies"} link={"/portfolio/other"} icon={<Memory />} />
            </div>
        </div>
        <Divider orientation='vertical' />
        <div className="flex items-center justify-center w-full h-full">
          {children}
        </div>
    </div>
  )
}
