import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { Disclosure } from '@headlessui/react'
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/solid'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export function AboutHeroFeatures() {
  return (
    <Container className="mt-16 sm:mt-32">
        <div className="relative pt-16 pb-32 overflow-hidden ">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="max-w-xl px-6 mx-auto lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                    <div>
                    <div>
                        <span className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                        <InboxIcon className="w-8 h-8 text-white" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-amber-300 ">We have decades of experience helping new and existing leaders develop strategic and authentic personal brands.</h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-100">
                        Our trademarked process allows us to capture your unique individuality, in service of larger business goals and your greater mission, and partner with you and your company to get your message out into the universe.
                        </p>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-100">Not only are you creating strategic content for your existing audiences and platform, but SimplyBe. Agency helps you create an authentic personal brand that you can leverage in a variety of digital marketing channels to reach new audiences, clients and brand evangelists: methods like long-form blogging, webinars, guest appearances on relevant industry podcasts, email marketing, and more.</p>
                        <div className="mt-6">
                        <a
                            href="#"
                            className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                        >
                            Get started
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="pt-6 mt-8 border-t border-gray-200">
                    <blockquote>
                        <div>
                        <p className="text-xl text-zinc-600 dark:text-zinc-100">
                            &ldquo;Our specialization is not in industry, it’s in the individual and our ability to help anyone and everyone find their authentic personal brand.&rdquo;
                        </p>
                        </div>
                        <footer className="mt-3">
                        
                        </footer>
                    </blockquote>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                        className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                        alt="Inbox user interface"
                    />
                    </div>
                </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="max-w-xl px-6 mx-auto lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                    <div>
                    <div>
                        <span className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                        <SparklesIcon className="w-8 h-8 text-white" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-amber-300 ">And it doesn’t stop there.</h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-100">
                            Your personal brand will inform your sales pitches to your earned media… anything that communicates who you are and what you do. The cohesive story we develop with our individual clients, in service of a larger business agenda or mission, translates far and wide across channels and directly to your intended audiences.
                        </p>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-100">
                            How do we do it? Well, we delve deep into what drives our clients. Through experiential creative branding sessions, ongoing brand support and our signature digital courses, we’ve helped thousands of clients discover their voices and articulate their unique and expert thought leadership.
                        </p>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-100">
                            Our authentic personal branding strategies are tailored specifically to your comfort level: some folks love the idea of making a loud splash on social media, while others want the chance to refine their message through monthly newsletters and more niche communication. No matter the channel, your authentic personal brand is one that tells the right story at the right time through the right medium… all while reaching the right people.    
                        </p>
                        <div className="mt-6">
                        <a
                            href="#"
                            className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                        >
                            Get started
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                    <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                        className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                        alt="Customer profile user interface"
                    />
                    </div>
                </div>
                </div>
            </div>
        </div>

    </Container>    
  )
}

