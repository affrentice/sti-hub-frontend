'use client'

import { styled } from '@mui/material/styles'
import { Card, CardContent, InputAdornment, TextField as MuiTextField, Typography } from '@mui/material'

interface BannerProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  isLoading: boolean
}

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(8), // Increased from 4 to 8
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main}40 100%)`,
  position: 'relative'
}))

const DecorativeElement = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 256,
  height: 256,
  borderRadius: '50%',
  background: theme.palette.primary.main,
  opacity: 0.2,
  filter: 'blur(24px)'
}))

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper
  }
}))

export default function Banner({ searchQuery, setSearchQuery, isLoading }: BannerProps) {
  return (
    <StyledCard>
      <DecorativeElement style={{ left: -128, top: -128 }} />
      <DecorativeElement style={{ right: -128, bottom: -128 }} />

      <CardContent sx={{ position: 'relative', py: 8, px: 4, textAlign: 'center' }}>
        <Typography variant='h4' component='h1' gutterBottom color='primary.contrastText' fontWeight='bold'>
          Discover Research & Funding Opportunities
        </Typography>
        <Typography variant='h6' color='primary.contrastText' sx={{ mb: 4, opacity: 0.9 }}>
          Connect, Innovate, and Grow with Uganda&apos;s Entrepreneurial Ecosystem
        </Typography>
        <StyledTextField
          fullWidth
          variant='outlined'
          placeholder='Search grants or publications...'
          value={searchQuery}
          disabled={isLoading}
          onChange={e => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <i className='ri-search-line' />
              </InputAdornment>
            )
          }}
          sx={{
            maxWidth: { sm: '55%', md: 600 },
            mx: 'auto'
          }}
        />
      </CardContent>
    </StyledCard>
  )
}
