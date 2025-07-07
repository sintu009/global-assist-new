export default function ServiceSection() {
  return (
    <section className="relative bg-[#0b0b1f] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Headline */}
      <h2 className="text-center text-xl md:text-2xl font-light mb-8">The service we offer</h2>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        {/* Left Text */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-3xl md:text-4xl font-semibold">Unlocking Efficiency</h3>
          <p className="text-lg font-medium">
            Administrative & <br />
            Executive Assistant
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center md:col-span-1">
          <img
            src="/assets/service-head.png" // replace with your actual image path
            alt="Service Mannequin"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-6 md:col-span-1">
          <p className="text-base leading-relaxed text-gray-300">
            In the fast-paced world of business, having a reliable Administrative & Executive
            Assistant is like having a trusted ally by your side
          </p>

          <button className="bg-[#1d1d2f] text-white py-2 px-5 rounded-md hover:bg-[#2a2a40] transition text-sm">
            Explore More →
          </button>
        </div>
      </div>

      {/* Background title (faded text) */}
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-[10vw] font-extrabold text-purple-700 opacity-10 z-0 pointer-events-none select-none tracking-wide">
        ADMINISTRATIVE
      </h1>
    </section>
  );
}
