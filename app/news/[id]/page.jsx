import Link from "next/link"

const NewsDetailPage = ({ params }) => {
  return (
    <div>
        <h1>{params.id}</h1>
        <Link href='/news'>Back to News</Link>
    </div>
  )
}
export default NewsDetailPage