"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react"
import Header from "../component/header"

const dummyData = [
  { symbol: "AAPL", name: "Apple", price: 182.12, change: +1.24, volume: "52M", marketCap: "2.8T" },
  { symbol: "TSLA", name: "Tesla", price: 254.76, change: -2.12, volume: "38M", marketCap: "800B" },
  { symbol: "AMZN", name: "Amazon", price: 138.22, change: +0.87, volume: "30M", marketCap: "1.4T" },
  { symbol: "MSFT", name: "Microsoft", price: 325.44, change: +0.56, volume: "28M", marketCap: "2.7T" },
]

export default function MarketsPage() {
  const [search, setSearch] = useState("")

  const filteredData = dummyData.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
      stock.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
    
        <Header/>
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Main Market Table */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Market Overview</CardTitle>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search stocks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-48"
              />
              <Button variant="outline"><Search size={18} /></Button>
            </div>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="text-left py-2">Symbol</th>
                  <th className="text-left py-2">Name</th>
                  <th className="text-right py-2">Price</th>
                  <th className="text-right py-2">Change</th>
                  <th className="text-right py-2">Volume</th>
                  <th className="text-right py-2">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((stock) => (
                  <tr key={stock.symbol} className="border-b hover:bg-gray-50">
                    <td className="py-2 font-bold">{stock.symbol}</td>
                    <td className="py-2">{stock.name}</td>
                    <td className="text-right py-2">${stock.price.toFixed(2)}</td>
                    <td className={`text-right py-2 font-medium ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {stock.change >= 0 ? (
                        <span className="flex items-center justify-end gap-1"><ArrowUpRight size={16} /> {stock.change}%</span>
                      ) : (
                        <span className="flex items-center justify-end gap-1"><ArrowDownRight size={16} /> {stock.change}%</span>
                      )}
                    </td>
                    <td className="text-right py-2">{stock.volume}</td>
                    <td className="text-right py-2">{stock.marketCap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Movers Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Top Movers</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="gainers">
              <TabsList>
                <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
                <TabsTrigger value="losers">Top Losers</TabsTrigger>
                <TabsTrigger value="active">Most Active</TabsTrigger>
              </TabsList>
              <TabsContent value="gainers" className="pt-4">
                <ul className="space-y-2">
                  <li className="flex justify-between"><span>NVDA</span> <span className="text-green-600">+4.5%</span></li>
                  <li className="flex justify-between"><span>AMD</span> <span className="text-green-600">+3.2%</span></li>
                </ul>
              </TabsContent>
              <TabsContent value="losers" className="pt-4">
                <ul className="space-y-2">
                  <li className="flex justify-between"><span>TSLA</span> <span className="text-red-600">-2.1%</span></li>
                  <li className="flex justify-between"><span>BA</span> <span className="text-red-600">-1.7%</span></li>
                </ul>
              </TabsContent>
              <TabsContent value="active" className="pt-4">
                <ul className="space-y-2">
                  <li className="flex justify-between"><span>AAPL</span> <span>52M</span></li>
                  <li className="flex justify-between"><span>AMZN</span> <span>48M</span></li>
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar Widgets */}
      <div className="space-y-6">
        <Card>
          <CardHeader><CardTitle>Global Indices</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>S&P 500</span> <span className="text-green-600">+0.8%</span></li>
              <li className="flex justify-between"><span>NASDAQ</span> <span className="text-red-600">-0.3%</span></li>
              <li className="flex justify-between"><span>KSE-100</span> <span className="text-green-600">+1.2%</span></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Market News</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="hover:underline cursor-pointer">📈 Tech stocks rally as AI boom continues</li>
              <li className="hover:underline cursor-pointer">💰 Oil prices dip amid global uncertainty</li>
              <li className="hover:underline cursor-pointer">🏦 Central banks hint at rate cuts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}
