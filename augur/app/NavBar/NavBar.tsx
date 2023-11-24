import React from "react";
import Link from "next/link";
import Image from "../asset/logo.png";
import NextImage from "next/image";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <Link href="/">
        <div className={`text-white font-bold`}>
          <NextImage src={Image} alt="Logo" width={100} height={50} />
        </div>
      </Link>
      <ul className="flex space-x-8">
        <Link href="/trade">
          <li className="text-white underline">TRADE</li>
        </Link>
        <Link href="/help-center">
          <li className="text-white underline">HELP CENTER</li>
        </Link>
        <Link href="/developers">
          <li className="text-white underline">DEVELOPERS</li>
        </Link>
        <Link href="/blog">
          <li className="text-white underline">BLOG</li>
        </Link>
        <Link href="/faos">
          <li className="text-white underline">FAOS</li>
        </Link>
        <Link href="/augurdaq">
          <li className="text-white underline">AUGURDAQ</li>
        </Link>
        <Link href="/migrate-your-rep">
          <li className="text-white underline">MIGRATE YOUR REP</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
