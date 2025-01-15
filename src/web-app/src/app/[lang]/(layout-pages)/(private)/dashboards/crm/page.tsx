// MUI Imports
import Grid from '@mui/material/Grid2'

// Components Imports
import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'
import MeetingSchedule from '@views/dashboards/crm/MeetingSchedule'
import { StatsGrid } from '@/views/dashboards/crm/newCards/stats-grid'
import { SuggestedMatches } from '@/views/dashboards/crm/newCards/suggested-matches'
import EngagementMetricsChart from '@/views/dashboards/crm/LineAreaChart'

const DashboardCRM = () => {
  return (
    <Grid container spacing={6}>
      {/* grid full width */}
      <Grid size={{ xs: 12 }}>
        <StatsGrid />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <ActivityTimeline />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <EngagementMetricsChart />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <MeetingSchedule />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <SuggestedMatches />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
