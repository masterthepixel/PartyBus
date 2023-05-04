import { useMemo, useState } from 'react'

import Head from 'node_modules/next/head'

import { getAllArticles, getArticlesCategories } from '@/lib/getAllArticles'
import ArticlesList from '@/components/articles/ArticlesList'
import ArticlesPageAside from '@/components/articles/ArticlesPageAside'

export default function Example({ articles, categories }) {
  const articlesToRender = useMemo(() => JSON.parse(articles), [articles])
  const categoriesToRender = JSON.parse(categories)

  const [selectedFilters, setSelectedFilters] = useState([])
  const handleFilterChange = (e) => {
    const value = e.target.value
    setSelectedFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value)
      }
      return [...prev, value]
    })
  }
  // console.log(selectedFilters)

  const [filteredArticles, setFilteredArticles] = useState(articlesToRender)
  const handleApplyFilter = () => {
    const newArticles = articlesToRender.filter((article) => {
      if (selectedFilters.length === 0) {
        return true
      }
      return selectedFilters.includes(article.category)
    })
    setFilteredArticles(newArticles)
  }
  // console.log(filteredArticles)

  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: categoriesToRender,
    },
  ]

  return (
    <>
      <Head>
        <title>Articles - Pro-Bus</title>
        <meta
          name="description"
          content="Our party bus rental service provides luxurious transportation with music and lighting systems, plus safe and reliable pickup and drop-off services."
        />
      </Head>
      {/* Mobile filter dialog */}

      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl px-4 sm:px-8 lg:px-20 font-body">
        <div className="border-b border-gray-200 pb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Experience all the amazing sights and attractions of DC, including
            its famous monuments and vibrant nightlife.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Our party bus rental service provides luxurious transportation with
            music and lighting systems, plus safe and reliable pickup and
            drop-off services.
          </p>
        </div>

        <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 relative">
          <ArticlesPageAside
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleApplyFilter={handleApplyFilter}
            selectedFilters={selectedFilters}
          />
          {/* Product grid */}
          <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3 relative">
            <div className="overflow-y-auto max-h-[1000px] scrollbar-hide">
              {/* Your content */}
              <ArticlesList articles={filteredArticles} />
            </div>
            <div className="absolute h-10 rounded-t blur-sm backdrop-blur-sm bg-gradient-to-t from-zinc-900 via-zinc-700 to-zinc-600 inset-x-0 bottom-0"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()
  const categories = await getArticlesCategories()
  // console.log(categories)
  return {
    props: {
      articles: JSON.stringify(articles),
      categories: JSON.stringify(categories),
    },
  }
}
