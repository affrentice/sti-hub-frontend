// Type Imports
import type { ChatDataType } from '@/types/apps/chatTypes'

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2)

export const db: ChatDataType = {
  profileUser: {
    id: 1,
    avatar: '/images/avatars/1.png',
    fullName: 'John Doe',
    role: 'Innovation Hub Admin',
    about:
      'Administrator managing matchmaking, resource sharing, and project collaboration across the STI Innovation Hub.',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: true
    }
  },
  contacts: [
    {
      id: 2,
      fullName: 'Felecia Rower',
      role: 'Entrepreneur',
      about: 'Looking for investors to scale innovative tech solutions.',
      avatar: '/images/avatars/2.png',
      status: 'offline'
    },
    {
      id: 3,
      fullName: 'Adalberto Granzin',
      role: 'BDS Provider',
      about: 'Offering business development services for startups.',
      avatarColor: 'primary',
      status: 'busy'
    },
    {
      id: 4,
      fullName: 'Joaquina Weisenborn',
      role: 'Government Representative',
      about: 'Facilitating grants and policy support for innovation.',
      avatar: '/images/avatars/8.png',
      status: 'busy'
    },
    {
      id: 5,
      fullName: 'Margot Henschke',
      role: 'Investor',
      about: 'Seeking innovative projects to fund in clean energy and AI.',
      avatarColor: 'success',
      status: 'busy'
    },
    {
      id: 6,
      avatarColor: 'warning',
      fullName: 'Bridgett Omohundro',
      role: 'Researcher',
      about: 'Conducting studies in sustainable agriculture technologies.',
      status: 'offline'
    },
    {
      id: 7,
      fullName: 'Sal Piggee',
      role: 'Community Manager',
      about: 'Engaging stakeholders through forums and events.',
      avatarColor: 'info',
      status: 'online'
    },
    {
      id: 8,
      fullName: 'Miguel Guelff',
      role: 'Grant Officer',
      about: 'Connecting entrepreneurs with funding opportunities.',
      avatar: '/images/avatars/7.png',
      status: 'online'
    },
    {
      id: 9,
      fullName: 'Mauro Elenbaas',
      role: 'Policy Advisor',
      about: 'Advising on regulatory compliance and public-private partnerships.',
      avatarColor: 'success',
      status: 'away'
    },
    {
      id: 10,
      avatarColor: 'error',
      fullName: 'Zenia Jacobs',
      role: 'Project Manager',
      about: 'Managing cross-sector collaboration projects for innovation.',
      status: 'away'
    },
    {
      id: 11,
      fullName: 'Ramonita Veras',
      role: 'CEO of Startup X',
      about: 'Leading a fast-growing tech startup in e-commerce logistics.',
      avatar: '/images/avatars/4.png',
      status: 'online'
    },
    {
      id: 12,
      fullName: 'Lashawna Gotschall',
      role: 'Mentor',
      about: 'Providing mentorship to young entrepreneurs in fintech.',
      avatarColor: 'info',
      status: 'online'
    },
    {
      id: 13,
      fullName: 'Rosalva Uyetake',
      role: 'Civil Engineer',
      about: 'Consulting on infrastructure projects with innovative designs.',
      avatar: '/images/avatars/6.png',
      status: 'offline'
    },
    {
      id: 14,
      fullName: 'Cecilia Shockey',
      role: 'Database Administrator',
      about: 'Optimizing databases for analytics and decision-making.',
      avatarColor: 'secondary',
      status: 'busy'
    },
    {
      id: 15,
      fullName: 'Harriett Duropan',
      role: 'Marketing Strategist',
      about: 'Designing campaigns for tech startups and innovation hubs.',
      avatar: '/images/avatars/5.png',
      status: 'online'
    },
    {
      id: 16,
      fullName: 'Lauran Starner',
      role: 'AI Specialist',
      about: 'Developing machine learning models for fintech applications.',
      avatarColor: 'warning',
      status: 'online'
    },
    {
      id: 17,
      fullName: 'Verla Morgano',
      role: 'Data Scientist',
      about: 'Analyzing user data to identify market opportunities.',
      avatar: '/images/avatars/3.png',
      status: 'online'
    },
    {
      id: 18,
      fullName: 'Eliot Vaughn',
      role: 'Event Coordinator',
      about: 'Organizing innovation-focused workshops and networking sessions.',
      avatar: '/images/avatars/9.png',
      status: 'online'
    },
    {
      id: 19,
      fullName: 'Amara Kendrick',
      role: 'Policy Analyst',
      about: 'Providing insights on emerging trends in innovation policies.',
      avatar: '/images/avatars/10.png',
      status: 'busy'
    }
  ],
  chats: [
    {
      id: 1,
      userId: 2,
      unseenMsgs: 1,
      chat: [
        {
          message: 'Hi, I am looking for investors for my tech solution.',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 2
        },
        {
          message: 'Sure, I can connect you to potential investors.',
          time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
          senderId: 1
        },
        {
          message: 'Thank you! What are the next steps?',
          time: previousDay,
          senderId: 2
        }
      ]
    },
    {
      id: 2,
      userId: 4,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hello, I would like more details about the latest grant.',
          time: 'Mon Dec 11 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 4
        },
        {
          message: 'Sure, I will send you the details shortly.',
          time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
          senderId: 1
        },
        {
          message: 'Could I expect the details today?',
          time: dayBeforePreviousDay,
          senderId: 4
        }
      ]
    },
    {
      id: 3,
      userId: 16,
      unseenMsgs: 2,
      chat: [
        {
          message: 'I have some ideas for improving our AI models.',
          time: 'Mon Dec 13 2021 09:00:00 GMT+0000 (GMT)',
          senderId: 16
        },
        {
          message: 'Great! Let’s discuss them in detail.',
          time: 'Mon Dec 13 2021 09:01:00 GMT+0000 (GMT)',
          senderId: 1
        }
      ]
    },
    {
      id: 4,
      userId: 19,
      unseenMsgs: 0,
      chat: [
        {
          message: 'I have prepared an analysis of innovation trends.',
          time: 'Mon Dec 15 2021 10:00:00 GMT+0000 (GMT)',
          senderId: 19
        },
        {
          message: 'Thank you! Can you share it by the end of today?',
          time: 'Mon Dec 15 2021 10:05:00 GMT+0000 (GMT)',
          senderId: 1
        }
      ]
    }
  ]
}
