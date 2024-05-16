import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

const faqs = [
  {
    "id": 1,
    "question": "What forms of payments are accepted?",
    "answer": "Quickbook: Apple Pay, Visa, MasterCard"
  },
]

    export function WeBrandLeaders() {
        return (
          <Container className="mt-16 sm:mt-32">
            <div className="px-4 py-12 mx-auto divide-y divide-gray-200 max-w-7xl sm:px-6 lg:py-16 lg:px-8">
              <h2 className="py-2  filter drop-shadow-lg font-body tracking-tighter font-[600] bg-gradient-to-b from-sky-600 to-blue-500 bg-clip-text text-transparent dark:text-amber-300 text-[42px] lg:text-center lg:text-6xl">Accepted Payment Methods</h2>
              <div className="mt-8">
                <dl className="divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                      <dt className="pb-6 text-xl font-medium text-zinc-600 dark:text-amber-200 md:col-span-5">{faq.question}</dt>
                      <dd className="mt-2 md:col-span-7 md:mt-0">
                        <p className="text-base text-zinc-600 dark:text-zinc-100">{faq.answer}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
          
        )
      }