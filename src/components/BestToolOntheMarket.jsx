import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

import {
    CheckIcon,
    CheckBadgeIcon,
    ShieldCheckIcon,
    DocumentCheckIcon,
    ClipboardDocumentCheckIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'More exposure',
    description: 'Quam a velit animi fuga ad. Accusamus consectetur nulla perferendis quam. Aperiam error iusto id eos.'
  },
  {
    name: 'More audiences',
    description: 'Ut excepturi sequi et corrupti. Quidem est non ipsam sunt voluptatem. Velit dicta iusto. Molestiae.'
  },
  {
    name: 'More clients',
    description: 'Quis ratione necessitatibus ullam id animi iure accusamus debitis voluptas. Cumque debitis exercitationem.'
  },
  {
    name: 'More opportunities',
    description: 'Quae et accusantium quo molestiae sed sit ut quo. Quidem omnis iure et maiores porro. Eligendi deserunt.'
  }, {
    name: 'More revenue',
    description: 'Optio assumenda eos neque. Quaerat temporibus dicta provident. Quia unde quo aut aut molestiae sit..'
  }, {
    name: 'More authenticity',
    description: 'Excepturi sed quo mollitia voluptatibus. Qui quo ut nihil quo. Dolor at dignissimos ea voluptatem.'
  }, 
]
    
export function BestToolOntheMarket() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="">
        <div className="mx-auto">
            <div className="mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-left lg:text-center text-zinc-800 dark:text-amber-300 sm:text-5xl">Welcome to your new leadership strategy</h2>
              <p className="max-w-4xl mx-auto mt-4 text-xl text-left lg:text-center text-zinc-600 dark:text-zinc-100">
                Djembe Media works with current and future leaders seeking to make an impact, drive real ROI and leave a legacy—no matter the industry. We teach people how to leverage their authentic selves through unique brand identity and personal branding strategy development to support their businesses.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-6 mt-8 md:mt-16 md:gap-8 sm:grid-cols-3 sm:gap-x-6 ">
            {features.map((feature) => (
                <div key={feature.name} className="relative block px-4 py-6 transition ease-linear transform border shadow-sm duration-250 hover:-translate-y-1 lg:hover:scale-105 rounded-xl border-zinc-800 hover:border-purple-400/60 hover:shadow-pink-600/60 shadow-blue-600/30">
                <dt>
                    <CheckBadgeIcon className="absolute w-8 h-8 -mt-1 dark:text-blue-400 text-zinc-600" aria-hidden="true" />
                    <p className="ml-10 text-lg font-medium leading-6 text-zinc-600 dark:text-blue-400">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-2 text-base text-zinc-600 dark:text-zinc-100">{feature.description}</dd>
                </div>
            ))}
            </dl>
        </div>
      </div>
    </Container>
  )
}

