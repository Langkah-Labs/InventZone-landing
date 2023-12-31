import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section id="get-started-today" className="relative overflow-hidden py-32">
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-[#113A5D] sm:text-4xl">
            Experience the seamless inventory management today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Take the first step towards smoother inventory control. Let us help
            make your work easier!
          </p>
          <Button href="/get-started" color="blue" className="mt-10">
            Try it today!
          </Button>
        </div>
      </Container>
    </section>
  )
}
