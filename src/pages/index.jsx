import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { YourGoal } from '@/components/YourGoal'
import { MakeLifeEasy } from '@/components/MakeLifeEasy'
import { MakeLifeEasy2 } from '@/components/MakeLifeEasy2'
import { Testimonial } from '@/components/Testimonial'
import { WeBrandLeaders } from '@/components/WeBrandLeaders'
import portraitImage from '@/images/party-gw.png'



import image1 from '@/images/photos/bachelor.jpg'
import image2 from '@/images/photos/bachelorette.jpg'
import image3 from '@/images/photos/concerts.jpg'
import image4 from '@/images/photos/nightout.jpg'
import image5 from '@/images/photos/weddings.jpg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex mt-6">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
        />
        <Button type="submit" className="flex-none ml-4">
          Join
        </Button>
      </div>
    </form>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <div className="overflow-hidden">
      <Head>
        <title></title>
        <meta name="description" content="Branding and Marketing" />
      </Head>
      <Container className="relative z-10 ">
        <div className="absolute left-0 -z-[1] h-full max-h-[850px] w-full bg-black opacity-[0.55]">
          overlay
        </div>
        <div className=" grid grid-cols-1 gap-y-16 pt-36 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-16">
          <video
            id="background-video"
            loop
            autoPlay
            muted
            playsinline="true"
            disablePictureInPicture="true"
            className="absolute top-0 left-0 -z-10 h-full max-h-[850px] w-full  object-cover"
          >
            <source
              src="/videos/compressed-Homepage-Banner-Video-1.mp4"
              type="video/mp4"
              className="max-h-full"
            />
            Your browser does not support the video tag.
          </video>

          <div className=" lg:pl-24">
            <div className=" m-auto max-w-md px-2.5 md:max-w-lg lg:m-0 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover backdrop-blur-sm rotate-3 rounded-2xl dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="p-4 lg:order-first lg:row-span-2">
            <h1 className="filter drop-shadow-lg font-body tracking-tighter font-[600] bg-gradient-to-b from-gray-50 to-zinc-50 bg-clip-text text-transparent dark:text-amber-300 text-5xl md:text-6xl lg:text-center lg:text-7xl ">
              Create Lasting Memories
            </h1>
            <div className="mt-6 lg:text-xl space-y-7 text-zinc-50 dark:text-zinc-100">
              <p className="text-lg text-white lg:text-center lg:text-xl">
              Transportation that doubles as entertainment, whether it &apos;s tonight or for an event far in advance, book with us today.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <YourGoal />
      <MakeLifeEasy />
      <MakeLifeEasy2 />
      <WeBrandLeaders />
      <Testimonial />
      <Photos />
      {/* 
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
      */}
    </div>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
