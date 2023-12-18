"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav className="flex  items-center justify-between px-3 sm:px-10 m-5 max-w-screen-xl mx-auto">
      <Link
        onClick={() => {
          router.push("/");
        }}
        href="/"
      >
        <Image
          src="/asset/logo-next.png"
          className="object-contain"
          width={35}
          height={35}
          alt="logo"
        />
      </Link>
      {pathName != "/how-to-download" ? (
        <Link
          onClick={() => {
            router.push("/how-to-download");
          }}
          className=""
          href="/how-to-download"
        >
          <p className="text-gradient  font-poppins  text-[20px] sm:text-xl font-semibold">
            {" "}
            How to Download 
          </p>
        </Link>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
