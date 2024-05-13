'use client';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';

const ImageInterceptedPage = ({ params }) => {
  const router = useRouter();
  const newsSlug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!news) notFound();

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-85 flex justify-center items-center z-50"
        onClick={router.back}
      >
        <dialog
          className={`bg-slate-900 bg-opacity-85 p-8 border-none rounded w-full max-w-3xl shadow-md`}
          open
        >
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </dialog>
      </div>
    </>
  );
};
export default ImageInterceptedPage;
