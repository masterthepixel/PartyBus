import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Image from 'next/legacy/image'

const people = [
  {
    name: 'Jeff',
    role: '"Captain Outside"',
    imageUrl:
      '/images/probus_jeff.jpg',
    bio: 'As a long time entrepreneur I’ve been a barber, clothing designer, video director, boat captain and even a  promoter.  All of my roles had one common denominator.. People..  getting inspired from the energy of people from different perspectives.  When I would design for brands I would go to clubs to feel the energy and create.  When I would shoot music videos I would recreate the club’s energy on screen.  Inspiration comes by the vibes and fun we create on our PartyBus.  Everyone has a great time.  So now I like to shoot and document the multitude of personalities and people partying in our private mobile club!!   Welcome to PROBUS',
  },
  {
    name: 'Fox',
    role: '“Mr. Bigg Factz”',
    imageUrl:
      '/images/probus_derv.jpg',
    bio: 'Throughout my career I’ve found myself in various customer relations positions, that I’ve been able to successful navigate due to my outgoing personality and people skills. Driven by the desire to provide for my family, continuously elevate and socialize; Probus evolved. Growing up in the DMV area I am no stranger to the go-go and love for the culture. I have made countless connections and I intend on using them to elevate the business.',
  },
  // More people...
]

export function Leadership() {
  return (
    <Container className="">
      <div className="py-24 ">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-600 dark:text-zinc-100 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-100">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <Image
                  className="h-64 aspect-[4/5] md:w-1/2 flex-none rounded-2xl object-cover ring-black/50 ring-1"
                  src={person.imageUrl}
                  alt=""
                  height="595"
                  width="300"
                />
                <div className="flex-auto md:w-full">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-600 dark:text-zinc-50">
                    {person.name}
                  </h3>
                  <p className="-mt-2 text-sm text-zinc-600 dark:text-zinc-100">{person.role}</p>
                  <p className="mt-2 text-xs leading-normal text-zinc-600 dark:text-zinc-200">
                    {person.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
