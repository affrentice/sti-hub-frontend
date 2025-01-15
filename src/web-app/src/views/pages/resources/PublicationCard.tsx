'use client'

import React from 'react'

import { Card, CardContent, Typography, Button, Chip, IconButton } from '@mui/material'

interface PublicationProps {
  id: string
  title: string
  authors: string[]
  institution: string
  publicationDate: string
  category: string
  abstract: string
}

const PublicationCard: React.FC<PublicationProps> = ({
  title,
  authors,
  institution,
  publicationDate,
  category,
  abstract
}) => {
  return (
    <Card className='h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300'>
      <CardContent className='flex flex-col h-full'>
        <div>
          <Typography variant='h6' className='font-bold mb-2 line-clamp-2'>
            {title}
          </Typography>
          <Typography color='text.secondary' className='mb-1 line-clamp-1'>
            Authors: {authors.join(', ')}
          </Typography>
          <Typography color='text.secondary' className='mb-2'>
            Institution: {institution}
          </Typography>
          <Typography className='mb-4 line-clamp-3'>{abstract}</Typography>
          <div className='flex flex-wrap gap-2 mb-4'>
            <Chip label={category} color='primary' size='small' />
            <Chip label={`Published: ${publicationDate}`} color='secondary' size='small' />
          </div>
        </div>
        <div className='mt-auto flex justify-between items-center'>
          <Button variant='outlined' startIcon={<i className='ri-download-line' />} color='primary'>
            Download PDF
          </Button>
          <IconButton color='primary'>
            <i className='ri-share-line' />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}

export default PublicationCard
