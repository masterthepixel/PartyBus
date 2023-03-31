import React from 'react'
import Colcade from '@/lib/clocade'
import Image from 'next/image'
import Link from 'next/link'
import LazyImage from '@/components/lazyimage'
import PhotoItemsAction from './photoItemsAction'

function GridPhotos({ photos = [], className = '' }) {
  const photosRef = React.useRef()
  let style = `flex min-h-screen gap-4 ${className}`

  React.useEffect(() => {
    var colc = new Colcade(photosRef.current, {
      columns: '.photos-col',
      items: '.photos-item',
    })
    return () => {
      colc.destroy()
    }
  })

  return (
    <div className={style} ref={photosRef}>
      <div className="photos-col flex w-full flex-col gap-4"></div>
      <div className="photos-col hidden w-full flex-col gap-4 md:flex"></div>
      {/* <div className="photos-col w-full gap-4 hidden flex-col 2xl:flex"></div> */}
      <div className="photos-col hidden w-full flex-col gap-4 sm:flex"></div>
      {photos && photos.length > 0
        ? photos.map((photo, index) => {
            return (
              <div className="photos-item group relative" key={index}>
                <Link href={`/gallery/${photo.id}`} className="relative">
                  <LazyImage url={photo.i} alt={photo['Alt Text']} />
                  {/* <Image
                    src={photo.i}
                    alt={photo['Alt Text']}
                    width="0"
                    height="0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                    className="h-auto w-full rounded-xl"
                    loading="lazy"
                  /> */}
                  <div className="absolute inset-0 z-0 hidden h-full w-full bg-gray-900 opacity-40 group-hover:block"></div>
                </Link>
                <PhotoItemsAction actionInfo={photo} />
              </div>
            )
          })
        : null}
    </div>
  )
}

export default GridPhotos
