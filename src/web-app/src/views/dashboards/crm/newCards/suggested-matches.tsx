import React from 'react'

import { Card, Box, Avatar, Button, CardHeader, CardContent, Chip, Typography, LinearProgress } from '@mui/material'

interface Match {
  id: number
  name: string
  type: string
  matchScore: number
  sector: string
  avatar: string
  description: string
}

const matches: Match[] = [
  {
    id: 1,
    name: 'Tech Innovators Ltd',
    type: 'Entrepreneur',
    matchScore: 95,
    sector: 'Technology',
    avatar: '/placeholder.svg',
    description: 'AI-driven solutions for smart cities'
  },
  {
    id: 2,
    name: 'Green Energy Solutions',
    type: 'Startup',
    matchScore: 88,
    sector: 'Clean Energy',
    avatar: '/placeholder.svg',
    description: 'Innovative solar panel technology'
  },
  {
    id: 3,
    name: 'AgriTech Ventures',
    type: 'Investor',
    matchScore: 85,
    sector: 'Agriculture',
    avatar: '/placeholder.svg',
    description: 'Funding cutting-edge agricultural tech'
  }
]

export function SuggestedMatches() {
  return (
    <Card>
      <CardHeader
        title='Suggested Matches'
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {matches.map(match => (
            <Box
              key={match.id}
              sx={{
                p: 2,
                border: '1px solid #e0e0e0',
                borderRadius: 2,

                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'all 0.3s',
                '&:hover': {
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={match.avatar} alt={match.name} sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                      {match.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {match.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip label={match.type} color='primary' variant='outlined' size='small' />
                  <Chip label={match.sector} color='secondary' variant='outlined' size='small' />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LinearProgress
                    variant='determinate'
                    value={match.matchScore}
                    sx={{ width: 80, height: 6, borderRadius: 4 }}
                  />
                  <Typography variant='body2' sx={{ fontWeight: 'medium' }}>
                    {match.matchScore}% Match
                  </Typography>
                </Box>
              </Box>

              <Button
                variant='contained'
                color='primary'
                sx={{ mt: 2, textTransform: 'none', fontWeight: 'bold' }}
                endIcon={<i className='ri-arrow-right-line' style={{ fontSize: '1.2rem' }}></i>}
              >
                View Profile
              </Button>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
