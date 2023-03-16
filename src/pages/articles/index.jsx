import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  const articlesToRender = JSON.parse(articles)
  return (
    <>
      <Head>
        <title>Articles - Pro-Bus</title>
        <meta
          name="description"
          content="Our party bus rental service provides luxurious transportation with music and lighting systems, plus safe and reliable pickup and drop-off services."
        />
      </Head>
      <SimpleLayout
        title="Experience all the amazing sights and attractions of DC, including its famous monuments and vibrant nightlife."
        intro="Our party bus rental service provides luxurious transportation with music and lighting systems, plus safe and reliable pickup and drop-off services."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          {articlesToRender.length
            ? articlesToRender.map((article, index) => (
                <div
                  key={index}
                  className="mb-16 flex max-w-3xl flex-col space-y-16"
                  id={`${article?.category.replaceAll(' ', '-')}`}
                >
                  <Link
                    href={`#${article?.category.replaceAll(' ', '-')}`}
                    className="block font-body text-lg font-bold text-white"
                  >
                    # {article?.category}
                  </Link>
                  {article?.articles.map((article) => (
                    <Article key={article.slug} article={article} />
                  ))}
                </div>
              ))
            : null}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()
  return {
    props: {
      articles: JSON.stringify(articles),
    },
  }
}
