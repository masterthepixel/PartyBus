import React from 'react'
import axios from 'axios'
import GridPhotos from '@/components/gallery/gridphotos'
import Head from 'next/head'
import { Container } from '@/components/Container'

const Gallery = ({ galleryData }) => {
  const photos = galleryData ? JSON.parse(galleryData) : []
  // console.log(photos)
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Gallery - Pro-Bus</title>
        <meta name="description" content="Create lasting memories" />
      </Head>
      <Container className="relative z-10 mt-16 sm:mt-32">
        <GridPhotos photos={photos} />
      </Container>
    </div>
  )
}

export default Gallery

import { getGalleryData } from '@/lib/galleryData'

export async function getStaticProps() {
  const galleryData = await getGalleryData()
  const partialData = JSON.parse(galleryData).slice(0, 100)
  return {
    props: {
      galleryData: JSON.stringify(partialData),
    },
  }
}
