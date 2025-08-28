"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  MessageSquareDiff,
  ShoppingCart,
  Bell,
  Building,
  CandlestickChart,
  Globe,
  Headphones,
  LayoutDashboard,
  LineChart,
  Newspaper,
  Settings,
  User,
  Wallet,
  SearchIcon,
  SearchCheckIcon,
  SearchXIcon,
} from "lucide-react"

const Header = () => {
  const [display, setDisplay] = useState(false)


  return (
    <div>
      {/* Top Header */}
      <header className="bg-white body-font flex flex-row border-b-2 shadow-2xl">
        <div className="container mx-auto flex flex-wrap p-5 justify-between md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <span className="ml-3">
              <span className="text-green-500 text-3xl font-bold">TRA</span>
              <span className="text-2xl">VEST</span>
            </span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-2">

            <form className="max-w-md mx-auto">
              <div className="border-2 rounded-xl flex items-center flex-row pl-2">
              <SearchIcon className="text-gray-400"/>

              <input type="search" placeholder="Search..." className="p-2 outline-0"/>
              </div>
            </form>

            <Button className="bg-white text-black border-2 hover:bg-black hover:text-white">
              <MessageSquareDiff />
            </Button>
            <Button className="bg-white text-black border-2 hover:bg-black hover:text-white">
              <ShoppingCart />
            </Button>
            <Button
              onClick={() => setDisplay(!display)}
              className="block md:hidden bg-white text-black border-2 hover:bg-black hover:text-white"
            >
              <Menu />
            </Button>
          </nav>
        </div>
      </header>

      {/* Backdrop when sidebar is open */}
      {display && (
        <div
          onClick={() => setDisplay(false)}
          className="fixed inset-0 backdrop-blur-2xl  md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        id="separator-sidebar"
        className={`fixed left-0 w-72 h-[calc(100%-5rem)] overflow-y-auto 
        transition-transform duration-300 transform
        ${display ? "translate-x-0" : "-translate-x-full"} 
        backdrop-blur-xl `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className="flex gap-2">
              <Button>Trading Mode</Button>
              <Button>Investing Mode</Button>
            </li>
            <li>
              <Link
                href="/investingPortfolio"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LayoutDashboard />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Wallet />
                <span className="ms-3">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LineChart />
                <span className="ms-3">Markets</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CandlestickChart />
                <span className="ms-3">Trade</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Globe />
                <span className="ms-3">Financial Markets</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Building />
                <span className="ms-3">Company Financing</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <User />
                <span className="ms-3">Profile/Account</span>
              </Link>
            </li>
          </ul>

          {/* Bottom section */}
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Newspaper />
                <span className="ms-3">News & Education</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Bell />
                <span className="ms-3">Notifications</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Settings />
                <span className="ms-3">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Headphones />
                <span className="ms-3">Support</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Header
