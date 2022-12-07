import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/image'
// import portraitImage from '/images/avatar.jpg'



export function YourGoal() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="py-12 mx-auto max-w-7xl lg:py-16 ">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800 dark:text-amber-300 sm:text-7xl lg:text-8xl">
              Your goal?
            </h2>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-amber-200 sm:text-3xl lg:text-4xl">
              To become a magnet.
            </h3>
            <p className="max-w-3xl mt-3 text-lg text-zinc-600 dark:text-zinc-100">
              A strong personal brand does just that — creates a magnetic pull
              on the perfect audience, opportunities, clients, and brings them
              straight to you. We know how to create this pull.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link
                  href="/"
                  className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                  Create Account
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/"
                  className="flex items-center justify-center px-5 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="/images/logos/202-2023811_mattcoopermotorola-motorola-logo-png-grey-transparent-png.png"
                alt="Mirage"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="/images/logos/airbnb.svg"
                alt="Mirage"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="/images/logos/facebook.svg"
                alt="Tuple"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="/images/logos/Google_logo_white_2015.svg"
                alt="Laravel"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="/images/logos/img-simplybe-logo-motorola.svg"
                alt="StaticKit"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                className="max-h-12"
                src="/images/logos/img-simplybe-logo-salesforce.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
