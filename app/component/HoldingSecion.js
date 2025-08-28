"use client";

export default function HoldingsSection() {
  const holdings = [
    {
      ticker: "AAPL",
      name: "Apple Inc.",
      quantity: 50,
      avgPrice: 150,
      currentPrice: 175,
    },
    {
      ticker: "TSLA",
      name: "Tesla Inc.",
      quantity: 20,
      avgPrice: 700,
      currentPrice: 680,
    },
    {
      ticker: "MSFT",
      name: "Microsoft Corp.",
      quantity: 15,
      avgPrice: 280,
      currentPrice: 310,
    },
  ];

  // Calculate helper values
  const totalValue = holdings.reduce(
    (acc, h) => acc + h.quantity * h.currentPrice,
    0
  );

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Holdings</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100 dark:bg-gray-800">
              <th className="p-3 text-sm font-medium">Ticker</th>
              <th className="p-3 text-sm font-medium">Company</th>
              <th className="p-3 text-sm font-medium">Quantity</th>
              <th className="p-3 text-sm font-medium">Avg. Buy Price</th>
              <th className="p-3 text-sm font-medium">Current Price</th>
              <th className="p-3 text-sm font-medium">Unrealized P&amp;L</th>
              <th className="p-3 text-sm font-medium">% of Portfolio</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h, i) => {
              const invested = h.quantity * h.avgPrice;
              const currentVal = h.quantity * h.currentPrice;
              const pl = currentVal - invested;
              const plPercent = ((pl / invested) * 100).toFixed(2);
              const allocation = ((currentVal / totalValue) * 100).toFixed(2);

              return (
                <tr
                  key={i}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="p-3 font-bold">{h.ticker}</td>
                  <td className="p-3">{h.name}</td>
                  <td className="p-3">{h.quantity}</td>
                  <td className="p-3">{formatCurrency(h.avgPrice)}</td>
                  <td className="p-3">{formatCurrency(h.currentPrice)}</td>
                  <td
                    className={`p-3 font-semibold ${
                      pl >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {formatCurrency(pl)} ({plPercent}%)
                  </td>
                  <td className="p-3">{allocation}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
