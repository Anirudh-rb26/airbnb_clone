import Link from "next/link";
import Image from "next/image";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import { Usernav } from "./Usernav";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        {/* Navbar Logo */}
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="Airbnb Desktop Logo"
            className="w-32 hidden lg:block"
          ></Image>
          <Image
            src={MobileLogo}
            alt="Airbnb Mobile Logo"
            className="block lg:hidden w-12"
          ></Image>
        </Link>
        {/* Searchbar */}
        <SearchBar></SearchBar>
        {/* DropDownMenu I Guess */}
        <Usernav></Usernav>
      </div>
    </nav>
  );
}
