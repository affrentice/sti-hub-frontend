'use client'

import { styled } from '@mui/material/styles'
import { Card, CardContent, InputAdornment, TextField as MuiTextField, Typography, useTheme } from '@mui/material'

interface FaqHeaderProps {
  searchValue: string
  setSearchValue: (value: string) => void
}

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main}40 100%)`,
  position: 'relative'
}))

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper
  }
}))

const FaqHeader = ({ searchValue, setSearchValue }: FaqHeaderProps) => {
  const theme = useTheme()

  return (
    <StyledCard>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          textAlign: 'center',
          paddingTop: '4.5625rem',
          paddingBottom: '5.9375rem',
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5)
        }}
      >
        <Typography variant='h4' color='primary.main' className='text-white' sx={{ marginBottom: 2.5 }}>
          Hello, how can we help?
        </Typography>
        <Typography sx={{ marginBottom: 6 }} className='text-white'>
          or choose a category to quickly find the help you need
        </Typography>
        <StyledTextField
          fullWidth
          variant='outlined'
          placeholder='Ask a question...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <i className='ri-search-line' />
              </InputAdornment>
            )
          }}
          sx={{
            width: '100%',
            maxWidth: { sm: '55%', md: '600px' }
          }}
        />
      </CardContent>
    </StyledCard>
  )
}

export default FaqHeader
