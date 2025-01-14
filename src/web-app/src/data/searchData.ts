type SearchData = {
  id: string
  name: string
  url: string
  excludeLang?: boolean
  icon: string
  section: string
  shortcut?: string
}

const data: SearchData[] = [
  {
    id: '1',
    name: 'CRM',
    url: '/dashboards/crm',
    icon: 'ri-pie-chart-2-line',
    section: 'Dashboards'
  },
  {
    id: '27',
    name: 'Mail (Correspondence)',
    url: '/apps/email',
    icon: 'ri-mail-line',
    section: 'Apps'
  },
  {
    id: '28',
    name: 'Discussion Hub',
    url: '/apps/chat',
    icon: 'ri-wechat-line',
    section: 'Apps'
  },
  {
    id: '29',
    name: 'Event Planner',
    url: '/apps/calendar',
    icon: 'ri-calendar-line',
    section: 'Apps'
  },
  {
    id: '30',
    name: 'Project Desk',
    url: '/apps/kanban',
    icon: 'ri-drag-drop-line',
    section: 'Apps'
  },

  {
    id: '35',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'ri-file-user-line',
    section: 'Apps'
  },
  {
    id: '36',
    name: 'User View',
    url: '/apps/user/view',
    icon: 'ri-file-list-2-line',
    section: 'Apps'
  },
  {
    id: '37',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'ri-shield-user-line',
    section: 'Apps'
  },
  {
    id: '38',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'ri-lock-unlock-line',
    section: 'Apps'
  },
  {
    id: '39',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'ri-user-3-line',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'ri-user-settings-line',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'ri-question-line',
    section: 'Pages'
  }
]

export default data
