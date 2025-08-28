"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Wallet, ArrowUpRight, ArrowDownRight, Newspaper, Bell, TrendingUp, History } from "lucide-react"
import { ResponsiveContainer, LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip } from "recharts"
import Header from "../component/header"


// Dummy data for portfolio graph
const portfolioData = [
  { name: "Mon", value: 1200 },
  { name: "Tue", value: 1350 },
  { name: "Wed", value: 1100 },
  { name: "Thu", value: 1450 },
  { name: "Fri", value: 1600 },
]

export default function Dashboard() {
  return (
    <>
    <Header/>
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Top Row - Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$25,400</CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Invested</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$18,200</CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Available Cash</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$7,200</CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>P&L</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center text-2xl font-bold text-green-600">
            <ArrowUpRight className="mr-2" /> +5.3%
          </CardContent>
        </Card>
      </div>

      {/* Middle Row - Graph + Market Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ReLineChart data={portfolioData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} />
              </ReLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Market Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Apple (AAPL)</span>
              <span className="text-green-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" /> +2.4%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Microsoft (MSFT)</span>
              <span className="text-red-600 flex items-center">
                <ArrowDownRight className="mr-1 h-4 w-4" /> -1.2%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Bitcoin (BTC)</span>
              <span className="text-green-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" /> +3.1%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      

      {/* Bottom Row - Transactions + News */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center"><History className="mr-2 h-5 w-5" /> Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Buy AAPL</span>
              <span className="text-green-600">+$1,200</span>
            </div>
            <div className="flex justify-between">
              <span>Sell TSLA</span>
              <span className="text-red-600">-$800</span>
            </div>
            <div className="flex justify-between">
              <span>Deposit</span>
              <span className="text-green-600">+$5,000</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center"><Newspaper className="mr-2 h-5 w-5" /> Market News</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="hover:underline cursor-pointer">📈 Global stocks rise on tech rally...</p>
            <p className="hover:underline cursor-pointer">💰 Oil prices hit 3-month high...</p>
            <p className="hover:underline cursor-pointer">🏦 Central banks signal policy shift...</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button className="bg-green-600 hover:bg-green-700 text-white">Deposit Funds</Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Buy Asset</Button>
        <Button className="bg-red-600 hover:bg-red-700 text-white">Withdraw</Button>
      </div>
    </div>
    </>
  )
}
