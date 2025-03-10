const page = () => {
  return (
    <section className="px-6 lg:px-14 pb-16 pt-20">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Explore AI-Generated Images
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
        Browse through a collection of stunning AI-generated images. Use filters
        to find the perfect one or create your own!
      </p>

      {/* Image Gallery (Replace with dynamic images) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <img
          src="/images/sample1.jpg"
          alt="AI Art"
          className="rounded-lg shadow-md"
        />
        <img
          src="/images/sample2.jpg"
          alt="AI Art"
          className="rounded-lg shadow-md"
        />
        <img
          src="/images/sample3.jpg"
          alt="AI Art"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <a
          href="/generate"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg"
        >
          Generate Your Own Image
        </a>
      </div>
    </section>
  );
};

export default page;
