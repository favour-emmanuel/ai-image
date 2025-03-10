const page = () => {
  return (
    <section className="px-6 lg:px-14 pt-24 pb-20">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
        Have questions? Reach out to us, and we’ll get back to you as soon as
        possible.
      </p>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-6 rounded-lg border border-white/20 mt-8">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 mb-4 bg-gray-900 text-white rounded-lg outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 mb-4 bg-gray-900 text-white rounded-lg outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 mb-4 bg-gray-900 text-white rounded-lg outline-none h-28"
        ></textarea>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default page;
