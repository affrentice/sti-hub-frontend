// Third-party Imports
import type { Dispatch } from '@reduxjs/toolkit'
import type { EventInput } from '@fullcalendar/core'

// Type Imports
import type { ThemeColor } from '@core/types'

export type CalendarFiltersType =
  | 'Matchmaking'
  | 'Grants Opportunities'
  | 'Research Publication'
  | 'Community Engagement'
  | 'Project Management'
  | 'Investor Directory'
  | 'Event Management'
  | 'Content Sharing'
  | 'Performance Monitoring'

export type CalendarColors = {
  Matchmaking: ThemeColor
  'Grants Opportunities': ThemeColor
  'Research Publication': ThemeColor
  'Community Engagement': ThemeColor
  'Project Management': ThemeColor
  'Investor Directory': ThemeColor
  'Event Management': ThemeColor
  'Content Sharing': ThemeColor
  'Performance Monitoring': ThemeColor
}

export type CalendarType = {
  events: EventInput[]
  filteredEvents: EventInput[]
  selectedEvent: null | any
  selectedCalendars: CalendarFiltersType[]
}

export type AddEventType = Omit<EventInput, 'id'>

export type SidebarLeftProps = {
  mdAbove: boolean
  calendarApi: any
  calendarStore: CalendarType
  leftSidebarOpen: boolean
  dispatch: Dispatch
  calendarsColor: CalendarColors
  handleLeftSidebarToggle: () => void
  handleAddEventSidebarToggle: () => void
}

export type AddEventSidebarType = {
  calendarStore: CalendarType
  calendarApi: any
  dispatch: Dispatch
  addEventSidebarOpen: boolean
  handleAddEventSidebarToggle: () => void
}
