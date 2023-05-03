import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/formatDate'
const ArticlesCard = ({ article }) => {
  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          src={article.thumbnail}
          alt=""
          width="0"
          height="0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          {/* Time */}
          <time
            dateTime={article.date}
            className="text-zinc-500 dark:text-zinc-400"
          >
            {formatDate(article.date)}
          </time>
          {/* Category label */}
          <p className="relative z-10 rounded-full bg-zinc-50 dark:bg-zinc-800 px-3 py-1.5 font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100">
            {article.category.split(':')[1].trim()}
          </p>
        </div>
        {/* Title and description */}
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-400">
            <Link href={`/articles/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {article.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ArticlesCard
