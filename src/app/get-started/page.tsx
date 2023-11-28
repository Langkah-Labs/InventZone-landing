import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { RegisterForm } from '@/components/RegisterForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-2 text-3xl font-bold text-[#113A5D]">
        Kickstart Your Inventory Management
      </h2>
      <p className="mt-2 text-sm text-slate-700">
        The Path to Proficiency in Asset Management
      </p>
      <RegisterForm />
    </SlimLayout>
  )
}
