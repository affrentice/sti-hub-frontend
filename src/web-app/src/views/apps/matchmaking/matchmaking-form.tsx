'use client'

import { Paper, Typography, TextField, Button, Box } from '@mui/material'

export function MatchmakingForm() {
  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant='h6' gutterBottom>
        Find Matches
      </Typography>
      <Box component='form' sx={{ '& > :not(style)': { mb: 2 } }}>
        <TextField fullWidth id='industry' label='Industry' placeholder='Enter your industry' variant='outlined' />
        <TextField fullWidth id='funding' label='Funding Needed' placeholder='Enter amount in USD' variant='outlined' />
        <TextField
          fullWidth
          id='stage'
          label='Business Stage'
          placeholder='e.g., Seed, Series A, Growth'
          variant='outlined'
        />
        <Button fullWidth variant='contained' color='primary' size='large'>
          Find Matches
        </Button>
      </Box>
    </Paper>
  )
}
