import React from "react";

const page = () => {
  return (
    <section className="px-6 lg:px-14 py-10">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        AI Image Generation Blog
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
        Discover the latest trends, tutorials, and insights about AI-generated
        art and technology.
      </p>

      {/* Blog Posts List (Replace with dynamic content later) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20 shadow-lg">
          <h3 className="text-xl font-bold text-white">The Future of AI Art</h3>
          <p className="text-gray-300 my-2">
            How AI is changing the way we create digital art.
          </p>
          <a
            href="/blog/future-of-ai-art"
            className="text-purple-400 hover:underline"
          >
            Read More
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20 shadow-lg">
          <h3 className="text-xl font-bold text-white">
            Best AI Art Generators in 2025
          </h3>
          <p className="text-gray-300 my-2">
            A comparison of the top AI image generators available today.
          </p>
          <a
            href="/blog/best-ai-generators"
            className="text-purple-400 hover:underline"
          >
            Read More
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20 shadow-lg">
          <h3 className="text-xl font-bold text-white">
            How to Monetize AI Art
          </h3>
          <p className="text-gray-300 my-2">
            A guide on selling AI-generated images online.
          </p>
          <a
            href="/blog/monetize-ai-art"
            className="text-purple-400 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
