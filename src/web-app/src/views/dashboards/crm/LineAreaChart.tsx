'use client'

import dynamic from 'next/dynamic'

import { Card, CardContent, Box, CardHeader } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { ApexOptions } from 'apexcharts'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [
  {
    name: 'Messages',
    data: [30, 40, 35, 50, 49, 60, 70]
  },
  {
    name: 'Connections',
    data: [20, 35, 40, 45, 40, 50, 60]
  }
]

const EngagementMetricsChart = () => {
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      animations: {
        enabled: true,
        dynamicAnimation: {
          enabled: true,
          speed: 800
        }
      }
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },
    colors: [theme.palette.primary.main, theme.palette.success.main],
    markers: {
      size: 6,
      shape: 'circle'
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontSize: '14px',
          fontWeight: '500'
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontSize: '14px',
          fontWeight: '500'
        }
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: theme.palette.text.primary,
        useSeriesColors: false
      },
      markers: {
        size: 8
      }
    },
    grid: {
      show: false,
      padding: {
        left: 2,
        top: -30,
        right: 2,
        bottom: -15
      }
    },
    tooltip: {
      theme: 'light'
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [theme.palette.primary.light, theme.palette.success.light],
        inverseColors: true,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        stops: [0, 50, 100]
      }
    }
  }

  return (
    <Card sx={{ p: 2 }}>
      <CardHeader
        title='Engagement Metrics'
        sx={{ textAlign: 'left', fontWeight: 'bold', color: theme.palette.primary.main, mb: 1 }}
      />
      <CardContent>
        <Box>
          <AppReactApexCharts type='area' height={300} width='100%' options={options} series={series} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default EngagementMetricsChart
