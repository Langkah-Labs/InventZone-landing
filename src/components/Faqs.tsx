import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is the Inventory Asset Management System?',
      answer:
        'The Inventory Asset Management System is a comprehensive suite of applications designed to help businesses efficiently manage their inventory and assets. It consists of four key applications: Warehouse Web-App, Mobile App, Report Web-App, and Vendor Web-App, each serving a specific purpose in streamlining inventory management.',
    },
    {
      question: 'Is this system customizable to our business needs?',
      answer:
        ' Yes, the Inventory Asset Management System is highly customizable. You can tailor it to fit your business’s unique requirements, ensuring that it aligns perfectly with your inventory management processes.',
    },
    {
      question: 'Can multiple users access these apps simultaneously?',
      answer:
        'Yes, these apps are designed to support multiple users. You can have your team collaborate and input data simultaneously to enhance efficiency.',
    },
    {
      question:
        'Is there a mobile app available for both Android and iOS platforms?',
      answer:
        'No, our Mobile App is available only for Android. You can download it from the respective app stores.',
    },
    {
      question: 'What kind of support and training do you offer for users?',
      answer:
        'We offer comprehensive training and support to ensure you get the most out of our Inventory Asset Management System. This includes user guides, video tutorials, and responsive customer support to address any questions or issues you may have.',
    },
  ],
  [
    {
      question: 'Is there a trial period or demo available for these apps?',
      answer:
        'Yes, we offer a trial period and a demo of our Inventory Asset Management System. Contact our sales team to schedule a demo or inquire about a trial period to explore the capabilities of our applications.',
    },
    {
      question:
        'How can I get started with the Inventory Asset Management System for my business?',
      answer:
        'Getting started is easy! Contact our sales team, and they will guide you through the onboarding process, including customization and training, ensuring a smooth transition to our system.',
    },
    {
      question: 'What kind of businesses can benefit from this system?',
      answer:
        'The Inventory Asset Management System is versatile and can benefit a wide range of businesses, from small retailers to large enterprises. Whether you manage inventory in a warehouse, retail store, or any other settings, our system can help streamline your operations.',
    },
  ],
  [
    {
      question: 'Is my data secure with your system?',
      answer:
        'Yes, we take data security seriously. Our system employs industry-standard security measures to protect your data. We use encryption and access controls to ensure the confidentiality and integrity of your information.',
    },
    {
      question:
        'Can I integrate this system with my existing software or systems?',
      answer:
        'Yes, our system is designed with integration capabilities in mind. We can work with you to integrate it seamlessly with your existing software or systems to ensure a unified and efficient workflow.',
    },
    {
      question:
        'Can I request additional features or customizations for the system?',
      answer:
        'Absolutely! We understand that businesses have unique needs. We offer the flexibility to request additional features or customizations to ensure that the system aligns perfectly with your operations. Contact our support team to discuss your specific requirements.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Find out any details on what you want to know here – your questions,
            our responses.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
