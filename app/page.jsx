import Accountstats from "./pages/accountstats";
import Link from "next/link";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./components/navbar";

export default function Home() {
  return(
    <home className="bg-page text-default-text">
     <div className="pt-6 pb-8">
      <div className="m-48 pt-3">
        <p className="text-2xl tracking-widest text-center font-semibold">Want to know your Spotify statistics but don't want to wait till November for Spotify Wrapped? Get to know about your Spotify stats along with your all-time favorite songs on Spotify.</p>
      </div>
     </div>
    </home>
  )
}
