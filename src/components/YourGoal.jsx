import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/image'
import { Widget } from '@typeform/embed-react'
import '@typeform/embed/build/css/widget.css'

// import portraitImage from '/images/avatar.jpg'



export function YourGoal() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl ">
        <div className="relative">
            <h2 className="... mx-auto  max-w-2xl text-left  text-5xl font-bold tracking-tight text-zinc-800 dark:text-amber-300 sm:text-6xl lg:text-center lg:text-7xl">
              Book Your Event
            </h2>
            <h3 className="max-w-3xl py-6 mx-auto text-2xl font-bold tracking-tight text-left text-zinc-800 dark:text-amber-200 sm:text-3xl lg:text-center lg:text-4xl">
              Create lasting memories.
            </h3>
          </div>
        <Widget id="b2129wPs"  className="" style={{ width: '100%', height:'600px' }}/>
      </div>
    </Container>
  )
}
