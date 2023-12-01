import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/"> SpotiStats </Link>
              </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                    <Link href="/recommendations"> Playlist Reccomendations</Link>
                    <Link href="/statistics"> Account Statistics</Link>
                    <Link href="/explore">Explore Similar Artists</Link>
                </div>
            </div>         
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
