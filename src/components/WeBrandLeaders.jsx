import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

const faqs = [
  {
    id: 1,
    question: "If we are having a great time and would like to stay longer than we planned, can we do so without being charged exorbitant fees?",
    answer:
      "Absolutely! Not only do we want you to have an excellent time on your first trip with us, but we want you to remain a happy customer as the years go by! That's why we treat you with respect when it comes to our prices for service, and everything is out on the table. There are never any hidden fees to worry about. While there are certainly other party bus companies out there who would charge you additional fees for a lengthier term of service than originally contracted, we never will. We'll simply continue to charge you at the hourly rate that we agreed upon when you booked your trip. So you can relax and enjoy yourself without having to watch the clock or calendar!",
  },
  {
    id: 2,
    question: "Can my party smoke cigarettes on the bus? -or- Will the bus smell like cigarette smoke?",
    answer:
      "In order to keep our luxurious furnishings as clean and fresh an s possible, we have a firm no smoking policy on all of our vehicles. We appreciate your adhering to this policy out of respect for both your party and the parties who will rent the bus after you.",
  },
  {
    id: 3,
    question: "What about alcohol? Will it be provided, and/or are we allowed to bring our own?",
    answer:
      "Though we are not permitted by law to provide any alcohol to you, you are certainly allowed to bring your own on board, and we do provide all the necessary amenities to you, including coolers with ice, plastic cups, and a deluxe bar so your drink mixing and pouring will be easy and fun. This is one of the biggest advantages to renting a party bus, because even if you have a designated driver in your own vehicle, you cannot have open alcoholic beverages in the car. On our party buses, you're free to keep the party going in between destinations!",
  },
  {
    id: 4,
    question: "What hours of the day, days of the week, and times of the year do you operate?",
    answer:
      "We are at your service 24 hours a day, 365 days per year. Of course we do have times of the year that are busier than most, so booking well in advance is always a plus.",
  },
  {
    id: 5,
    question: "Do you serve the area that I plan to travel to?",
    answer:
      "Absolutely! Our details our most popular cities, but we do not limit our services to just those areas. You can gIve us a call right now at (301)-212-0268) to make sure that we service the area(s) that you plan to visit.",
  },
  {
    id: 6,
    question: "Am I allowed to cancel my reservation?",
    answer:
      "Unfortunately, you cannot cancel. Once you have made your reservation and paid a deposit, you will have to pay for the service if you use it or not. You cannot switched days either. The only thing you might be able to do, depending on availability, is move your time earlier/later date.",
  },
  {
    id: 7,
    question: "Can I bring children along with me?",
    answer:
      "Children can most definitely come onto our vehicles. The only thing is, if there are those who are under 21 years of age, there cannot be alcohol on the vehicles.",
  },
  // More questions...
]

    export function WeBrandLeaders() {
        return (
          <Container className="mt-16 sm:mt-32">
            <div className="px-4 py-12 mx-auto divide-y divide-gray-200 max-w-7xl sm:px-6 lg:py-16 lg:px-8">
              <h2 className="py-2  filter drop-shadow-lg font-body tracking-tighter font-[600] bg-gradient-to-b from-sky-600 to-blue-500 bg-clip-text text-transparent dark:text-amber-300 text-[42px] lg:text-center lg:text-6xl">Frequently Asked Questions</h2>
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