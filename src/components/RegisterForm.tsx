'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/Button'
import { TextField, Label } from '@/components/Fields'
import Monolith from '@/lib/api/monolith'
import { useRouter } from 'next/navigation'

type RegisterInput = {
  name: string
  company: string
  email: string
  password: string
  referral: string
}

export function RegisterForm() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<RegisterInput>()

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    const monolithApi = new Monolith()
    const response = await monolithApi.registerDemo(data)

    if (response?.data.status === 'success') router.replace('/success')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
    >
      <div>
        <Label id="name">Full name</Label>
        <TextField
          {...register('name')}
          type="text"
          autoComplete="name"
          required
        />
      </div>
      <div>
        <Label id="company">Company name</Label>
        <TextField
          {...register('company')}
          type="text"
          autoComplete="company"
          required
        />
      </div>
      <div>
        <Label id="email">Email address</Label>
        <TextField
          {...register('email')}
          type="text"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <Label id="password">Password</Label>
        <TextField
          {...register('password')}
          type="password"
          autoComplete="password"
          required
        />
      </div>
      <div className="col-span-full">
        <Label id="referral">How did you hear about us?</Label>
        <select
          {...register('referral')}
          className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 pr-8 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        >
          <option value="Online Search">
            Online Search (e.g., Google, Bing)
          </option>
          <option value="Word of Mouth">
            Word of Mouth (Friend or Family)
          </option>
          <option value="Trade Show or Event">Trade Show or Event</option>
          <option value="Blog Post or Article">Blog Post or Article</option>
          <option value="Advertisement">
            Advertisement (Specify Platform, e.g., Google Ads, Facebook Ads)
          </option>
        </select>
      </div>
      <div className="col-span-full mt-4">
        <Button type="submit" variant="solid" color="blue" className="w-full">
          <span>
            Let&apos;s Start <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </form>
  )
}
