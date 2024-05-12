import NewsList from '@/components/NewsList';

import { getNewsForYear } from '@/lib/news'

const ArchieveDetailPage = ({ params }) => {
  const filter = params.filter;
  console.log(filter)
  // const news = getNewsForYear(filter);
  return <NewsList  news={news}/>;
};
export default ArchieveDetailPage;
