import fs from 'fs'

export const getGalleryData = async () => {
  return fs.readFileSync('public/data/csvjson.json', 'utf-8')
}

export const getGalleryDataById = async (id) => {
  const galleryData = await getGalleryData()
  const gallery = galleryData ? JSON.parse(galleryData) : []
  const content = gallery.find((item) => item.id === id)
  return JSON.stringify(content)
}
