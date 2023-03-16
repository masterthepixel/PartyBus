import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import harborwheelImage from '@/images/harborwheel.png'
import businteriorImage from '@/images/businterior.jpg'
import Image from 'next/image'

import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline'

const transferFeatures = [
  {
    id: 1,
    name: 'Sporting Events',
    description:
      'Whether it is a professional sports team, a college team, or even a high school or junior high team that you are going to watch play with a large group of family members, there is no better way to get to the game than on a fully equipped party bus.',
    icon: HandThumbUpIcon,
  },
  {
    id: 2,
    name: 'Bachelor & Bachelorette Parties',
    description:
      'That final night of freedom is not best spent driving around in a cramped car, and is much better suited to traveling in luxurious style with all your friends in a spacious party bus. There is no better choice for that wild night out on the town.',
    icon: HandThumbUpIcon,
  },
  {
    id: 3,
    name: 'Weddings',
    description:
      'After that incredible bachelor or bachelorette party, you`ll certainly want to take advantage of our services again for your wedding. After all, there is no more stylish and contemporary mode of transportation to get you to and from all your wedding destinations, from the church or wedding venue to the reception and perhaps even to the honeymoon destination if it happens to be within driving distance! We have special wedding packages available for you, so be sure to ask about them when you call.',
    icon: HandThumbUpIcon,
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
    <Container className="mt-16 font-body sm:mt-32">
      <div className="">
        <div className="relative max-w-xl lg:max-w-7xl ">
          <Image
            src={harborwheelImage}
            alt=""
            sizes=""
            className="w-82 absolute inset-y-0 right-0 hidden lg:block"
          />
          {/* 
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
          */}

          <div className="relative">
            <h2 className=" ...  mx-auto max-w-2xl bg-gradient-to-b from-sky-600 to-blue-500 bg-clip-text py-8 font-body text-5xl font-[600] tracking-tighter text-transparent drop-shadow-lg filter dark:text-amber-300 lg:py-16 lg:text-center lg:text-6xl">
              About Pro-Bus
            </h2>
          </div>

          <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-left text-xl font-bold leading-snug tracking-tight text-zinc-800 dark:text-amber-200 sm:text-2xl">
                For the best luxury transportation provider in the DMV,
                you&rsquo;ve come to the right place.
              </h3>
              <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-100">
                Our party bus offers the most convenient and stylish way of
                transportation. Don&rsquo;t let bad traffic, fighting for
                parking spaces, or the quest of finding someone to be your
                designated driver ruin your day or night out. With a one of
                luxury vehicles you and your guests are guaranteed to enjoy all
                that the city has to offer in the most luxurious way possible.
                Let our team show you around the hottest spots in the area - no
                matter the event, itinerary or schedule, we&rsquo;re able to
                accommodate it.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                        <item.icon className="h-8 w-8 " aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-bold leading-6 text-zinc-600 dark:text-amber-200">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base font-normal text-zinc-600 dark:text-zinc-100">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
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
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="glow-sm relative overflow-hidden rounded-xl bg-blue-500 px-8 py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                    <div className="saturate-90 absolute inset-0 opacity-95 mix-blend-multiply filter">
                      <Image
                        src={businteriorImage}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative lg:col-span-2">
                      {/* 
                          <img className="w-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                          */}
                      <blockquote className="mt-6 text-white">
                        <p className="text-xl font-medium ">
                          I had a really fun time with Pro-Bus this past
                          weekend. Our driver was really nice and did a great
                          job. The bus was really clean and arrived on time. Our
                          driver was also very friendly and made sure everyone
                          was having a good time. I would definitely use them
                          again and tell my friends to use them too. Thanks for
                          the great time!
                        </p>
                        <footer className="mt-6">
                          <p className="flex flex-col font-medium">
                            <span>Marie Chilvers</span>
                            <span>Washington, DC</span>
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
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
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
