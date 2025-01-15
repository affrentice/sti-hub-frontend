// Type Imports
import type { ProfileHeaderType, DataType } from '@/types/pages/profileTypes'

type DB = {
  users: DataType
  profileHeader: ProfileHeaderType
}

export const db: DB = {
  users: {
    profile: {
      about: [
        { property: 'Full Name', value: 'Jane Nakitende', icon: 'ri-user-3-line' },
        { property: 'Status', value: 'Active', icon: 'ri-check-line' },
        { property: 'Role', value: 'Entrepreneur', icon: 'ri-lightbulb-line' },
        { property: 'Country', value: 'Uganda', icon: 'ri-flag-line' },
        { property: 'Language', value: 'English, Luganda', icon: 'ri-translate-2-line' }
      ],
      contacts: [
        { property: 'Contact', value: '+256 754 123 456', icon: 'ri-phone-line' },
        { property: 'LinkedIn', value: 'linkedin.com/in/jane-nakitende', icon: 'ri-linkedin-line' },
        { property: 'Email', value: 'jane.nakitende@innovationhub.com', icon: 'ri-mail-open-line' }
      ],
      teams: [
        { property: 'Agritech Developers', value: '(24 Members)' },
        { property: 'Renewable Energy Researchers', value: '(18 Members)' }
      ],
      overview: [
        { property: 'Tasks Completed', value: '1.2k', icon: 'ri-check-line' },
        { property: 'Connections', value: '384', icon: 'ri-user-3-line' },
        { property: 'Projects Led', value: '34', icon: 'ri-projector-line' }
      ],
      connections: [
        {
          isFriend: true,
          connections: '120',
          name: 'Peter Okello',
          avatar: '/images/avatars/2.png',
          designation: 'Investor',
          description: 'Focuses on funding renewable energy projects in Uganda.'
        },
        {
          isFriend: false,
          connections: '200',
          name: 'Anna Mugisha',
          avatar: '/images/avatars/3.png',
          designation: 'BDS Provider',
          description: 'Offers business development services to early-stage startups.'
        },
        {
          isFriend: true,
          connections: '98',
          name: 'David Kato',
          avatar: '/images/avatars/4.png',
          designation: 'Government Official',
          description: 'Works on policies supporting startups and SMEs.'
        },
        {
          isFriend: false,
          connections: '150',
          name: 'Grace Namuli',
          avatar: '/images/avatars/5.png',
          designation: 'Entrepreneur',
          description: 'Founder of an agritech startup focusing on smart irrigation.'
        }
      ],
      teamsTech: [
        {
          members: 45,
          ChipColor: 'info',
          chipText: 'Agritech',
          title: 'Smart Farming Innovations',
          avatar: '/images/logos/agriculture.png'
        },
        {
          members: 30,
          ChipColor: 'primary',
          chipText: 'Energy',
          title: 'Green Energy Advocates',
          avatar: '/images/logos/energy.png'
        }
      ],
      projectTable: [
        {
          id: 1,
          title: 'Solar-Powered Irrigation Systems',
          subtitle: 'Renewable Energy',
          leader: 'Jane Nakitende',
          avatar: '/images/logos/solar.png',
          avatarGroup: ['/images/avatars/1.png', '/images/avatars/2.png', '/images/avatars/3.png'],
          status: 85
        },
        {
          id: 2,
          title: 'E-commerce Platform for Farmers',
          subtitle: 'Tech for Agriculture',
          leader: 'Grace Namuli',
          avatar: '/images/logos/ecommerce.png',
          avatarGroup: ['/images/avatars/4.png', '/images/avatars/5.png'],
          status: 60
        },
        {
          id: 3,
          title: 'Waste-to-Energy Solutions',
          subtitle: 'Environmental Sustainability',
          leader: 'Peter Okello',
          avatar: '/images/logos/waste.png',
          avatarGroup: ['/images/avatars/6.png', '/images/avatars/7.png'],
          status: 92
        }
      ]
    },
    teams: [
      {
        extraMembers: 8,
        title: 'Agri-Tech Innovators',
        avatar: '/images/logos/agriculture.png',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Lillian Mukasa' },
          { avatar: '/images/avatars/2.png', name: 'Samuel Aine' }
        ],
        description: 'Focused on developing tech-driven solutions to modernize farming practices.',
        chips: [
          { title: 'IoT', color: 'success' },
          { title: 'Data Analytics', color: 'primary' }
        ]
      }
    ],
    projects: [
      {
        daysLeft: 30,
        comments: 10,
        totalTask: 120,
        hours: '90/120',
        tasks: '100/120',
        budget: '$15,000',
        completedTask: 100,
        deadline: '2025-12-31',
        chipColor: 'success',
        startDate: '2025-01-01',
        budgetSpent: '$10,000',
        members: '35 members',
        title: 'Smart Irrigation Pilot',
        client: 'Agri-Co Ltd',
        avatar: '/images/icons/smart-irrigation.png',
        description: 'Using IoT to automate and optimize irrigation processes.',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Jane Nakitende' },
          { avatar: '/images/avatars/2.png', name: 'David Kato' }
        ]
      }
    ],
    connections: [
      {
        tasks: '1.5k',
        projects: '12',
        isConnected: true,
        connections: '250',
        name: 'Samuel Aine',
        designation: 'Developer',
        avatar: '/images/avatars/1.png',
        chips: [{ title: 'IoT', color: 'success' }]
      }
    ]
  },
  profileHeader: {
    fullName: 'Jane Nakitende',
    location: 'Kampala, Uganda',
    joiningDate: 'March 2022',
    designation: 'Entrepreneur',
    profileImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60',
    designationIcon: 'ri-lightbulb-line',
    coverImg: '/images/pages/profile-banner.png'
  }
}
