import AppBar from '@/app/components/AppBar'
import React from 'react'

export default function Layout({children}) {

    return (
        <div className='pageAnimation flex flex-col items-center justify-start w-full h-full'>
            <AppBar title={'Other Technologies'} />
            {children}
        </div>
    )
}
