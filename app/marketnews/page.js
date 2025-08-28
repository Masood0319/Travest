"use client"

import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Header from "../component/header"

export default function MarketNews() {
  const [marketNews, setMarketNews] = useState([])
  const [loading, setLoading] = useState(true)

  const FetchNews = async () => {
    try {
      const res = await fetch(
        "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=sYrNDmU4kWW0X1r6JbGn8QGPIy92iMhOdBWQX61e"
      )
      const data = await res.json()
      // Alpha Vantage returns news under "feed"
      setMarketNews(data.feed || [])
    } catch (err) {
      console.error("Couldn't load any news", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    FetchNews()
  }, [])

  return (
    <>
    
    <Header/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">News</h1>

      {loading ? (
        <div className="flex items-center space-x-2 text-gray-600">
          <Loader2 className="animate-spin w-5 h-5" />
          <p>Fetching latest news...</p>
        </div>
      ) : marketNews.length === 0 ? (
        <p className="text-gray-500">No market news found.</p>
      ) : (
        <div className=" gap-4">
          {marketNews.slice(0, 10).map((news, idx) => (
            <Card key={idx} className="shadow hover:shadow-lg transition flex flex-row p-4">
                <div>
                    <img src={news.banner_image} alt="" className="w-40 h-20"/>
                </div>
                <div>
              <CardHeader>
                <CardTitle className="text-base">
                  <a
                    href={news.url}
                    target="_blank"
                    className="hover:underline text-blue-600"
                  >
                    {news.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-2">
                  {news.summary || "Click the title to read full article"}
                </p>
                <div className="text-xs text-gray-500">
                  Source: {news.source || "Unknown"} | Published:{" "}
                  {new Date(news.time_published).toLocaleString()}
                </div>
              </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
    </>
  )
}
