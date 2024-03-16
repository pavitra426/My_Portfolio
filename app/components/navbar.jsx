import React from 'react'
import NavButton from './navbutton'
import Portfolio from '../icons/Portfolio'
import Contact from '../icons/Contact'
import HomeIcon from '../icons/Home'

export default function Navbar() {
  return (
    <div className="flex flex-col gap-3 h-full bg-secondary-secondaryContainer/50 p-3 border-r-1 border-secondary/30">
        <NavButton link={'/'} text={'Home'} icon={<HomeIcon fill={false} />} iconfilled={<HomeIcon fill={true} />}/>
        <NavButton link={'/portfolio'} text={'Portfolio'} icon={<Portfolio fill={false} />} iconfilled={<Portfolio fill={true} />}/>
        <NavButton link={'/contact'} text={'contact'} icon={<Contact fill={false} />} iconfilled={<Contact fill={true} />}/>
    </div>
  )
}
