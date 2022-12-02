import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { Disclosure } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'


const includedFeatures = [
    'Podcast style video interview',
    'Video interview clips',
    'Branded video content',
    'Logo',
    'Brand style guide',
    'Personalized Scripts',
    'Ad Management',
    'Social Media Management', 
    'Microsite',
    'Custom email',
    'Local SEO', 
    'Digital Business Cared',
    'Daily Video Content for 90 days',
    'Social Media Banners'
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export function SaveMoneyonPricing() {
  return (
    <Container className="mt-16 sm:mt-32">
        <div className="">
        <div className="">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-amber-300 sm:text-6xl">
                Save money pricing
                </h2>
                <p className="text-xl font-bold tracking-tight lg:mt-4  sm:text-2xl ... bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mt-4">
                Set up pricing under the ‘save money’ principle: demonstrate that your tool saves a prospect more money than it costs them
                </p>
            </div>
            </div>
        </div>
        <div className="pb-16 mt-8 sm:mt-12">
            <div className="relative">
            <div className="absolute inset-0 h-1/2" />
            <div className="relative mx-auto max-w-7xl ">
                <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                <div className="flex-1 px-6 py-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-amber-300 sm:text-3xl sm:tracking-tight">Executive Package</h3>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-100">
                    Is this service worth the fee? The most effective way to convert a prospect is to show that their business is losing more money by not investing in your service.
                    </p>
                    <div className="mt-8">
                    <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-6 text-sm font-semibold border rounded-full text-amber-300 bg-zinc-900">
                        <span className='ml-4'>What is included?</span>
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                        {includedFeatures.map((feature) => (
                        <li key={feature} className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                            <CheckCircleIcon className="w-5 h-5 text-green-400" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm text-zinc-600 dark:text-zinc-100">{feature}</p>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="px-6 py-8 text-center bg-gray-50 lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg font-medium leading-6 text-zinc-900">Pay once, own it forever</p>
                    <div className="flex items-center justify-center mt-4 text-5xl font-bold tracking-tight text-zinc-900">
                    <span>$6,000</span>
                    <span className="ml-3 text-xl font-medium tracking-normal text-zinc-500">USD</span>
                    </div>
                    <p className="mt-4 text-sm">
                    <a href="#" className="font-medium text-zinc-500 underline">
                        Learn about our membership policy
                    </a>
                    </p>
                    <div className="mt-6">
                    <div className="rounded-md shadow">
                        <a
                        href="#"
                        className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
                        >
                        Get Access
                        </a>
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

