import Link from 'next/link';

import { DUMMY_NEWS } from '@/dummy-news';

const NewsPage = () => {
  return (
    <>
      <h1 className={`text-4xl p-0 my-4 font-bold `}>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={`${news.title}`} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default NewsPage;
