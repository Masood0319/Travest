import React from 'react'
import Link from 'next/link'
import {Bell, Book, Building, CandlestickChart, Globe, Headphones, LayoutDashboard, LineChart, Newspaper, Settings, User, Wallet} from "lucide-react"
import { Button } from '@/components/ui/button'


const Sidebar = () => {
    return (
        <div>
            <aside id="separator-sidebar" className="fixed top-19 left-0 z-40 w-72 h-[calc(100%-4rem)] overflow-y-auto transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className='flex '>
                            <Button>
                                Trading Mode
                            </Button>
                            <Button>
                                Investing Mode
                            </Button>
                        </li>
                        <li>
                            <Link href="dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <LayoutDashboard />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="portfolio" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Wallet />
                                <span className="ms-3">Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="markets" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <LineChart />
                                <span className="flex-1 ms-3 whitespace-nowrap">Markets</span>                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <CandlestickChart />
                                <span className="flex-1 ms-3 whitespace-nowrap">Trade</span>                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                               <Globe />
                                <span className="flex-1 ms-3 whitespace-nowrap">Financial Markets</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Building />
                                <span className="flex-1 ms-3 whitespace-nowrap">Company Financing</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="auth" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <User />
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile/Account</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <Link href="marketnews" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <Newspaper />
                                <span className="ms-3">News & Education</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Bell className="" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <Settings />
                                <span className="ms-3">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
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

export default Sidebar
