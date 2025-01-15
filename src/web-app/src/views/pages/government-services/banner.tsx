'use client'

import { Card, CardContent, Typography, useTheme } from '@mui/material'

export default function Banner() {
  const theme = useTheme()

  return (
    <Card
      className='mb-8 overflow-hidden'
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main}40 100%)`,
        position: 'relative'
      }}
    >
      {/* Decorative elements */}
      <div className='absolute left-0 top-0 -translate-x-1/2 opacity-30'>
        <div className='h-64 w-64 rounded-full bg-primary blur-3xl' />
      </div>
      <div className='absolute right-0 bottom-0 translate-x-1/2 opacity-30'>
        <div className='h-64 w-64 rounded-full bg-primary blur-3xl' />
      </div>

      <CardContent className='relative py-16 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <Typography variant='h3' className='text-white font-bold mb-4'>
            Government Services
          </Typography>
          <Typography variant='h6' className='text-white'>
            Access and pay for various government services through our integrated platform
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
