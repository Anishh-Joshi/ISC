// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=2040&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500">
            Call us
          </span>

          <a
            href="#"
            className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
          >
            0123456789
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>Monday to Friday: 10am - 5pm</li>
          <li>Weekend: 10am - 3pm</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          <FaFacebook/>

          <FaInstagram/>

        <FaTwitter/>
          <FaTiktok/>



        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                1on1 Coaching
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Company Review
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Accounts Review
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                HR Consulting
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                SEO Optimisation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Meet the Team
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Accounts Review
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Cookies
            </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;
