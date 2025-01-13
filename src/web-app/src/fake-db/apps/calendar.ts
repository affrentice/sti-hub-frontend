// Third-party Imports
import type { EventInput } from '@fullcalendar/core'

// Vars
const date = new Date()
const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000)

const nextMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)

const prevMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

export const events: EventInput[] = [
  {
    id: '1',
    url: '',
    title: 'Investor Networking Event',
    start: date,
    end: nextDay,
    allDay: false,
    extendedProps: {
      calendar: 'Event Management'
    }
  },
  {
    id: '2',
    url: '',
    title: 'Grant Application Deadline',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Grants Opportunities'
    }
  },
  {
    id: '3',
    url: '',
    title: 'Community Feedback Forum',
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
    extendedProps: {
      calendar: 'Community Engagement'
    }
  },
  {
    id: '4',
    url: '',
    title: 'Project Progress Review',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Project Management'
    }
  },
  {
    id: '5',
    url: '',
    title: 'Research Policy Workshop',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Research Publication'
    }
  },
  {
    id: '6',
    url: '',
    title: 'Matchmaking Strategy Meeting',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Matchmaking'
    }
  },
  {
    id: '7',
    url: '',
    title: 'Performance Review Session',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Performance Monitoring'
    }
  },
  {
    id: '8',
    url: '',
    title: 'Content Sharing Workshop',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Content Sharing'
    }
  },
  {
    id: '9',
    url: '',
    title: 'Quarterly Investor Review',
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Investor Directory'
    }
  },
  {
    id: '10',
    url: '',
    title: 'Annual Report Deadline',
    start: prevMonth,
    end: prevMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Project Management'
    }
  }
]
