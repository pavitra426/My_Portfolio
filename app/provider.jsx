'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from "next-themes"
import React from 'react'

export default function Provider({children}) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={['light', 'dark']}
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
