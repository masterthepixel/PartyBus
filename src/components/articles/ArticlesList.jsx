import Link from 'next/link'
import ArticlesCard from './ArticlesCard'

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.length
        ? articles.map((article, index) => (
            <div
              key={index}
              className="mb-16 flex flex-col space-y-16"
              id={`${article?.category?.replaceAll(' ', '-')}`}
            >
              {/* Category title */}
              <Link
                href={`#${article?.category?.replaceAll(' ', '-')}`}
                className="block font-body text-lg font-bold text-zinc-800 dark:text-zinc-100"
              >
                # {article?.category}
              </Link>
              {article?.articles.map((item) => (
                <ArticlesCard article={item} key={item.slug} />
              ))}
            </div>
          ))
        : null}
    </>
  )
}

export default ArticlesList
