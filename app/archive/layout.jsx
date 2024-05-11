const ArchieveLayout = ({archive, latest}) => {
  return (
    <div>
        <h1 className="font-bold text-3xl mb-3">News Archive</h1>
        <section id="archive-filter">
            {archive}
        </section>
        <section id="archive-latest">
            {latest}
        </section>
    </div>

  )
}
export default ArchieveLayout