import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField, Label } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-12 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <div>
          <Label id="first_name">First name</Label>
          <TextField
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <Label id="last_name">Last name</Label>
          <TextField
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
        </div>
        <div>
          <Label id="email">Email address</Label>
          <TextField
            className="col-span-full"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <Label id="password">Password</Label>
          <TextField
            className="col-span-full"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>
        <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>AltaVista search</option>
          <option>Super Bowl commercial</option>
          <option>Our route 34 city bus ad</option>
          <option>The “Never Use This” podcast</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
