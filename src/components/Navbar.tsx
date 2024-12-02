import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Authpic from './Authpic';
import Forres from './Forres';

async function Navbar() {
  return (
    <div>
      {/* Navbar Wrapper */}
      <div className="flex justify-between items-center text-white font-bold px-10 py-5 bg-gradient-to-r from-black via-gray-800 to-gray-900">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl">
            QuoteAura
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex gap-11">
            <Link href="/">
              <li className="hover:border-b-4 hover:duration-300 hover:border-white">Home</li>
            </Link>
            <Link href="/quotes">
              <li className="hover:border-b-4 hover:duration-300 hover:border-white">Quotes</li>
            </Link>
            <Link href="/about">
              <li className="hover:border-b-4 hover:duration-300 hover:border-white">About</li>
            </Link>
            <Link href="/contact">
              <li className="hover:border-b-4 hover:duration-300 hover:border-white">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center">
          <Authpic />
          <div className="lg:hidden block">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu className="text-3xl text-white hover:text-gray-300 transition-all duration-300" />
              </SheetTrigger>
              <SheetContent>
                <Forres />
                <ul className="flex flex-col text-black font-bold text-xl py-2">
                  <Link href="/">
                    <li className="py-2 hover:text-gray-500">Home</li>
                  </Link>
                  <Link href="/quotes">
                    <li className="py-2 hover:text-gray-500">Quotes</li>
                  </Link>
                  <Link href="/about">
                    <li className="py-2 hover:text-gray-500">About</li>
                  </Link>
                  <Link href="/contact">
                    <li className="py-2 hover:text-gray-500">Contact</li>
                  </Link>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
