import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';

const LatestPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2 className="text-4xl my-4">Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};
export default LatestPage;
