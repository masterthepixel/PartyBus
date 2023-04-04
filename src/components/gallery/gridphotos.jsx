import React from 'react'
import Link from 'next/link'
import PhotoItemsAction from './photoItemsAction'
import Image from 'next/image'
import LazyImage from '../lazyimage/index'

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
                  <div
                    className="group relative mb-4 break-inside-avoid-column"
                    key={index}
                    ref={ref}
                  >
                    <GalleryImage photo={photo} />
                  </div>
                )
              } else {
                return (
                  <div
                    className="group relative mb-4 break-inside-avoid-column"
                    key={index}
                  >
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
        {/* <Image
          src={photo.i}
          alt={photo['Alt Text']}
          width="0"
          height="0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
          className="h-full w-full rounded-xl"
        /> */}
        <LazyImage url={photo.i} alt={photo['Alt Text']} />
        <div className="absolute inset-0 z-0 hidden rounded-xl bg-gray-900 opacity-40 group-hover:block"></div>
        <PhotoItemsAction actionInfo={photo} />
      </Link>
      <p className="text-black dark:text-zinc-50">{photo['Page Title']}</p>
      <p className="mt-2 inline-block rounded-full bg-gray-700 p-1 px-3 font-body text-sm text-zinc-50 dark:bg-zinc-50 dark:text-gray-900">
        {photo?.Category}
      </p>
    </>
  )
}

export default GridPhotos
