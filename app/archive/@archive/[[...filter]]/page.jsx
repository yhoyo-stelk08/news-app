import NewsList from '@/components/NewsList';

import { getNewsForYear } from '@/lib/news'

const ArchieveDetailPage = ({ params }) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList  news={news}/>;
};
export default ArchieveDetailPage;
