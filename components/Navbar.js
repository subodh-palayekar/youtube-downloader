import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between px-10 m-5">
      <Link href="/">
        <Image src="/asset/logo-next.png" className="object-contain" width={40} height={40} alt="logo" />
      </Link>

      <Link href="/how-to-download">
        <p className="text-blue-400 hover:text-blue-500  font-poppins text-xl font-semibold"> How to Download</p>
      </Link>
    </nav>
  );
};

export default Navbar;
