import fs from 'fs'
import path from 'path'

const jsonDirectory = path.join(process.cwd(), 'data')

console.log('jsonDirectory', jsonDirectory)

export const getGalleryData = async () => {
  return fs.readFileSync(jsonDirectory + '/csvjson.json', 'utf-8')
}

export const getGalleryDataById = async (id) => {
  const galleryData = await getGalleryData()
  const gallery = galleryData ? JSON.parse(galleryData) : []
  const content = gallery.find((item) => item.id === id)
  return JSON.stringify(content)
}
