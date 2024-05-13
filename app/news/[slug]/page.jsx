import Link from 'next/link';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

const NewsDetailPage = ({ params }) => {
  const newsSlug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!news) notFound();

  return (
    <article className="news-article">
      <header className="mb-4">
        <Link href={`/news/${news.slug}/image`}>
          <img src={`/images/news/${news.image}`} alt={`${news.title}`} />
        </Link>
        <h1 className={`text-3xl my-4 py-4`}>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
};
export default NewsDetailPage;
