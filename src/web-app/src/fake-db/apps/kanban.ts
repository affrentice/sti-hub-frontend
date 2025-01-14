import type { KanbanType } from '@/types/apps/kanbanTypes'

export const db: KanbanType = {
  columns: [
    {
      id: 1,
      title: 'Pending',
      taskIds: [1, 2, 3]
    },
    {
      id: 2,
      title: 'In Progress',
      taskIds: [4, 5, 6]
    },
    {
      id: 3,
      title: 'Completed',
      taskIds: [7, 8, 9]
    }
  ],
  tasks: [
    {
      id: 1,
      title: 'Identify potential investors',
      badgeText: ['Matchmaking'],
      attachments: 3,
      comments: 5,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      dueDate: new Date(new Date().getFullYear(), 9, 15)
    },
    {
      id: 2,
      title: 'Prepare grant application guidelines',
      badgeText: ['Grants Opportunities'],
      attachments: 4,
      comments: 8,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      dueDate: new Date(new Date().getFullYear(), 10, 10)
    },
    {
      id: 3,
      title: 'Draft research publication policy',
      badgeText: ['Research Publication'],
      attachments: 2,
      comments: 6,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      dueDate: new Date(new Date().getFullYear(), 8, 25)
    },
    {
      id: 4,
      title: 'Organize community feedback forum',
      badgeText: ['Community Engagement'],
      attachments: 5,
      comments: 10,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      dueDate: new Date(new Date().getFullYear(), 11, 5)
    },
    {
      id: 5,
      title: 'Evaluate STI-funded project reports',
      badgeText: ['Project Management'],
      attachments: 7,
      comments: 12,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      image:
        'https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      dueDate: new Date(new Date().getFullYear(), 11, 20)
    },
    {
      id: 6,
      title: 'Update investor directory',
      badgeText: ['Investor Directory'],
      attachments: 6,
      comments: 9,
      assigned: [{ src: '/images/avatars/5.png', name: 'Tom Smith' }],
      dueDate: new Date(new Date().getFullYear(), 12, 10)
    },
    {
      id: 7,
      title: 'Finalize matchmaking algorithm',
      badgeText: ['Matchmaking'],
      attachments: 5,
      comments: 11,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      dueDate: new Date(new Date().getFullYear(), 12, 15)
    },
    {
      id: 8,
      title: 'Host investor-entrepreneur networking event',
      badgeText: ['Event Management'],
      attachments: 8,
      comments: 14,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      dueDate: new Date(new Date().getFullYear(), 12, 20)
    },
    {
      id: 9,
      title: 'Design public profile templates',
      badgeText: ['Content Sharing'],
      attachments: 3,
      comments: 7,
      assigned: [
        { src: '/images/avatars/8.png', name: 'Jane Smith' },
        { src: '/images/avatars/3.png', name: 'Tom Smith' },
        { src: '/images/avatars/2.png', name: 'Emily Davis' }
      ],
      dueDate: new Date(new Date().getFullYear(), 12, 25)
    }
  ]
}
