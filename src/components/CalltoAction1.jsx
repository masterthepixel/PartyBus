import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/image'

import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'

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
    id: 3,
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
    id: 3,
    name: 'Be Extraordinary',
    description:
      'Show up every day as your highest self. Build equity in yourself. Build equity in your future. It starts with you and it starts now.',
    icon: EnvelopeIcon,
  },
]

export function CaseStudyA() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="overflow-hidden">
        <div className="relative max-w-xl lg:max-w-7xl">
          <div className="relative">
            <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-left text-zinc-800 dark:text-amber-300 sm:text-5xl lg:text-center">
              Everything is brand.
            </h2>
            <p className="max-w-3xl mx-auto mt-6 text-xl text-zinc-600 dark:text-zinc-100 lg:text-center">
              Create lasting impact and drive ROI with strong personal branding.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-zinc-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
            </div>
          </div>

          <svg
            className="absolute hidden transform translate-x-1/2 translate-y-12 right-full lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-zinc-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-amber-200 sm:text-3xl">
                  Define your personal branding strategy with Djembe Mediato
                  create maximum impact.{' '}
                </h3>
                <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-100">
                  Djembe Mediateaches people how to leverage the most essential
                  asset in the world today: an authentic personal brand. Our
                  work together will give you the clarity and foundation you
                  need in order to identify your voice, scale your platform,
                  attract more opportunities and become known as a true thought
                  leading brand.
                </p>

                <dl className="mt-10 space-y-10">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-xl bg-gradient-to-r from-purple-400 to-pink-600">
                          <item.icon className="w-8 h-8" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-zinc-600 dark:text-amber-200">
                          {item.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-zinc-600 dark:text-zinc-100">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative mt-10 -mx-4 lg:col-start-1 lg:mt-0">
                <svg
                  className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-zinc-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <div className="py-16 lg:py-24">
                  <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative px-8 py-24 overflow-hidden bg-blue-500 shadow-2xl rounded-xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                      <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                        <Image
                          className="w-auto h-12"
                          src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                          alt=""
                          width={200}
                          height={50}
                        />
                      </div>
                      <div className="relative lg:col-span-1">
                        <Image
                            className="w-auto h-12"
                            src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                            alt=""
                            width={200}
                            height={50}
                          />
                        <blockquote className="mt-6 text-white">
                          <p className="text-xl font-medium sm:text-2xl">
                            This app has completely transformed how we interact
                            with customers. We have seen record bookings, higher
                            customer satisfaction, and reduced churn.
                          </p>
                          <footer className="mt-6">
                            <p className="flex flex-col font-medium">
                              <span>Marie Chilvers</span>
                              <span>CEO, Workcation</span>
                            </p>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
