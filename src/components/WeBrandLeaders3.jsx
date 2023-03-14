import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/image'

const stats = [
    { label: 'Video production', value: '2021' },
    { label: 'Ghostwriting', value: '5' },
    { label: 'Brand identity and strategy development', value: '521' },
    { label: 'Long form and short form copywriting', value: '$25M' },
    { label: 'Podcast production', value: '$25M' },
    { label: 'Email marketing', value: '$25M' },
    { label: 'Events and activations strategy', value: '$25M' },
    { label: 'Social Media', value: '$25M' },
    { label: 'Photography', value: '$25M' },
    { label: 'Public Relations', value: '$25M' },

  ]

    export function WeBrandLeaders3() {
        return (
          <Container className="mt-16 sm:mt-32">
            <div className="relative ">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                    <div className="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div className="absolute inset-y-0 w-full right-1/2 rounded-r-3xl lg:right-72" />
                        <svg
                        className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
                        width={404}
                        height={392}
                        fill="none"
                        viewBox="0 0 404 392"
                        >
                        <defs>
                            <pattern
                            id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                            >
                            <rect x={0} y={0} width={4} height={4} className="text-zinc-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                        </svg>
                    </div>
                    <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative pt-64 pb-10 overflow-hidden glow-sm rounded-2xl">
                        <Image
                            className="absolute inset-0 object-cover w-full h-full"
                            src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                            alt=""
                            width={1440}
                            height={1440}
                            objectFit="cover"
                        />

                        <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-600 opacity-90" />
                        <div className="relative px-8">
                            <div>
                                <Image
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                                    alt="Workcation"
                                    width={200}
                                    height={50}
                                />

                            </div>
                            <blockquote className="mt-8">
                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                <svg
                                className="absolute top-0 left-0 w-8 h-8 text-blue-400 transform -translate-x-3 -translate-y-2"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="relative">
                                    As someone who has worked with tons of PR and Marketing firms, Djembe Mediahas far exceeded my expectations in a myriad of ways. Their approach is unique and extremely effective. I continue to be impressed with not only the consistent work and results they deliver, but also the pliable nature of my entire team. Their seamless ability to effortlessly shift gears when needed, is impressive and comforting. 
                                </p>
                            </div>

                            <footer className="mt-4">
                                <p className="text-base font-semibold text-blue-200">Alli Web, Founder Drybar</p>
                            </footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-6xl font-bold tracking-tight text-zinc-800 dark:text-amber-300 ">
                        We offer comprehensive brand support including but not limited to the following mediums:
                        </h2>
                        <div className="mt-6 space-y-6 text-zinc-600 dark:text-zinc-100 ">
                            <p className="text-lg">
                             If you are eager to grow yourself to attract more opportunities and revenue, and you have time to dedicate to building your personal brand platform but you need a team to help you, Djembe Mediais the partner for you. We can help you clarify your message and define a personal branding strategy to create maximum impact.
                            </p>
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className="mt-10">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="pt-6 border-t-2 border-gray-100">
                                <dt className="text-base font-medium dark:text-amber-300 text-zinc-600">{stat.label}</dt>
                            </div>
                        ))}
                        </dl>
                        <div className="mt-10">
                        <a href="#" className="text-base font-medium text-blue-600 dark:text-blue-400">
                            Learn more about how we are changing the world
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </Container>
          
        )
      }