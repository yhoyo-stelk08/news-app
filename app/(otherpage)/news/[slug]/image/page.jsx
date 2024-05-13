import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

const ImagePage = ({params}) => {
  const newsSlug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!news) notFound();


  return <div>
    <img src={`/images/news/${news.image}`} alt={news.title} />
  </div>;
};
export default ImagePage;
