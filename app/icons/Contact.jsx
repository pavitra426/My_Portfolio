import { Message, MessageOutlined } from '@mui/icons-material'
import React from 'react'

export default function Contact({fill}) {
    return (
        fill ? <Message /> : <MessageOutlined />
    )
}
