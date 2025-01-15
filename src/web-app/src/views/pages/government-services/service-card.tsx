'use client'

import Link from 'next/link'

import { Card, CardContent, Typography, Button } from '@mui/material'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  href: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Card className='h-full hover:shadow-lg transition-shadow duration-300'>
      <CardContent className='flex flex-col h-full p-6'>
        <div className='flex items-center gap-4 mb-4'>
          <i className={`${icon} text-3xl text-primary`} aria-hidden='true' />
          <Typography variant='h6' component='h3'>
            {title}
          </Typography>
        </div>
        <Typography className='text-gray-600 mb-6 flex-grow'>{description}</Typography>
        <div className='mt-auto'>
          <Link href={href} passHref>
            <Button
              variant='contained'
              color='primary'
              className='w-full'
              endIcon={<i className='ri-arrow-right-line' aria-hidden='true' />}
            >
              Access Service
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
