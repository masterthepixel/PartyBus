import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { Disclosure } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

const plans = [
  {
    title: 'Starter',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
    ],
  },
  {
    title: 'Scale',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
      { id: 5, value: 'VAT & VATMOSS filing' },
      { id: 6, value: 'Free bank transfers' },
    ],
  },
  {
    title: 'Growth',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
    ],
  },
]
const features = [
  {
    title: 'Tax Savings',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Easy to use accounting',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Multi-accounts',
    tiers: [
      { title: 'starter', value: '3 accounts' },
      { title: 'popular', featured: true, value: 'Unlimited accounts' },
      { title: 'intermediate', value: '7 accounts' },
    ],
  },
  {
    title: 'Invoicing',
    tiers: [
      { title: 'starter', value: '3 invoices' },
      { title: 'popular', featured: true, value: 'Unlimited invoices' },
      { title: 'intermediate', value: '10 invoices' },
    ],
  },
  {
    title: 'Exclusive offers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: '6 months free advisor',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Mobile and web access',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]
const perks = [
  {
    title: '24/7 customer support',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Instant notifications',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Budgeting tools',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Digital receipts',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Pots to separate money',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Free bank transfers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
  {
    title: 'Business debit card',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export function ALaCarte() {
  return (
    <Container className="mt-16 sm:mt-32">
        <div className="bg-gray-50">
            <div className="relative bg-blue-600">
                {/* Overlapping background */}
                <div aria-hidden="true" className="absolute bottom-0 hidden w-full h-6 bg-gray-50 lg:block" />

                <div className="relative max-w-2xl px-4 pt-16 mx-auto text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    <span className="block lg:inline">A la carte. </span>
                    <span className="block lg:inline">Pick and choose with no commitment.</span>
                </h1>
                <p className="mt-4 text-xl text-zinc-100">
                    Everything you need, nothing you do not. Pick a plan that best suits your business.
                </p>
                </div>

                <h2 className="sr-only">Plans</h2>

                {/* Toggle */}
                <div className="relative flex justify-center mt-12 sm:mt-16">
                <div className="flex rounded-lg bg-blue-700 p-0.5">
                    <button
                    type="button"
                    className="relative px-6 py-2 text-sm font-medium bg-white rounded-md shadow-sm text-zinc-700 border-zinc-700 whitespace-nowrap hover:bg-blue-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700"
                    >
                    Monthly billing
                    </button>
                    <button
                    type="button"
                    className="relative ml-0.5 whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-sm font-medium text-zinc-200 hover:bg-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700"
                    >
                    Yearly billing
                    </button>
                </div>
                </div>

                {/* Cards */}
                <div className="relative max-w-2xl px-4 pb-8 mx-auto mt-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                {/* Decorative background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 hidden bg-blue-700 rounded-tl-lg rounded-tr-lg top-4 bottom-6 left-8 right-8 lg:block"
                />

                <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
                    {plans.map((plan) => (
                    <div
                        key={plan.title}
                        className={classNames(
                        plan.featured ? 'bg-white ring-2 ring-zinc-700 shadow-md' : 'bg-blue-700 lg:bg-transparent',
                        'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                        )}
                    >
                        <div>
                        <h3
                            className={classNames(plan.featured ? 'text-zinc-600' : 'text-white', 'text-base font-semibold')}
                        >
                            {plan.title}
                        </h3>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                            <div className="flex items-center mt-3">
                            <p
                                className={classNames(
                                plan.featured ? 'text-zinc-600' : 'text-white',
                                'text-4xl font-bold tracking-tight'
                                )}
                            >
                                ${plan.priceMonthly}
                            </p>
                            <div className="ml-4">
                                <p className={classNames(plan.featured ? 'text-zinc-700' : 'text-white', 'text-sm')}>
                                USD / mo
                                </p>
                                <p className={classNames(plan.featured ? 'text-zinc-500' : 'text-zinc-200', 'text-sm')}>
                                Billed yearly (${plan.priceYearly})
                                </p>
                            </div>
                            </div>
                            <a
                            href="#"
                            className={classNames(
                                plan.featured
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-zinc-600 hover:bg-blue-50',
                                'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                            )}
                            >
                            Buy {plan.title}
                            </a>
                        </div>
                        </div>
                        <h4 className="sr-only">Features</h4>
                        <ul
                        role="list"
                        className={classNames(
                            plan.featured
                            ? 'border-gray-200 divide-gray-200'
                            : 'border-zinc-500 divide-zinc-500 divide-opacity-75',
                            'mt-7 border-t divide-y lg:border-t-0'
                        )}
                        >
                        {plan.mainFeatures.map((mainFeature) => (
                            <li key={mainFeature.id} className="flex items-center py-3">
                            <CheckIcon
                                className={classNames(
                                plan.featured ? 'text-zinc-500' : 'text-zinc-200',
                                'w-5 h-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                            />
                            <span
                                className={classNames(
                                plan.featured ? 'text-zinc-600' : 'text-white',
                                'ml-3 text-sm font-medium'
                                )}
                            >
                                {mainFeature.value}
                            </span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/* Feature comparison (up to lg) */}
            <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                <h2 id="mobile-comparison-heading" className="sr-only">
                Feature comparison
                </h2>

                <div className="max-w-2xl px-4 py-16 mx-auto space-y-16 sm:px-6">
                {plans.map((plan, mobilePlanIndex) => (
                    <div key="plan.title" className="border-t border-gray-200">
                    <div
                        className={classNames(
                        plan.featured ? 'border-zinc-600' : 'border-transparent',
                        '-mt-px pt-6 border-t-2 sm:w-1/2'
                        )}
                    >
                        <h3 className={classNames(plan.featured ? 'text-zinc-600' : 'text-zinc-900', 'text-sm font-bold')}>
                        {plan.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500">{plan.description}</p>
                    </div>
                    <h4 className="mt-10 text-sm font-bold text-zinc-900">Catered for business</h4>

                    <div className="relative mt-6">
                        {/* Fake card background */}
                        <div aria-hidden="true" className="absolute inset-0 hidden pointer-events-none sm:block">
                        <div
                            className={classNames(
                            plan.featured ? 'shadow-md' : 'shadow',
                            'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                            )}
                        />
                        </div>

                        <div
                        className={classNames(
                            plan.featured ? 'ring-2 ring-zinc-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                            'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                        )}
                        >
                        <dl className="divide-y divide-gray-200">
                            {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                            >
                                <dt className="pr-4 text-sm font-medium text-zinc-600">{feature.title}</dt>
                                <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                {typeof feature.tiers[mobilePlanIndex].value === 'string' ? (
                                    <span
                                    className={classNames(
                                        feature.tiers[mobilePlanIndex].featured ? 'text-zinc-600' : 'text-zinc-900',
                                        'text-sm font-medium'
                                    )}
                                    >
                                    {feature.tiers[mobilePlanIndex].value}
                                    </span>
                                ) : (
                                    <>
                                    {feature.tiers[mobilePlanIndex].value === true ? (
                                        <CheckIcon className="w-5 h-5 mx-auto text-zinc-600" aria-hidden="true" />
                                    ) : (
                                        <XMarkIcon className="w-5 h-5 mx-auto text-zinc-400" aria-hidden="true" />
                                    )}

                                    <span className="sr-only">
                                        {feature.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}
                                    </span>
                                    </>
                                )}
                                </dd>
                            </div>
                            ))}
                        </dl>
                        </div>

                        {/* Fake card border */}
                        <div aria-hidden="true" className="absolute inset-0 hidden pointer-events-none sm:block">
                        <div
                            className={classNames(
                            plan.featured ? 'ring-2 ring-zinc-600' : 'ring-1 ring-black ring-opacity-5',
                            'absolute right-0 w-1/2 h-full rounded-lg'
                            )}
                        />
                        </div>
                    </div>

                    <h4 className="mt-10 text-sm font-bold text-zinc-900">Other perks</h4>

                    <div className="relative mt-6">
                        {/* Fake card background */}
                        <div aria-hidden="true" className="absolute inset-0 hidden pointer-events-none sm:block">
                        <div
                            className={classNames(
                            plan.featured ? 'shadow-md' : 'shadow',
                            'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                            )}
                        />
                        </div>

                        <div
                        className={classNames(
                            plan.featured ? 'ring-2 ring-zinc-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                            'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                        )}
                        >
                        <dl className="divide-y divide-gray-200">
                            {perks.map((perk) => (
                            <div key={perk.title} className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                                <dt className="text-sm font-medium text-zinc-600 sm:pr-4">{perk.title}</dt>
                                <dd className="text-center sm:px-4">
                                {perk.tiers[mobilePlanIndex].value === true ? (
                                    <CheckIcon className="w-5 h-5 mx-auto text-zinc-600" aria-hidden="true" />
                                ) : (
                                    <XMarkIcon className="w-5 h-5 mx-auto text-zinc-400" aria-hidden="true" />
                                )}

                                <span className="sr-only">{perk.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}</span>
                                </dd>
                            </div>
                            ))}
                        </dl>
                        </div>

                        {/* Fake card border */}
                        <div aria-hidden="true" className="absolute inset-0 hidden pointer-events-none sm:block">
                        <div
                            className={classNames(
                            plan.featured ? 'ring-2 ring-zinc-600' : 'ring-1 ring-black ring-opacity-5',
                            'absolute right-0 w-1/2 h-full rounded-lg'
                            )}
                        />
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </section>

            {/* Feature comparison (lg+) */}
            <section aria-labelledby="comparison-heading" className="hidden lg:block">
                <h2 id="comparison-heading" className="sr-only">
                Feature comparison
                </h2>

                <div className="px-8 py-24 mx-auto max-w-7xl">
                <div className="flex items-stretch w-full border-t border-gray-200">
                    <div className="flex items-end w-1/4 py-6 pr-4 -mt-px">
                    <h3 className="mt-auto text-sm font-bold text-zinc-900">Catered for business</h3>
                    </div>
                    {plans.map((plan, planIdx) => (
                    <div
                        key={plan.title}
                        aria-hidden="true"
                        className={classNames(planIdx === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
                    >
                        <div
                        className={classNames(plan.featured ? 'border-zinc-600' : 'border-transparent', 'py-6 border-t-2')}
                        >
                        <p className={classNames(plan.featured ? 'text-zinc-600' : 'text-zinc-900', 'text-sm font-bold')}>
                            {plan.title}
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">{plan.description}</p>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="relative">
                    {/* Fake card backgrounds */}
                    <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full bg-white rounded-lg shadow" />
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full bg-white rounded-lg shadow-md" />
                    </div>
                    <div className="w-1/4 pl-4">
                        <div className="w-full h-full bg-white rounded-lg shadow" />
                    </div>
                    </div>

                    <table className="relative w-full">
                    <caption className="sr-only">Business feature comparison</caption>
                    <thead>
                        <tr className="text-left">
                        <th scope="col">
                            <span className="sr-only">Feature</span>
                        </th>
                        {plans.map((plan) => (
                            <th key={plan.title} scope="col">
                            <span className="sr-only">{plan.title} plan</span>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {features.map((feature) => (
                        <tr key={feature.title}>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-sm font-medium text-left text-zinc-600">
                            {feature.title}
                            </th>
                            {feature.tiers.map((tier, tierIdx) => (
                            <td
                                key={tier.title}
                                className={classNames(
                                tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                                'relative w-1/4 py-0 text-center'
                                )}
                            >
                                <span className="relative w-full h-full py-3">
                                {typeof tier.value === 'string' ? (
                                    <span
                                    className={classNames(
                                        tier.featured ? 'text-zinc-600' : 'text-zinc-900',
                                        'text-sm font-medium'
                                    )}
                                    >
                                    {tier.value}
                                    </span>
                                ) : (
                                    <>
                                    {tier.value === true ? (
                                        <CheckIcon className="w-5 h-5 mx-auto text-zinc-600" aria-hidden="true" />
                                    ) : (
                                        <XMarkIcon className="w-5 h-5 mx-auto text-zinc-400" aria-hidden="true" />
                                    )}

                                    <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                    </>
                                )}
                                </span>
                            </td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>

                    {/* Fake card borders */}
                    <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full rounded-lg ring-2 ring-zinc-600 ring-opacity-100" />
                    </div>
                    <div className="w-1/4 pl-4">
                        <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                    </div>
                    </div>
                </div>

                <h3 className="mt-10 text-sm font-bold text-zinc-900">Other perks</h3>

                <div className="relative mt-6">
                    {/* Fake card backgrounds */}
                    <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full bg-white rounded-lg shadow" />
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full bg-white rounded-lg shadow-md" />
                    </div>
                    <div className="w-1/4 pl-4">
                        <div className="w-full h-full bg-white rounded-lg shadow" />
                    </div>
                    </div>

                    <table className="relative w-full">
                    <caption className="sr-only">Perk comparison</caption>
                    <thead>
                        <tr className="text-left">
                        <th scope="col">
                            <span className="sr-only">Perk</span>
                        </th>
                        {plans.map((plan) => (
                            <th key={plan.title} scope="col">
                            <span className="sr-only">{plan.title} plan</span>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {perks.map((perk) => (
                        <tr key={perk.title}>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-sm font-medium text-left text-zinc-600">
                            {perk.title}
                            </th>
                            {perk.tiers.map((tier, tierIdx) => (
                            <td
                                key={tier.title}
                                className={classNames(
                                tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                                'relative w-1/4 py-0 text-center'
                                )}
                            >
                                <span className="relative w-full h-full py-3">
                                {tier.value === true ? (
                                    <CheckIcon className="w-5 h-5 mx-auto text-zinc-600" aria-hidden="true" />
                                ) : (
                                    <XMarkIcon className="w-5 h-5 mx-auto text-zinc-400" aria-hidden="true" />
                                )}

                                <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                </span>
                            </td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>

                    {/* Fake card borders */}
                    <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="w-full h-full rounded-lg ring-2 ring-zinc-600 ring-opacity-100" />
                    </div>
                    <div className="w-1/4 pl-4">
                        <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>

    </Container>    
  )
}

