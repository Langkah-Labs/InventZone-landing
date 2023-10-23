import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import successIcon from '@/images/success-icon-512x512-qdg1isa0.png'

export default function success() {
  return (
    <div className="mt-24 flex h-screen flex-col items-center justify-start gap-4">
      <Link href="/" aria-label="Home">
        <Logo className="h-10 w-auto" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="w-3/12">
          <Image className="w-full" src={successIcon} alt="" priority />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[#113A5D]">SUCCESS!</h2>
            <h5>
              Your Demo is almost ready <br />
              Check your for confirmation and guide to access the application.
            </h5>
          </div>
          <Link href="/" aria-label="Home">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Back to home <span aria-hidden="true">&larr;</span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
