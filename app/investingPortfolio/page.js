"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Head from "next/head";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Header from "../component/header";

export default function InvestingPortfolio() {
  // Example data (you can later fetch from API)
  const portfolio = {
    totalValue: "$25,430",
    dividendYield: "3.2%",
    ownershipCompanies: 12,
    longTermGrowth: "+18% (1Y)",
  };

  const growthData = [
    { month: "Jan", value: 20000 },
    { month: "Feb", value: 21000 },
    { month: "Mar", value: 22000 },
    { month: "Apr", value: 23000 },
    { month: "May", value: 24000 },
    { month: "Jun", value: 25430 },
  ];

  return (
    <>
    <Header/>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Portfolio Value */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Total Portfolio Value</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{portfolio.totalValue}</p>
        </CardContent>
      </Card>

      {/* Dividend Yield */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Dividend Yield</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-600">{portfolio.dividendYield}</p>
        </CardContent>
      </Card>

      {/* Ownership */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Companies Owned</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{portfolio.ownershipCompanies}</p>
        </CardContent>
      </Card>

      {/* Long-term Growth */}
      <Card className="shadow-lg rounded-2xl col-span-1 md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>Long-term Growth</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <p className="mt-4 text-lg font-semibold text-blue-600">
            {portfolio.longTermGrowth}
          </p>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
