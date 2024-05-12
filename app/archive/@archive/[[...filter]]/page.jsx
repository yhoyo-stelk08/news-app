import Link from 'next/link';
import NewsList from '@/components/NewsList';

import { getNewsForYear, getAvailableNewsYears } from '@/lib/news';

const ArchieveDetailPage = ({ params }) => {
  const filter = params.filter;
  const years = getAvailableNewsYears();

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;
  // const news = getNewsForYear(filter);
  // return <NewsList  news={news}/>;
  let news;
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }
  let newsContent = <p>No news found for the selected period. </p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};
export default ArchieveDetailPage;
