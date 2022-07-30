import React from "react";
import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { HiMenuAlt1, HiMoon, HiSun } from "react-icons/hi";
import Link from "next/link";
import ConnectWalletModal from "../ConnectWallet/ConnectWalletModal";
import SelectChainModal from "../SelectChain/SelectChain";

type Props = {};

const Header = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <nav className="py-2 border-b border-gray-500/20 md:py-5 backdrop-blur-sm dark:bg-black/10 bg-white/10">
        <div className="container flex items-center justify-between px-4 mx-auto sm:flex md:flex sm:items-center xs:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <p className="font-bold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Token Balances
              </p>
            </Link>
            {/* <button
              className="px-3 py-1 text-gray-600 rounded opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <Example />
              <i className="fas fa-bars"></i>
            </button> */}
          </div>
          <div
            className="flex-col items-center p-2 xl:p-0 md:hidden"
            id="navbar-collapse"
          >
            =
          </div>
          <div
            className="flex-col items-center hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0 sm:hidden"
            id="navbar-collapse"
          >
            <SelectChainModal />
            <ConnectWalletModal />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mx-5"
            >
              {theme == "dark" ? <HiSun /> : <HiMoon />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
