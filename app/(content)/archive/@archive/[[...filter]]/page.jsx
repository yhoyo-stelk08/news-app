import Link from 'next/link';
import NewsList from '@/components/NewsList';

import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from '@/lib/news';

const ArchieveDetailPage = ({ params }) => {
  const filter = params.filter;

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period. </p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  // check invalid path
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid Path');
  }
    return (
      <>
        <header id="archive-header">
          <nav>
            <ul>
              {links.map((link) => {
                const href = selectedYear
                  ? `/archive/${selectedYear}/${link}`
                  : `/archive/${link}`;
                return (
                  <li key={link}>
                    <Link href={href}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        {newsContent}
      </>
    );
};
export default ArchieveDetailPage;
