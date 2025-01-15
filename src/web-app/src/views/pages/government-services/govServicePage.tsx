'use client'

import { Typography, Card, CardContent } from '@mui/material'

import Banner from './banner'
import ServiceCard from './service-card'

const services = [
  {
    icon: 'ri-government-line',
    title: 'URA Services',
    description:
      'Access Uganda Revenue Authority services including tax registration, returns filing, and payment of taxes.',
    href: '/government-services/ura'
  },
  {
    icon: 'ri-building-2-line',
    title: 'URSB Services',
    description:
      'Register your business, file annual returns, and access other Uganda Registration Services Bureau services.',
    href: '/government-services/ursb'
  },
  {
    icon: 'ri-community-line',
    title: 'KCCA Services',
    description:
      'Access Kampala Capital City Authority services including trading licenses, permits, and other local government services.',
    href: '/government-services/kcca'
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Business Documentation',
    description: 'Access and submit required business documentation and regulatory compliance forms.',
    href: '/government-services/documentation'
  },
  {
    icon: 'ri-bank-line',
    title: 'Financial Services',
    description: 'Access integrated financial services and make payments for government services.',
    href: '/government-services/financial'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Support Services',
    description: 'Get help and support for accessing and using government services on the platform.',
    href: '/government-services/support'
  }
]

export default function GovernmentServicesPage() {
  return (
    <div className='min-h-screen'>
      <Banner />

      <div className='py-12'>
        <div className='mb-12'>
          <Typography variant='h5' className='mb-2'>
            Available Services
          </Typography>
          <Typography color='text.secondary'>Select from our range of integrated government services</Typography>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <Card className='mt-16'>
          <CardContent className='bg-blue-50 p-6'>
            <div className='flex items-start gap-4'>
              <i className='ri-question-line text-3xl text-primary' aria-hidden='true' />
              <div>
                <Typography variant='h6' className='mb-2'>
                  Need Help?
                </Typography>
                <Typography color='text.secondary'>
                  Our support team is available 24/7 to assist you with accessing government services. Contact us
                  through our support channels.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
