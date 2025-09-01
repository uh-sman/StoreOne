import { socialIcons } from "@/constants/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-green-600 relative">
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 px-6 py-10 md:px-12 lg:px-16 xl:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Logo + Newsletter */}
          <div>
            <Image
              src="/images/StoreOne_white.svg"
              alt="StoreOne Logo"
              width={153}
              height={32}
              className="mb-6"
            />
            <h2 className="text-white text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <form className="flex flex-nowrap items-center bg-white/80 rounded-full px-2 py-2 shadow-sm w-full max-w-xl">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 min-w-0 px-3 py-2 text-sm bg-transparent outline-none text-black placeholder-gray-600"
              />
              <button
                type="submit"
                className="shrink-0 bg-green-500 text-white text-sm px-5 py-2 rounded-full hover:bg-green-600 transition"
              >
                Subscribe
              </button>
            </form>

            <div className="flex gap-4 mt-5">
              {socialIcons.map(({ imageUrl, alt }, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={alt}
                  width={32}
                  height={32}
                  className="hover:opacity-80 transition"
                />
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Support</h2>
            <ul className="space-y-3 text-white text-sm font-medium">
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Return & Exchange</Link>
              </li>
              <li>
                <Link href="#">Shipping</Link>
              </li>
              <li>
                <Link href="#">Size Chart</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Legal</h2>
            <ul className="space-y-3 text-white text-sm font-medium">
              <li>
                <Link href="#">Cookies Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Contact</h2>
            <ul className="space-y-5 text-white text-sm">
              <li className="flex items-start gap-4">
                <Image
                  src="/icons/Pin_Location_Filled_Icon.svg"
                  alt="Location Icon"
                  width={24}
                  height={24}
                />
                <p>
                  Professional Services Hub
                  <br />
                  123 Main Street, Suite 456
                  <br />
                  New York, NY 10001, USA
                </p>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/icons/Envelope_Icon.svg"
                  alt="Email Icon"
                  width={24}
                  height={24}
                />
                <p>help@storeone.com</p>
              </li>
              <li className="flex gap-4 pt-2">
                <Image
                  src="/icons/App_Store.svg"
                  width={120}
                  height={40}
                  alt="App Store"
                />
                <Image
                  src="/icons/Play_Store.svg"
                  width={120}
                  height={40}
                  alt="Play Store"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
