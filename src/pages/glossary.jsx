import Image from 'next/image'
import Head from 'next/head'
import { Container } from '@/components/Container'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Glossary({ glossary }) {
  const glossaryData = glossary ? JSON.parse(glossary) : null
  const [selectedItem, setSelectedItem] = useState(null)

  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Glossary - ProBus</title>
        <meta
          name="description"
          content="Create lasting memories.
          "
        />
      </Head>
      <Container className="relative mt-16 sm:mt-32">
        {/* Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    {selectedItem && (
                      <div className="group relative break-inside-avoid-column min-h-[300px]">
                        <Image
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          width="0"
                          height="0"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                          className="h-full w-full"
                        />

                        <div className="absolute inset-0 z-0 backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
                        <div className="absolute inset-0 p-4 flex flex-col">
                          <Dialog.Title as="h3" className="text-white text-xl">
                            {selectedItem.title}
                          </Dialog.Title>
                          <p className="text-white text-sm overflow-y-scroll scrollbar-hide mt-4">
                            {selectedItem.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* table of content */}
        <div className="flex pb-4 overflow-x-auto">
          {glossaryData.tableOfContents.links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-zinc-800 dark:text-zinc-100 font-body text-lg p-2 w-full hover:dark:text-zinc-400 hover:text-zinc-400"
            >
              {item.letter}
            </a>
          ))}
        </div>
        {/* Content */}
        <div className="flex flex-col gap-16 mt-8">
          {glossaryData.tableOfContents.links.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8"
              id={item.letter}
            >
              {/* Letter */}
              <div className="md:w-4/12 lg:w-2/12 flex items-center justify-center">
                <h1 className="bg-zinc-300 w-32 h-32 rounded-full flex justify-center items-center text-6xl font-bold text-zinc-800">
                  {item.letter}
                </h1>
              </div>
              {/* Glossary */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:w-8/12 lg:w-10/12">
                {glossaryData.glossary
                  .filter((g) => g.letter === item.letter)
                  .map((r, index) => (
                    <button
                      key={index}
                      onClick={callAll(
                        () => setSelectedItem(r),
                        () => openModal()
                      )}
                      className="text-blue-500 font-body hover:underline"
                    >
                      {r.title}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

import fs from 'fs'
import path from 'path'
import { callAll } from '@/utils/index'
export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data')
  const glossary = fs.readFileSync(dataDirectory + '/glossaryData.json', 'utf8')
  return {
    props: {
      glossary,
    },
  }
}
