import AppBar from '@/app/components/AppBar'
import ToolsBar from '@/app/components/ToolsBar'
import ToolsNavButton from '@/app/components/ToolsNavButton'
import Flutter from '@/app/icons/tools/Flutter'
import { Handyman } from '@mui/icons-material'
import React from 'react'

export default function Layout({children}) {

    return (
        <div className='flex flex-col items-center justify-start w-full h-full'>
            <AppBar title={'Cross Platform Development'} />
            <div className='flex items-center w-full justify-center h-full overflow-hidden'>
                <div className='flex items-center justify-center h-full w-full'>
                    {children}
                </div>
                <ToolsBar>
                    <div className='flex items-center justify-start gap-3 uppercase text-tertiary-onTertiaryContainer text-medium p-5 tracking-widest border-b-1 border-utils-outline'>
                        <Handyman />
                        <div>
                            Tools
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full p-3 gap-1'>
                        <ToolsNavButton text={"Flutter"} link={"/portfolio/design/figma"} icon={<Flutter forButton={true}/>} />
                    </div>
                </ToolsBar>
            </div>
        </div>
    )
}
