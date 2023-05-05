import React, { useDeferredValue, useEffect, useState } from 'react'
import GridPhotos from '@/components/gallery/gridphotos'
import Head from 'next/head'
import { Container } from '@/components/Container'
import useGalleryData from '@/hooks/useGalleryData'
import { useRouter } from 'next/router'
import GalleryPageAside from '@/components/gallery/GalleryPageAside copy'
import { getGalleryDataCategories } from '@/lib/galleryData'

const Gallery = ({ categories }) => {
  const categoriesToRender = JSON.parse(categories)
  const router = useRouter()
  const { q } = router.query
  const { data, loading, setData } = useGalleryData(null, q)
  const deferredValue = useDeferredValue(data)
  // console.log('data', data)

  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: categoriesToRender,
    },
  ]

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

  const handleApplyFilter = () => {
    setData([])
    router.push({
      pathname: '/gallery',
      query: {
        q: selectedFilters.join(',').toLowerCase(),
      },
    })
  }

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Gallery - Pro-Bus</title>
        <meta name="description" content="Create lasting memories" />
      </Head>
      {/* <Container className="relative mt-16 sm:mt-32">
        
      </Container> */}
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
          <GalleryPageAside
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleApplyFilter={handleApplyFilter}
            selectedFilters={selectedFilters}
          />
          {/* Product grid */}
          <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3 relative">
            <div className="overflow-y-auto max-h-[1000px] scrollbar-hide">
              {/* Your content */}
              {!loading ? (
                <GridPhotos photos={deferredValue} />
              ) : (
                <div className="flex justify-center items-center h-96">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-20 w-20 text-zinc-800 dark:text-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            <div className="absolute h-10 rounded-t blur-sm backdrop-blur-sm bg-gradient-to-t from-zinc-900 via-zinc-700 to-zinc-600 inset-x-0 bottom-0"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const categories = await getGalleryDataCategories()
  return {
    props: {
      categories,
    },
  }
}

export default Gallery
