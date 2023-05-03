import Image from 'next/image'
import Head from 'next/head'
import { Container } from '@/components/Container'

export default function About({ glossary }) {
  const glossaryData = glossary ? JSON.parse(glossary) : null
  // console.log('glossaryData', glossaryData)
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
        <div className="columns-1 md:columns-3">
          {glossaryData && glossaryData.glossary.length
            ? glossaryData.glossary.map((item, index) => (
                <div
                  key={index}
                  className="group relative mb-4 break-inside-avoid-column rounded-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width="0"
                    height="0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                    className="h-full w-full rounded-xl"
                  />
                  <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white text-xl">{item.title}</h3>
                    <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))
            : null}
          {/* Image overlay 
                    bg-black/60 = black with 60% opacity - image blur
                    group-hover:opacity-70 = 70% opacity on hover - image overlay
                  */}
          {/* <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (1).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (9).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (2).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (3).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (4).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (17).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>

          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (5).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (13).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (12).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (6).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>

          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (11).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>

          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (8).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (15).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (16).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div>
          <div className="group relative mb-4 break-inside-avoid-column rounded-xl">
            <Image
              src="/images/layout (8).jpg"
              alt=""
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-0 z-0 rounded-xl backdrop-blur-sm bg-black/60 group-hover:backdrop-blur-none group-hover:bg-black group-hover:opacity-70"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl">Hello world</h3>
              <p className="text-white text-sm overflow-y-scroll scrollbar-hide">
                The Newseum was a museum dedicated to the history and importance
                of journalism and the First Amendment of the United States
                Constitution. It was located in downtown Washington, D.C. and
                featured exhibits on topics such as the Watergate scandal, the
                September 11 attacks, and the evolution of the internet. The
                museum permanently closed in 2019, but many of its exhibits and
                artifacts have been donated to other museums and organizations.
              </p>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  )
}

import fs from 'fs'
import path from 'path'
export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data')
  const glossary = fs.readFileSync(dataDirectory + '/glossaryData.json', 'utf8')
  return {
    props: {
      glossary,
    },
  }
}