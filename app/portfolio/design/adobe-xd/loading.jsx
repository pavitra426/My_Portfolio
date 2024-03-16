import { Divider, Skeleton } from '@nextui-org/react'
import React from 'react'

export default function Loading() {
    return (
            <div className='flex flex-col w-full h-full p-5 gap-5'>
                <div className='flex items-center justify-start w-full text-3xl gap-3 text-foreground'>
                    <div className='h-[50px] w-[50px] flex items-center justify-center'>
                        <Skeleton className='h-full w-full rounded-full' />
                    </div>
                    <Skeleton className="h-[30px] w-[200px] rounded-lg"/>
                </div>
                <div className='flex flex-col w-full h-full gap-5'>
                    <div className='flex flex-col w-full gap-2'>
                        <Skeleton className="h-[20px] w-full rounded-lg"/>
                        <Skeleton className="h-[20px] w-full rounded-lg"/>
                        <Skeleton className="h-[20px] w-full rounded-lg"/>
                    </div>
                    <Skeleton className='h-[50px] w-[150px] rounded-xl' />
                    <Divider />
                    <div className='flex flex-col w-full h-full items-start justify-start gap-5'>
                        <div className='flex items-center justify-start gap-3 uppercase text-foreground text-medium tracking-widest py-3'>
                            <Skeleton className='h-[24px] w-[24px] rounded-full' />
                            <div>
                                <Skeleton className="h-[24px] w-[150px] rounded-lg"/>
                            </div>
                        </div>
                        <Skeleton className="h-[500px] w-full rounded-3xl"/>
                    </div>
                </div>
            </div>
    )
}
