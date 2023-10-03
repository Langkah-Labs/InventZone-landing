import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
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
      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        Kickstart Your Inventory Management
      </h2>
      <p className="mt-2 text-sm">
        The Path to Proficiency in Asset Management
      </p>
      <form
        action="#"
        className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
      >
        <TextField
          label="Full name"
          name="full_name"
          type="text"
          autoComplete="full-name"
          required
        />
        <TextField
          label="Company name"
          name="company_name"
          type="text"
          autoComplete="company-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>Online Search (e.g., Google, Bing)</option>
          <option>Word of Mouth (Friend or Family)</option>
          <option>Trade Show or Event</option>
          <option>Blog Post or Article</option>
          <option>
            Advertisement (Specify Platform, e.g., Google Ads, Facebook Ads)
          </option>
        </SelectField>
        <div className="col-span-full mt-4">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Let&apos;s Start <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
