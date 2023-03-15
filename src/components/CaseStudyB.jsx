import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from "next/legacy/image"

import {
    BoltIcon, ArrowTopRightOnSquareIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon } from '@heroicons/react/24/outline'

const transferFeatures = [
    {
      id: 1,
      name: 'Be in Service',
      description:
        'We own our authenticity and inspire others to do the same. We celebrate vulnerability and we celebrate our differences— these are what make us human.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Be Relevant',
      description:
        'The world is changing fast. We keep a pulse on our industry and communities with insatiable curiosity and let the knowledge we gain inform our work.',
      icon: EnvelopeIcon,
    },
    {
      id: 2,
      name: 'Be Extraordinary',
      description:
        'Show up every day as your highest self. Build equity in yourself. Build equity in your future. It starts with you and it starts now.',
      icon: EnvelopeIcon,
    },
  ]
  const communicationFeatures = [
    {
      id: 1,
      name: 'Be In Service',
      description:
        'We own our authenticity and inspire others to do the same. We celebrate vulnerability and we celebrate our differences— these are what make us human.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Be Relevant',
      description:
        'The world is changing fast. We keep a pulse on our industry and communities with insatiable curiosity and let the knowledge we gain inform our work.',
      icon: EnvelopeIcon,
    },
    {
      id: 2,
      name: 'Be Extraordinary',
      description:
        'Show up every day as your highest self. Build equity in yourself. Build equity in your future. It starts with you and it starts now.',
      icon: EnvelopeIcon,
    },
  ]

export function CaseStudyB() {
  return (
    <Container className="mt-16 sm:mt-32">
        <div className="">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="p-8 bg-blue-600 md:p-12 lg:px-16 lg:py-24">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-tr from-amber-200 to-yellow-400 bg-clip-text">
                        Meet one of our thought leaders whose voice is heard around the world.
                    </h2>
                    <p className="hidden text-white/90 sm:mt-4 sm:block">
                        Larry Jordan, President & Founder, Wi-Tronix, is disrupting the transportation industry at large with a powerful futurist perspective and personal brand platform built on technology, innovation, and its effect on all of us.
                    </p>
                    <div className="mt-4 md:mt-8">
                        <div className="inline-flex rounded-md shadow ">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md dark:bg-blue-600 dark:text-amber-300 bg hover:bg-gray-50"
                        >
                            Let your light shine today
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-3 -mr-1 text-amber-300" aria-hidden="true" />
                        </a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                  <Image
                    alt="Student"
                    src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                    className="object-cover w-full h-40 sm:h-56 md:h-full"
                    width={654}
                    height={308}
                  />
                  <Image
                    alt="Student"
                    src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="object-cover w-full h-40 sm:h-56 md:h-full"
                    width={774}
                    height={516}
                  />
                </div>

            </div>
        </div>
    </Container>
  )
}
