// Type Imports
import type { FaqType } from '@/types/pages/faqTypes'

export const db: FaqType[] = [
  {
    id: 'data-security',
    title: 'Data Security',
    icon: 'ri-lock-line',
    subtitle: 'Learn about our data protection measures',
    questionsAnswers: [
      {
        id: 'data-encryption',
        question: 'How is my data protected?',
        answer:
          'We use advanced encryption methods to protect your data, both in transit and at rest. This ensures unauthorized access is prevented at all stages.'
      },
      {
        id: 'data-access',
        question: 'Who has access to my data?',
        answer:
          'Only authorized personnel with strict authentication measures have access to your data. We adhere to GDPR and other regulatory standards.'
      },
      {
        id: 'data-retention',
        question: 'How long do you retain my data?',
        answer:
          'Your data is retained only as long as necessary to fulfill the purposes outlined in our privacy policy or as required by law.'
      }
    ]
  },

  {
    id: 'user-support',
    title: 'User Support',
    icon: 'ri-customer-service-line',
    subtitle: 'Assistance with your account and features',
    questionsAnswers: [
      {
        id: 'account-issues',
        question: 'What should I do if I have trouble accessing my account?',
        answer:
          'If you experience issues accessing your account, reset your password using the “Forgot Password” link or contact our support team for assistance.'
      },
      {
        id: 'feature-requests',
        question: 'Can I request a new feature?',
        answer:
          'Yes, we welcome user feedback! Submit your feature requests via the feedback section of your dashboard or contact our support team.'
      },
      {
        id: 'tutorials-guides',
        question: 'Where can I find tutorials and guides?',
        answer:
          'Visit the Resources section on our website to access comprehensive tutorials, guides, and FAQs designed to help you get the most out of our platform.'
      }
    ]
  },

  {
    id: 'subscriptions',
    title: 'Subscriptions',
    icon: 'ri-calendar-check-line',
    subtitle: 'Manage your subscription and billing',
    questionsAnswers: [
      {
        id: 'subscription-renewal',
        question: 'Does my subscription renew automatically?',
        answer:
          'Yes, subscriptions renew automatically unless canceled. You can manage your subscription settings in your account dashboard.'
      },
      {
        id: 'subscription-upgrade',
        question: 'How do I upgrade my subscription?',
        answer:
          'To upgrade your subscription, navigate to the Billing section of your dashboard and select the desired plan.'
      },
      {
        id: 'cancellation-policy',
        question: 'What is your cancellation policy?',
        answer:
          'You can cancel your subscription anytime. Refunds are processed as per the terms outlined in our refund policy.'
      }
    ]
  },

  {
    id: 'platform-usage',
    title: 'Platform Usage',
    icon: 'ri-tools-line',
    subtitle: 'Learn how to use our platform effectively',
    questionsAnswers: [
      {
        id: 'platform-navigation',
        question: 'How do I navigate the platform?',
        answer:
          'Our platform is designed with user-friendly navigation. Visit the Help section for a walkthrough or use the search bar to locate specific features.'
      },
      {
        id: 'integrations',
        question: 'Can I integrate third-party tools?',
        answer:
          'Yes, our platform supports integrations with various third-party tools. Check the Integrations section in the settings for supported tools and setup guides.'
      },
      {
        id: 'troubleshooting',
        question: 'What should I do if I encounter a technical issue?',
        answer:
          'For technical issues, visit our Support Center for troubleshooting tips or contact our technical support team for prompt assistance.'
      }
    ]
  },

  {
    id: 'compliance',
    title: 'Compliance',
    icon: 'ri-shield-check-line',
    subtitle: 'Understand our compliance standards',
    questionsAnswers: [
      {
        id: 'compliance-certifications',
        question: 'What compliance certifications do you have?',
        answer:
          'We adhere to international standards such as ISO 27001 and are compliant with GDPR, CCPA, and other relevant regulations.'
      },
      {
        id: 'audit-reports',
        question: 'Can I access your audit reports?',
        answer:
          'Yes, audit reports are available upon request for enterprise users. Contact our compliance team for more information.'
      },
      {
        id: 'reporting-violations',
        question: 'How can I report a compliance violation?',
        answer:
          'To report a compliance violation, contact our compliance officer via the email provided in our Compliance section.'
      }
    ]
  }
]
