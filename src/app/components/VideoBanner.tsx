const VideoBanner = () => {
    return (
        <div className="min-w-screen h-250 relative border-none overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full  h-full absolute top-0 left-0 object-cover">
            <source src="/vids/chai.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        <div className="content-overlay">
        {/* Place your banner content (text, buttons, etc.) here */}
<div className="max-w-4xl mx-auto text-center absolute top-1/2 left-250">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Your Solution
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Transform your business with our innovative nephew, Chai. Simple, powerful, and engineered for success.
          </p>
          <a
            href="#features"
            className="inline-block bg-white text-purple-600 text-2xl px-10 py-5 rounded-sm font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Learn More
          </a>
          </div>
            </div>
        </div>
    )
}

export default VideoBanner;