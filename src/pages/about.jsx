import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { AboutHero } from '@/components/AboutHero'
import { AboutHeroFeatures } from '@/components/AboutHeroFeatures'

import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import portraitImage from '@/images/portrait.jpg'
import { AboutHeroValues } from '@/components/AboutHeroValues'
import { Testimonial } from '@/components/Testimonial'

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
function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>About - Djembe Media</title>
        <meta
          name="description"
          content="Harness the power of authentic personal branding.
          "
        />
      </Head>
      <Container className="relative z-10 ">
        <div className="grid grid-cols-1 gap-y-16 pt-36 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
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
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover glow-sm aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tightest text-zinc-800 dark:text-amber-300 sm:text-5xl ">
              Harness the power of authentic personal branding.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p className="mt-2 text-2xl font-medium space-y-7 text-zinc-600 dark:text-zinc-100 sm:text-3xl">
                Does this sound familiar?
              </p>
              <p className="text-xl font-medium space-y-7 text-zinc-600 dark:text-zinc-100">
                You are a leader (or emerging leader) looking to articulate your
                value and amplify your digital presence in service of your
                vision and success of your company…
              </p>
              <p>
                You know that this work is not an act of vanity, but a desire to
                develop an authentic personal brand in support of so much
                more—your team, your division, your company, your industry or
                your mission.
              </p>
              <p>
                Maybe you want to reach new customer segments, support hiring
                initiatives, launch a new product, make a name for your
                organization or all of the above. No matter the reason, you know
                it’s important to make your voice heard and you are ready to
                take the necessary steps to find a microphone. Maybe you’ve
                found a few means of fragmented support through a ghostwriter, a
                PR agency or specialist, a social media agency, a corporate
                digital branding firm, or some combination.
              </p>
              <p>
                As those avenues are built on tactics and quick wins, they will
                only get you and your message so far.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <AboutHero />
      <AboutHeroFeatures />
      <AboutHeroValues />
      <Testimonial />
      <Photos />
    </div>
  )
}
