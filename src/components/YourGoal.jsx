import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from "next/legacy/image"
import { Widget } from '@typeform/embed-react'
import '@typeform/embed/build/css/widget.css'

// import portraitImage from '/images/avatar.jpg'



export function YourGoal() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl ">
        <div className="relative">
            {/* 
            <h2 className="... mx-auto  max-w-2xl h1-h2">
              Book Your Event
            </h2>
            <h3 className="max-w-3xl py-6 mx-auto h3-text">
              Create lasting memories.
            </h3>
            */}
          </div>
        <Widget id="b2129wPs"  className="" style={{ width: '100%', height:'600px' }}/>
      </div>
    </Container>
  )
}
