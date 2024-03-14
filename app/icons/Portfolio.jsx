import { Drafts, EmailOutlined } from '@mui/icons-material'
import React from 'react'

export default function Portfolio({fill}) {
    return (
        fill ? <Drafts /> : <EmailOutlined />
    )
}
