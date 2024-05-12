import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/NewsList';

const NewsPage = () => {
  return (
    <>
      <h1 className={`text-4xl p-0 my-4 font-bold `}>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};
export default NewsPage;
