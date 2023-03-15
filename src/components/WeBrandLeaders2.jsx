import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from "next/legacy/image"


    export function WeBrandLeaders2() {
        return (
          <Container className="mt-16 sm:mt-32">
            <div className="overflow-hidden ">
                <div className="px-4 mx-auto space-y-8 max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto text-base max-w-prose lg:max-w-none">
                        <h2 className="text-lg font-semibold dark:text-amber-100 text-zinc-600">Creating a personal brand is not something that happens overnight.</h2>
                        <p className="mt-2 text-6xl font-bold leading-8 tracking-tight text-zinc-800 dark:text-amber-300 sm:text-7xl lg:text-8xl">
                            You are your brand, and your brand is you.
                        </p>
                    </div>
                    <div className="relative z-10 mx-auto text-base max-w-prose lg:mx-0 lg:max-w-5xl lg:pr-72">
                        <p className="text-lg text-zinc-600 dark:text-white">
                        It’s a strategic long game. Creating a personal brand requires clarity, consistency and constancy in order to build a platform that resonates with and attracts your ideal opportunities, audiences and revenue.
                        </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
                    <div className="relative z-10">
                        <div className="mx-auto prose ext-zinc-600 dark:text-zinc-200 prose-blue lg:max-w-none">
                            <p>
                                We routinely work with real estate agents, c-suite executives, corporate directors and managers, doctors and healthcare practitioners, attorneys, non-profit executives, leaders in tech, creatives, entrepreneurs and more. Regardless of industry our clients seek to:
                            </p>
                            <ul className="ml-6 list-disc list-outside dark:text-white marker:text-zinc-600 dark:marker:text-white" role="list-inside">
                                <li className=''>Home in on a unique brand message and define their place in the market</li>
                                <li>Build awareness and credibility amongst other key industry leaders</li>
                                <li>Craft a strategic platform with which to amplify that message as well as increase their exposure to new audiences</li>
                                <li>Craft a strategic platform with which to amplify that message as well as increase their exposure to new audiences</li>
                                <li>Engage their teams and empower them to become highly motivated individuals and brand ambassadors</li>
                                <li>Receive guidance amidst career transitions for short term goals and long term brand vision</li>
                                <li>Create a personal brand in order to stand out in their respective industries in an increasingly digital world</li>
                            </ul>
                        </div>
                        <div className="flex mx-auto mt-10 text-base max-w-prose lg:max-w-none">
                        <div className="rounded-md shadow">
                            <a
                            href="#"
                            className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white uppercase bg-blue-600 border border-transparent rounded-md hover:bg-green-700"
                            >
                            Work with us
                            </a>
                        </div>
                        
                        </div>
                    </div>
                    <div className="relative mx-auto mt-12 text-base max-w-prose lg:mt-0 lg:max-w-none">
                        <svg
                        className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                        >
                        <defs>
                            <pattern
                            id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                            >
                            <rect x={0} y={0} width={4} height={4} className="text-zinc-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                        </svg>
                        <blockquote className="relative bg-white rounded-lg shadow-lg">
                        <div className="px-6 py-8 rounded-t-lg sm:px-10 sm:pt-10 sm:pb-8">
                            <Image
                                src="https://tailwindui.com/img/logos/workcation-logo-blue-600-mark-gray-800-and-blue-600-text.svg"
                                alt="Workcation"
                                className="h-8"
                                width={280}
                                height={64}
                            />
                            <div className="relative mt-8 text-lg font-medium text-zinc-700">
                            <svg
                                className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-zinc-200"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                            >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="relative">
                                As someone who has worked with tons of PR and Marketing firms, SimplyBe. has far exceeded my expectations in a myriad of ways. Their approach is unique and extremely effective. I continue to be impressed with not only the consistent work and results they deliver, but also the pliable nature of my entire team. Their seamless ability to effortlessly shift gears when needed, is impressive and comforting. 
                            </p>
                            </div>
                        </div>
                        <cite className="relative flex items-center px-6 py-5 not-italic bg-blue-600 rounded-b-lg sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                            <span className="relative border-2 border-white rounded-full sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                            <Image
                                className="w-12 h-12 bg-blue-300 rounded-full sm:h-20 sm:w-20"
                                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                                alt=""
                                width={80}
                                height={80}
                            />
                            </span>
                            <span className="relative ml-4 font-semibold leading-6 text-blue-300 sm:ml-24 sm:pl-1">
                            <span className="font-semibold text-white sm:inline">Alli Webb</span>{' '}
                            <span className="sm:inline">Founder, Drybar</span>
                            </span>
                        </cite>
                        </blockquote>
                    </div>
                    </div>
                </div>
            </div>
          </Container>
          
        )
      }