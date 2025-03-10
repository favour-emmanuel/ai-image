import { Mountain } from "lucide-react"; // Google icon alternative

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden w-full max-w-4xl shadow-lg">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-white mb-5">
            Sign in to OnePoint
          </h2>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="py-3 px-4 w-full rounded-md outline-none bg-gray-700 text-white border border-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              placeholder="Set password"
              className="py-3 px-4 w-full rounded-md outline-none bg-gray-700 text-white border border-gray-500"
            />
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="border-b border-gray-500 flex-1"></div>
            <p className="text-gray-400">Or</p>
            <div className="border-b border-gray-500 flex-1"></div>
          </div>

          {/* Google Sign Up */}
          <div className="flex items-center justify-center gap-3 py-3 my-3 bg-gray-700 hover:bg-gray-600 transition rounded-md cursor-pointer">
            <Mountain className="text-white text-xl" />{" "}
            {/* Google icon alternative */}
            <h2 className="text-base text-white">Sign up with Google</h2>
          </div>

          <button className="w-full text-white bg-cyan-300 hover:bg-cyan-500 cursor-pointer transition text-base font-semibold py-3.5 rounded-md">
            Sign Up Free
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/images/r4.jpg"
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
