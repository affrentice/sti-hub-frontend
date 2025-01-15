'use client'

import { Box } from '@mui/material'

import { MatchmakingForm } from './matchmaking-form'
import { PotentialMatches } from './potential-matches'

export default function MatchmakingPage() {
  return (
    <div>
      <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
        <Box flex={1}>
          <MatchmakingForm />
        </Box>
        <Box flex={1}>
          <PotentialMatches />
        </Box>
      </Box>
    </div>
  )
}
