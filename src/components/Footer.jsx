import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Footer Column 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vestibulum orci ut ante.
            </p>
          </div>

          {/* Footer Column 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-red-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  Favorites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-sm">
              Email: contact@swiggy.com
              <br />
              Phone: +1 123-456-7890
            </p>
          </div>

          {/* Footer Column 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-red-200"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-200"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer