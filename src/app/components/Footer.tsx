const Footer = () => { 
    return (
         <footer className=" text-white mt-auto bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#press" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-gray-400 hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#updates" className="text-gray-400 hover:text-white transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#docs" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#guides" className="text-gray-400 hover:text-white transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 YourBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;