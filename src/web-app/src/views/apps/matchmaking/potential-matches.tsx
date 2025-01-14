'use client'

import { Paper, Typography, Box, Button, Divider } from '@mui/material'

const matches: any[] = [
  {
    name: 'Acme Investments',
    industry: 'Technology',
    investmentRange: '$100k - $500k'
  },
  {
    name: 'Tech Ventures',
    industry: 'Software',
    investmentRange: '$500k - $2M'
  }
]

export function PotentialMatches() {
  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant='h6' gutterBottom>
        Potential Matches
      </Typography>
      <Box sx={{ '& > :not(:last-child)': { mb: 2 } }}>
        {matches.map((match, index) => (
          <Box key={match.name}>
            {index > 0 && <Divider sx={{ my: 2 }} />}
            <Box sx={{ p: 2, border: 1, borderColor: 'grey.200', borderRadius: 1 }}>
              <Typography variant='subtitle1' gutterBottom>
                {match.name}
              </Typography>
              <Typography variant='body2' color='text.secondary' gutterBottom>
                Industry: {match.industry}
              </Typography>
              <Typography variant='body2' color='text.secondary' gutterBottom>
                Investment Range: {match.investmentRange}
              </Typography>
              <Button variant='outlined' size='small' sx={{ mt: 1 }}>
                View Profile
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}
