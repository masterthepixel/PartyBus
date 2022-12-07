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
        <Widget id="b2129wPs"  className="" style={{ width: '100%', height:'600px' }}/>
      </div>
    </Container>
  )
}
