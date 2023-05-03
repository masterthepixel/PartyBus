import React from 'react'
import GridPhotos from '@/components/gallery/gridphotos'
import Head from 'next/head'
import { Container } from '@/components/Container'
import useGalleryData from '@/hooks/useGalleryData'
import { useRouter } from 'next/router'

const Gallery = () => {
  const router = useRouter()
  const { q } = router.query
  // console.log('q', q)
  const [pageNumber, setPageNumber] = React.useState(0)
  const { data, hasMore, loading, error } = useGalleryData(pageNumber, q)

  // console.log('data', data)

  const observer = React.useRef()
  const lastBookElementRef = React.useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Gallery - Pro-Bus</title>
        <meta name="description" content="Create lasting memories" />
      </Head>
      <Container className="relative mt-16 sm:mt-32">
        {/* {loading ? (
          <p>Loading</p>
        ) : (
        )} */}
        <GridPhotos photos={data} ref={lastBookElementRef} />
      </Container>
    </div>
  )
}

export default Gallery
