import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

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
    name: 'Be Bold',
    description:
      'The world needs more boldness. But boldness looks different on everyone. We celebrate getting out of your own comfort zone and taking risks, whatever that means for you.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Be True',
    description:
      'We own our authenticity and inspire others to do the same. We celebrate vulnerability and we celebrate our differences— these are what make us human.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Be Kind',
    description:
      'Being kind is different than being nice. Being kind starts with your soul. It means leading with your heart and genuinely hoping for the best for others.',
    icon: BoltIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Be in service',
    description:
      'We own our authenticity and inspire others to do the same. We celebrate vulnerability and we celebrate our differences— these are what make us human.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: 'Be relevant',
    description:
      'The world is changing fast. We keep a pulse on our industry and communities with insatiable curiosity and let the knowledge we gain inform our work.',
    icon: EnvelopeIcon,
  },
  {
    id: 3,
    name: 'Be extraordinary',
    description:
      'Show up every day as your highest self. Build equity in yourself. Build equity in your future. It starts with you and it starts now.',
    icon: EnvelopeIcon,
  },
]

export function MakeLifeEasy() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="">
        <div className="relative max-w-xl lg:max-w-7xl">
          <svg
            className="absolute hidden transform -translate-x-1/2 left-full -translate-y-1/4 lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative">
            <h2 className="... mx-auto  max-w-2xl text-left  text-6xl font-bold tracking-tight text-zinc-800 dark:text-amber-300 sm:text-7xl lg:text-center lg:text-8xl">
              Create impact.
            </h2>
            <h3 className="max-w-3xl mx-auto mt-6 text-2xl font-bold tracking-tight text-left text-zinc-800 dark:text-amber-200 sm:text-3xl lg:text-center lg:text-4xl">
              Create lasting impact and drive ROI with strong personal branding.
            </h3>
          </div>

          <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-amber-200 sm:text-3xl">
                Create lasting impact and drive ROI with strong personal
                branding.
              </h3>
              <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-100">
                Over the years, we’ve learned a thing or two about personal
                branding. And the real truth of the matter is, having a strong
                corporate brand is no longer enough. Your organization is made
                up of countless employees who also represent your business. You
                can leave it to them to do this successfully, or you can give
                them a helping hand.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-xl bg-gradient-to-r from-purple-400 to-pink-600">
                        <item.icon className="w-8 h-8 " aria-hidden="true" />
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
              <div className="py-16 lg:py-24">
                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="relative px-8 py-24 overflow-hidden bg-blue-500 glow-sm rounded-xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                    <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                      <img
                        src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative lg:col-span-2">
                      {/* 
                          <img className="w-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                          */}
                      <blockquote className="mt-6 text-white">
                        <p className="text-xl font-medium ">
                          Working with Djembe Media has allowed us to provide
                          our employees with enablement opportunities that
                          inspire confidence. With this heightened level of
                          confidence we’ve seen team members experiment to grow
                          themselves personally as well as other team members.
                        </p>
                        <footer className="mt-6">
                          <p className="flex flex-col font-medium">
                            <span>Marie Chilvers</span>
                            <span>Marketing VP</span>
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </Container>
  )
}
