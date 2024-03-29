import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  let categories = new Set(articles.map((article) => article.category))

  let finalArticles = []
  categories.forEach((category) =>
    finalArticles.push({
      category,
      articles: articles
        .filter((article) => article.category === category)
        .sort((a, b) => a.order - b.order),
    })
  )
  // console.log('finalArticles', finalArticles)

  // return articles.sort((a, z) => new Date(z.date) - new Date(a.date))

  return finalArticles.sort(
    (a, b) =>
      Number(a.category.substr('Chapter'.length + 1, 1)) -
      Number(b.category.substr('Chapter'.length + 1, 1))
  )
}

export async function getArticlesCategories() {
  const articles = await getAllArticles()
  const categories = articles.map((article) => ({
    value: article.category,
    label: article.category.split(':')[1].trim(),
  }))
  return categories
}
