"use client"


import Image from "next/image";
import Header from "./component/header";
import StockTabularForm from "./component/StockTabularForm";
import SellStock from "./component/SellStock";
import Link from "next/link";
import Sidebar from "./component/Sidebar";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {

  const [marketNews, setNarketNews] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const FetchNews = async()=>{
    try{
      const res = await fetch("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=sYrNDmU4kWW0X1r6JbGn8QGPIy92iMhOdBWQX61e")
      const data = res.json()
      setNarketNews(data)
      console.log(data)
    }catch(err){
      console.error("Couldn't load any news",err)
    }finally{
      setLoading(false)
    }
  }
  FetchNews()
  }, [])
  


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content wrapper */}
      <main className="pt-24 sm:ml-64 p-6 space-y-8">
        
        {/* Hero Section */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Trader 👋</h1>
          <p className="text-gray-600 mt-1">
            Track your portfolio, explore markets, and stay ahead.
          </p>
        </section>

        {/* Account Snapshot */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-green-600">
              $52,340 <ArrowUpRight className="inline ml-2 text-green-600" />
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Today&apos;s P&amp;L</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-red-500">
              -$230 <ArrowDownRight className="inline ml-2 text-red-500" />
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Cash Balance</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-blue-600">
              $5,000
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="flex flex-wrap gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow">
            Buy Stocks
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow">
            Sell Stocks
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Deposit Funds
          </Button>
        </section>

        {/* Market Highlights */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Market Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow">
              <CardHeader><CardTitle>S&P 500</CardTitle></CardHeader>
              <CardContent className="text-lg font-semibold text-green-600">+1.24%</CardContent>
            </Card>
            <Card className="shadow">
              <CardHeader><CardTitle>NASDAQ</CardTitle></CardHeader>
              <CardContent className="text-lg font-semibold text-red-500">-0.87%</CardContent>
            </Card>
            <Card className="shadow">
              <CardHeader><CardTitle>DOW JONES</CardTitle></CardHeader>
              <CardContent className="text-lg font-semibold text-green-600">+0.54%</CardContent>
            </Card>
          </div>
        </section>

        {/* News Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Latest Market News</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                📈 Tech stocks rally as AI demand surges
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                🏦 Federal Reserve hints at interest rate pause
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                💹 Oil prices climb amid global supply concerns
              </Link>
            </li>
          </ul>
        </section>

        {/* Existing Components */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SellStock />
          <StockTabularForm />
        </section>
      </main>
    </div>
  );
}
