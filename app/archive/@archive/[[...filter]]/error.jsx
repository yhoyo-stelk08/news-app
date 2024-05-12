'use client'
const ArchiveErrorPage = ({error}) => {
  return (
    <div className="error">
      <h1 className="text-4xl font-black my-4">An Error Occurred!</h1>
      <p className="text-2xl font-medium font-Merriweather mt-20">
        {error.message}
      </p>
    </div>
  );
};
export default ArchiveErrorPage;
