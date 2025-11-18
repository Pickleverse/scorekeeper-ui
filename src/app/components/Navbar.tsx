import Link from "next/link";
const Navbar = () => { 
    return (
      <nav className="fixed top-0 w-full bg-transparent z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-blue-400 text-3xl">
                YourBrand
              </a>
            </div>
            <div className="hidden md:flex space-x-8 font-extrabold text-3xl">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#features" className="text-white hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">
                Contact
              </a>
                          <div>
              <Link
                href="/login"
                className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;