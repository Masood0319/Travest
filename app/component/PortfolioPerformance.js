"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioPerformance() {
  // Mock data for portfolio vs benchmark
  const data = [
    { date: "Jan", portfolio: 10000, benchmark: 9800 },
    { date: "Feb", portfolio: 10500, benchmark: 9900 },
    { date: "Mar", portfolio: 10200, benchmark: 10100 },
    { date: "Apr", portfolio: 11000, benchmark: 10400 },
    { date: "May", portfolio: 11500, benchmark: 10800 },
    { date: "Jun", portfolio: 11200, benchmark: 10900 },
  ];

  const [period, setPeriod] = useState("YTD");

  // Mock returns by period
  const returns = {
    Daily: "+0.8%",
    Weekly: "+2.3%",
    Monthly: "+5.1%",
    YTD: "+12.5%",
  };

  return (
    <Card className="p-4 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Performance Tracking</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Period Selection Buttons */}
        <div className="flex gap-2 mb-4">
          {["Daily", "Weekly", "Monthly", "YTD"].map((p) => (
            <Button
              key={p}
              variant={period === p ? "default" : "outline"}
              onClick={() => setPeriod(p)}
              className="rounded-full"
            >
              {p}
            </Button>
          ))}
        </div>

        {/* Returns Snapshot */}
        <div className="mb-6">
          <p className="text-lg font-medium">Return ({period}): <span className="text-green-600">{returns[period]}</span></p>
        </div>

        {/* Equity Curve Chart */}
        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="portfolio" stroke="#4f46e5" strokeWidth={3} name="Your Portfolio" />
              <Line type="monotone" dataKey="benchmark" stroke="#16a34a" strokeWidth={3} name="Benchmark (KSE-100)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
