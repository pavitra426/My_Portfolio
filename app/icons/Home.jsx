import { Home, HomeOutlined } from '@mui/icons-material'
import React from 'react'

export default function HomeIcon({fill}) {
    return (
        fill ? <Home /> : <HomeOutlined />
    )
}
