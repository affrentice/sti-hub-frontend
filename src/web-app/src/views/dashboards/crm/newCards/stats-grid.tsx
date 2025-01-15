import React from 'react'

import { Card, CardContent, CardHeader } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import classNames from 'classnames'

const stats = [
  {
    title: 'Total Users',
    value: '2,853',
    icon: 'ri-group-line text-primary',
    change: '+12.5%',
    description: 'from last month'
  },
  {
    title: 'Active Connections',
    value: '1,245',
    icon: 'ri-pulse-line text-primary',
    change: '+15.2%',
    description: 'from last month'
  },
  {
    title: 'Successful Matches',
    value: '573',
    icon: 'ri-focus-2-line text-primary',
    change: '+8.4%',
    description: 'from last month'
  },
  {
    title: 'Active Projects',
    value: '312',
    icon: 'ri-briefcase-line text-primary',
    change: '+10.3%',
    description: 'from last month'
  }
]

export function StatsGrid() {
  return (
    <Grid container spacing={2}>
      {stats.map(stat => (
        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={stat.title}>
          <Card>
            <CardHeader title={stat.title} action={<i className={classNames(stat.icon, 'text-xl text-primary')}></i>} />

            <CardContent>
              <Typography variant='h4' style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {stat.value}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                <span style={{ color: '#34d399' }}>{stat.change}</span> {stat.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
