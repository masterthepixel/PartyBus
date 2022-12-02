import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Do I have to post myself or do you handle it?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "Can I use my current logo?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "Which social media networks do you currently support?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What problems could I encounter by switching over to this service?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "How difficult is the set up?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "What happens if I change my mind?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "Is this tool cross-compatible with other services I’m using?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export function PointsofConcernFAQs() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="">
        
        <div className="mx-auto ">
            <div className="max-w-4xl mx-auto divide-y-2 divide-zinc-200/10">
                
                    <div className="sm:text-center lg:text-left">
                    <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-left lg:text-center text-zinc-800 dark:text-amber-300 sm:text-5xl">
                        <span className="block xl:inline">Frequently</span>{' '}
                        <span className="block text-amber-300 xl:inline">asked questions</span>
                    </h2>
                    <p className="max-w-3xl mx-auto mt-6 text-xl lg:text-center text-zinc-600 dark:text-zinc-100 lg:pb-4">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>

                    </div>
                

                
                
                <dl className="p-2 mt-6 space-y-6 divide-y divide-zinc-200/20">
                    {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                        <>
                            <dt className="text-lg">
                            <Disclosure.Button className="flex items-start justify-between w-full text-left text-zinc-800 dark:text-amber-200">
                                <span className="font-[400] text-zinc-800 dark:text-amber-100">{faq.question}</span>
                                <span className="flex items-center ml-6 h-7">
                                <ChevronDownIcon
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                    aria-hidden="true"
                                />
                                </span>
                            </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="pr-12 mt-2">
                            <p className="text-lg text-zinc-600 dark:text-zinc-100">{faq.answer}</p>
                            </Disclosure.Panel>
                        </>
                        )}
                    </Disclosure>
                    ))}
                </dl>
                <div className="max-w-4xl mx-auto mt-6 divide-y-2 divide-zinc-200/10"></div>
            </div>
        </div>
      </div>
    </Container>
  )
}

