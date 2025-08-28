// "use client";

export default function AccountOverview() {
    const accountData = {
        portfolioValue: 125000,
        investedCapital: 100000,
        unrealizedPL: 18000,
        realizedPL: 7000,
        cashBalance: 20000,
    };

    const formatCurrency = (value) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);

    const Card = ({ title, value, color }) => (
        <div className="bg-white dark:bg-gray-900 shadow-lg m-3 rounded-2xl p-4">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
    );

    return (
        <div className="flex flex-col border-1 border-gray-950 m-6 rounded-2xl bg-gradient-to-bl from-slate-700 to-fuchsia-950">
            <div className="">
                <Card
                    title="Portfolio Value"
                    value={formatCurrency(accountData.portfolioValue)}
                    color="text-blue-600"
                />
                <Card
                    title="Invested Capital"
                    value={formatCurrency(accountData.investedCapital)}
                    color="text-gray-800"
                />
                <Card
                    title="Unrealized P&L"
                    value={formatCurrency(accountData.unrealizedPL)}
                    color={
                        accountData.unrealizedPL >= 0 ? "text-green-600" : "text-red-600"
                    }
                />
                <Card
                    title="Realized P&L"
                    value={formatCurrency(accountData.realizedPL)}
                    color={
                        accountData.realizedPL >= 0 ? "text-green-600" : "text-red-600"
                    }
                />
                <Card
                    title="Cash Balance"
                    value={formatCurrency(accountData.cashBalance)}
                    color="text-purple-600"
                />
            </div>
        </div>
    );
}
