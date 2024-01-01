"use client";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
// import { usePathname } from "next/navigation";
// import classNames from "classNames";



const NavBar = () => {
//     const currentPath = usePathname();
// const links = [
//   { label: "Dashboard", href: "/" },
//   { label: "Issues", href: "/issues" },
// ];

  return (
    <div className="  border-b mb-5 px-s h-14 items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <Link href="/">
          <AiFillBug />
        </Link>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="sm:ml-6 ">
            <ul className="  flex space-x-6">
              {/* {links.map((link) => (
                <li key={link.href}> */}

                  <Link className="text-orange-400 hover:text-zinc-800 transition-colors" href='/'>Dashboard</Link>
                  <Link className="text-zinc-500 hover:text-zinc-800 transition-colors"href='/issues'>issues</Link>
                  {/* <Link
                    className={classNames({
                      " text-orange-400": link.href === currentPath,
                      "text-zinc-500": link.href !== currentPath,
                      "hover:text-zinc-800 transition-colors": true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            // </ul> */}
            </ul> 
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
