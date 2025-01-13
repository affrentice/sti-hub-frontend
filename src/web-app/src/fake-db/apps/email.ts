// Type Imports
import type { EmailType } from '@/types/apps/emailTypes'

export const db: EmailType = {
  emails: [
    {
      id: 1,
      from: {
        email: 'admin@innovationhub.gov',
        name: 'STI Innovation Hub Admin',
        avatar: '/images/avatars/1.png'
      },
      to: [
        {
          name: 'Project Manager',
          email: 'pm@innovationhub.gov'
        }
      ],
      subject: 'Grant Application Guidelines',
      cc: [],
      bcc: [],
      message:
        '<p>Dear Project Manager,</p><p>Please find the updated guidelines for submitting grant applications.</p><p>Ensure that all proposals align with the strategic goals of the STI Innovation Hub.</p><p>Best regards,</p><p>STI Innovation Hub Admin</p>',
      attachments: [
        {
          fileName: 'Grant_Guidelines.pdf',
          thumbnail: '/images/icons/pdf.png',
          url: '',
          size: '2MB'
        }
      ],
      isStarred: false,
      labels: ['guidelines'],
      time: 'Mon Dec 10 2022 08:30:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true
    },
    {
      id: 2,
      from: {
        email: 'research@universities.org',
        name: 'Dr. Emily Watson',
        avatar: '/images/avatars/2.png'
      },
      to: [
        {
          name: 'Innovation Hub Team',
          email: 'team@innovationhub.gov'
        }
      ],
      subject: 'Research Collaboration Opportunities',
      cc: [],
      bcc: [],
      message:
        '<p>Dear Team,</p><p>I am reaching out to explore potential collaboration opportunities in renewable energy research.</p><p>Looking forward to your response.</p><p>Best regards,</p><p>Dr. Emily Watson</p>',
      attachments: [
        {
          fileName: 'Collaboration_Proposal.docx',
          thumbnail: '/images/icons/doc.png',
          url: '',
          size: '3MB'
        }
      ],
      isStarred: true,
      labels: ['research'],
      time: 'Tue Dec 11 2022 09:00:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true
    },
    {
      id: 3,
      from: {
        email: 'policy@governmentagency.gov',
        name: 'Policy Advisor',
        avatar: '/images/avatars/3.png'
      },
      to: [
        {
          name: 'Hub Director',
          email: 'director@innovationhub.gov'
        }
      ],
      subject: 'Policy Update: Data Sharing Agreements',
      cc: [],
      bcc: [],
      message:
        '<p>Dear Director,</p><p>This is to inform you about recent updates to data-sharing policies for public-private partnerships.</p><p>Please review the attached document and provide feedback.</p><p>Best regards,</p><p>Policy Advisor</p>',
      attachments: [
        {
          fileName: 'Data_Sharing_Policy.pdf',
          thumbnail: '/images/icons/pdf.png',
          url: '',
          size: '1.5MB'
        }
      ],
      isStarred: false,
      labels: ['policy'],
      time: 'Wed Dec 12 2022 10:15:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true
    },
    {
      id: 4,
      from: {
        email: 'events@innovationhub.gov',
        name: 'Event Coordinator',
        avatar: '/images/avatars/4.png'
      },
      to: [
        {
          name: 'Community Engagement Lead',
          email: 'lead@innovationhub.gov'
        }
      ],
      subject: 'Annual Innovation Summit: Invitation',
      cc: [],
      bcc: [],
      message:
        '<p>Dear Engagement Lead,</p><p>You are cordially invited to the Annual Innovation Summit to discuss the latest trends and initiatives in technology and innovation.</p><p>Kindly RSVP by the end of this week.</p><p>Best regards,</p><p>Event Coordinator</p>',
      attachments: [
        {
          fileName: 'Summit_Agenda.pdf',
          thumbnail: '/images/icons/pdf.png',
          url: '',
          size: '1MB'
        }
      ],
      isStarred: true,
      labels: ['event'],
      time: 'Thu Dec 13 2022 11:45:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: false
    },
    {
      id: 5,
      from: {
        email: 'partnerships@globalfunds.org',
        name: 'Global Funds Team',
        avatar: '/images/avatars/5.png'
      },
      to: [
        {
          name: 'Funding Coordinator',
          email: 'funding@innovationhub.gov'
        }
      ],
      subject: 'Grant Approval Notification',
      cc: [],
      bcc: [],
      message:
        '<p>Dear Coordinator,</p><p>Congratulations! Your grant application has been approved. Please review the attached document for further steps.</p><p>Best regards,</p><p>Global Funds Team</p>',
      attachments: [
        {
          fileName: 'Grant_Approval_Details.pdf',
          thumbnail: '/images/icons/pdf.png',
          url: '',
          size: '2.5MB'
        }
      ],
      isStarred: true,
      labels: ['grants'],
      time: 'Fri Dec 14 2022 14:00:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true
    },
    {
      id: 6,
      from: {
        email: 'bposvner0@zdnet.com',
        name: 'Bobbie Posvner',
        avatar: '/images/avatars/8.png'
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@dot.gov'
        }
      ],
      subject: 'Your opinion matters to us. Tell us how you feel!',
      cc: [],
      bcc: [],
      message:
        "<p>Hello John,</p><p>Recently you shopped with us and we know your order has been delivered to you.</p><p>Would you please write a review? It's really important to us.</p><p>Regards,</p><p>Bobbie Posvner</p>",
      attachments: [],
      isStarred: true,
      labels: ['event'],
      time: 'Tue Dec 12 2018 11:55:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'spam',
      isRead: true
    },
    {
      id: 7,
      from: {
        email: 'rgilder1@illinois.edu',
        name: 'Rebecca Gilder',
        avatar: '/images/avatars/6.png'
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@google.co.uk'
        }
      ],
      subject: 'World Tourism Day Event Invitation',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>You have been invited to the World Tourism Day event on this weekend.</p><p>The event starts at 10:00 AM and ends at 5:00PM.</p><p>Regards</p><p>Rebecca Gilder</p>',
      attachments: [],
      isStarred: false,
      labels: ['policy'],
      time: 'Thu Dec 13 2018 08:25:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'trash',
      isRead: true
    },
    {
      id: 8,
      from: {
        email: 'swilby2@yandex.ru',
        name: 'Shawn Wilby',
        avatar: '/images/avatars/1.png'
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@altervista.org'
        }
      ],
      subject: 'Delivery Note',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>Shipping Details:</p><p>Order Number: 82080</p><p>Delivered-to: <strong>John Doe</strong></p><p>Email: <strong>johndoe@altervista.org</strong></p><p>Address: <strong>99 El ABCD San Francisco, CA. United States </strong></p><p>Thank You for being with Us!</p><p>Regards</p><p>Shawn Wilby</p>',
      attachments: [],
      isStarred: false,
      labels: ['grants'],
      time: 'Fri Dec 14 2018 04:49:23 GMT+0000 (GMT)',
      replies: [],
      folder: 'draft',
      isRead: true
    }
  ]
}
