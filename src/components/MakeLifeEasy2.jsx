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
  HandThumbUpIcon
} from '@heroicons/react/24/outline'

const communicationFeatures = [
  {
    id: 1,
    name: 'Concerts',
    description:
      'When you are going to see that exciting music act that you have been dying to see, whether it is at an arena or at a smaller venue, it is always fun to gather a bunch of your friends together and rent a party bus to take you to the concert and back. You can keep the concert going all the way home too!',
    icon: HandThumbUpIcon,
  },
  {
    id: 2,
    name: 'Wine Tours',
    description:
      'During the day you can dine outdoors among the vines with a picnic lunch at a scenic winery, or delight yourself at one of the many renowned and unique Virginia restaurants. Most of our wine tours take between five and seven hours, depending on the region and your dining choices. Call now to ask about our rental packages, special rates, and selecting the right vehicle to rent for your party.',
    icon: HandThumbUpIcon,
  },
  {
    id: 3,
    name: 'Club & Bar Hopping',
    description:
      'The DMV is known for some of the hottest night clubs in the world. We want to make your night as enjoyable and thrilling as possible. We can make it a night that you will never forget, but one that you do not have to remember! Our team wants you to have the night of your life without having to worry about electing a designated driver. ',
    icon: HandThumbUpIcon,
  },
]
const transferFeatures = [
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

export function MakeLifeEasy2() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="">
        <div className="relative max-w-xl lg:max-w-7xl">
          <div className="relative">
            <h2 className="max-w-2xl mx-auto text-6xl font-bold tracking-tight text-left text-zinc-800 dark:text-amber-300 sm:text-7xl lg:text-center lg:text-8xl">
              Enjoy the ride with Pro-Bus
            </h2>
          </div>

          <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative -mx-4 lg:mt-0" aria-hidden="true">
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

          <div className="relative ">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold text-left">
                  Travel and party in style, we will take you where you want to go{' '}
                </h3>
                <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-100">
                With high quality amenities, exceptional customer service, and a commitment to safety, you can rest easier knowing your transportation is completely taken care of.
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
                    <div className="relative px-8 py-24 overflow-hidden bg-blue-500 glow-sm rounded-xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                      <div className="absolute inset-0 opacity-90 mix-blend-multiply saturate-50 filter">
                        <img
                          src="https://images.unsplash.com/photo-1583318432730-a19c89692612?ixlib=rb-4.2.1&auto=format&fit=crop&w=1216&q=80"
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="relative lg:col-span-2">
                        {/* 
                            <img className="w-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                            */}
                        <blockquote className="text-white ">
                          <p className="text-base font-medium ">
                          As a mom having to coordinate a party bus to transport teenagers to and from their dance, it caused some anxiety. Pro-Bus helped to ease my anxiety by explaining their typical homecoming pick up and drop off. I was impressed with their quick response, promptness for pick up and drop off. The driver was courteous and helpful teaching the teens the Bluetooth music setup. They were all in good hands.”
                          </p>
                          <footer className="mt-6">
                            <p className="flex flex-col font-medium">
                              <span>Erin Coupe</span>
                              <span>Rockville, MD</span>
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
