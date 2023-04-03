import { getGalleryData } from '@/lib/galleryData'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {Promise<void>}
 * @description
 * This is a serverless function that returns a JSON object of gallery data
 * for a given page number.
 */

export default async function getGalleryDataByPage(req, res) {
  const { page } = req.query
  const galleryData = await getGalleryData()
  const gallery = galleryData ? JSON.parse(galleryData) : []
  if (!page) {
    res.status(200).json(gallery)
  }
  const content = gallery.slice(page * 100, page * 100 + 100)
  res.status(200).json(content)
}
