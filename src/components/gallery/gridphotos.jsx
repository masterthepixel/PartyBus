import React from 'react'
import Link from 'next/link'
import PhotoItemsAction from './photoItemsAction'
import Image from 'next/image'

const GridPhotos = React.forwardRef(function MyGridPhotos(
  { photos = [] },
  ref
) {
  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4">
        {photos && photos.length > 0
          ? photos.map((photo, index) => {
              if (photos.length === index + 1) {
                return (
                  <div className="group relative mb-4" key={index} ref={ref}>
                    <GalleryImage photo={photo} />
                  </div>
                )
              } else {
                return (
                  <div className="group relative mb-4" key={index}>
                    <GalleryImage photo={photo} />
                  </div>
                )
              }
            })
          : null}
      </div>
    </>
  )
})

const GalleryImage = ({ photo }) => {
  return (
    <>
      <Link href={`/gallery/${photo.id}`} className="relative">
        <Image
          src={photo.i}
          alt={photo['Alt Text']}
          width="0"
          height="0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
          className="h-full w-full rounded-xl"
        />
        <div className="absolute inset-0 z-0 hidden rounded-xl bg-gray-900 opacity-40 group-hover:block"></div>
      </Link>
      <PhotoItemsAction actionInfo={photo} />
    </>
  )
}

export default GridPhotos
