import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/image'
import CaseStudyAPhoto from '../images/img-simplybe-beamsuntorycase@2x.png'

import {
  BoltIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'

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

export function CaseStudyA() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="relative ">
        <div className="glow-sm h-56 rounded-xl sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 ">
          <Image
            className="rounded-2xl object-cover"
            src={CaseStudyAPhoto}
            width={1154}
            height={700}
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h3 className="bg-gradient-to-tr from-blue-500 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent">
              Meet one of our premiere clients who have experienced the ROI of
              personal branding
            </h3>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-100">
              Activating leadership through a corporate personal branding
              program that engages, motivates and positions Beam Suntory’s
              On-Premise team as experts in spirits and innovative leaders in
              the industry.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow ">
                <a
                  href="#"
                  className="bg inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-gray-50 dark:bg-blue-600 dark:text-amber-300"
                >
                  Let your light shine today
                  <ArrowTopRightOnSquareIcon
                    className="ml-3 -mr-1 h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
