'use client'

import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { MatchmakingForm } from './matchmaking-form'
import { PotentialMatches } from './potential-matches'

export default function MatchmakingPage() {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Matchmaking
      </Typography>
      <Grid container spacing={3}>
        <Grid item size={12} md={6}>
          <MatchmakingForm />
        </Grid>
        <Grid item size={12} md={6}>
          <PotentialMatches />
        </Grid>
      </Grid>
    </Container>
  )
}
