import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { Disclosure } from '@headlessui/react'
import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon, CheckIcon } from '@heroicons/react/24/solid'

const features = [
    {
      name: 'Be Bold',
      description: 'The world needs more boldness. But boldness looks different on everyone. We celebrate getting out of your own comfort zone and taking risks, whatever that means for you.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Be True',
      description:
        'We own our authenticity and inspire others to do the same. We celebrate vulnerability and we celebrate our differences— these are what make us human.',
      icon: ScaleIcon,
    },
    {
      name: 'Be Kind',
      description:
        'Being kind is different than being nice. Being kind starts with your soul. It means leading with your heart and genuinely hoping for the best for others.',
      icon: BoltIcon,
    },
    {
      name: 'Be In Service',
      description:
        'We help our clients leave legacies. Authentic personal branding, when done right, is about more than yourself. We work with people who are in service of a greater mission.',
      icon: EnvelopeIcon,
    },
    {
        name: 'Be Relevant',
        description:
          'The world is changing fast. We keep a pulse on our industry and communities with insatiable curiosity and let the knowledge we gain inform.',
        icon: EnvelopeIcon,
      },
      {
        name: 'Be Extraordinary',
        description:
          'Show up every day as your highest self. Build equity in yourself. Build equity in your future. It starts with you and it starts now.',
        icon: EnvelopeIcon,
      },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export function AboutHeroValues() {
  return (
    <Container className="mt-16 sm:mt-32">
        <div className="">
            <div className="py-24 mx-auto max-w-7xl sm:py-32 lg:py-40">
                <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-5xl font-bold tracking-tightest text-zinc-800 dark:text-amber-300 sm:text-5xl lg:text-7xl">Our values drive everything we do.</h2>
                <p className="max-w-xl mx-auto mt-4 leading-8 text-zinc-600 dark:text-zinc-100">
                    At Djembe Media we honor a code of humanity, empowerment and excellence. This is where our Core Values come in. SimplyBe.’s values act as a roadmap to achieving our vision and center on one thing: bringing more authenticity and humanity to business.
                </p>
                </div>
                <dl className="grid grid-cols-1 gap-12 mt-20 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                {features.map((feature) => (
                    <div key={feature.name} className="relative">
                    <dt>  
                        <feature.icon className="absolute w-6 h-6 mt-1 text-blue-600" aria-hidden="true" />
                        <p className="ml-10 text-lg font-semibold leading-8 text-zinc-600 dark:text-zinc-100">{feature.name}</p>

                    </dt>
                    <dd className="mt-2 ml-10 text-base leading-7 text-zinc-600 dark:text-zinc-100">{feature.description}</dd>
                    </div>
                ))}
                </dl>
            </div>
        </div>

    </Container>    
  )
}

