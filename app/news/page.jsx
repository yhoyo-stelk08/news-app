import Link from 'next/link';

const NewsPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/news/first-news'>First News</Link>
        </li>
        <li>
          <Link href='/news/second-news'>Second News</Link>
        </li>
        <li>
          <Link href='/news/third-news'>Third News</Link>
        </li>
      </ul>
    </div>
  );
};
export default NewsPage;
