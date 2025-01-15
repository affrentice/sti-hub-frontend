'use client'

import { Tabs, Tab } from '@mui/material'

interface TabNavigationProps {
  value: number
  onChange: (event: React.SyntheticEvent, newValue: number) => void
}

export default function TabNavigation({ value, onChange }: TabNavigationProps) {
  return (
    <div className='bg-white shadow-sm border-b mb-8'>
      <div className='px-4'>
        <Tabs
          value={value}
          onChange={onChange}
          variant='fullWidth'
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '1rem',
              minHeight: '64px'
            }
          }}
        >
          <Tab
            icon={<i className='ri-graduation-cap-line text-xl' />}
            iconPosition='start'
            label='Grant Opportunities'
          />
          <Tab icon={<i className='ri-book-2-line text-xl' />} iconPosition='start' label='Research Publications' />
        </Tabs>
      </div>
    </div>
  )
}
