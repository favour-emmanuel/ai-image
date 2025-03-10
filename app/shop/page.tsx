const page = () => {
  return (
    <section className="px-6 lg:px-14 py-10">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        AI Image Shop
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
        Browse and purchase high-quality AI-generated images for personal or
        commercial use.
      </p>

      {/* Product Grid (Replace with dynamic content later) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20 shadow-lg">
          <img
            src="/images/sample4.jpg"
            alt="AI Art"
            className="rounded-lg mb-3"
          />
          <h3 className="text-lg font-bold text-white">Abstract AI Art</h3>
          <p className="text-gray-300 my-1">$15.00</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md w-full">
            Buy Now
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20 shadow-lg">
          <img
            src="/images/sample5.jpg"
            alt="AI Art"
            className="rounded-lg mb-3"
          />
          <h3 className="text-lg font-bold text-white">Surreal AI Painting</h3>
          <p className="text-gray-300 my-1">$20.00</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md w-full">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
