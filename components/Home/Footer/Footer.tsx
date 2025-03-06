const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050505]">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-1 border-white/20 space-y-6 sm:space-y-0">
        {/* first part */}
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl w-[80%] text-white font-bold">
            W develop and create digital future
          </p>
        </div>
        {/* second part */}
        <div className="">
          <h1 className="textxl font-bold text-white mt-6">Address</h1>
          <p className="text-white opacity-60 mt-4">Melvy view </p>
          <p className="text-white opacity-60">Lacote Nigeria</p>
        </div>
        {/* third part */}
        <div>
          <h1 className="textxl font-bold text-white mt-6">Contact</h1>
          <p className="text-white opacity-60 mt-4">Email</p>
          <p className="text-white sm:text-lg text-base font-bold opacity-60">
            imgGenInfo@gmail.com
          </p>
          <p className="text-white opacity-60 mt-4">Phone</p>
          <p className="text-white sm:text-lg text-base font-bold opacity-60">
            +23400622007098
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-gray-300 mt-7">
        ImgGen Ai, &copy; 2025. Allrights reserved
      </div>
    </div>
  );
};

export default Footer;
