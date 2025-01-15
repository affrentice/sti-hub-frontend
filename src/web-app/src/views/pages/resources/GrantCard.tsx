'use client'

import React from 'react'

import { Card, CardContent, Typography, Button, Chip } from '@mui/material'

interface GrantProps {
  id: string
  title: string
  donor: string
  amount: string
  deadline: string
  category: string
  description: string
}

const GrantCard: React.FC<GrantProps> = ({ title, donor, amount, deadline, category, description }) => {
  return (
    <Card className='h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300'>
      <CardContent className='flex flex-col h-full'>
        <div>
          <Typography variant='h6' className='font-bold mb-2 line-clamp-2'>
            {title}
          </Typography>
          <Typography color='text.secondary' className='mb-2'>
            Donor: {donor}
          </Typography>
          <Typography className='mb-4 line-clamp-3'>{description}</Typography>
          <div className='flex flex-wrap gap-2 mb-4'>
            <Chip label={category} color='primary' size='small' />
            <Chip label={`Deadline: ${deadline}`} color='secondary' size='small' />
          </div>
        </div>
        <div className='mt-auto'>
          <Typography variant='h6' color='primary' className='mb-2'>
            {amount}
          </Typography>
          <Button variant='contained' color='primary' fullWidth>
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default GrantCard
