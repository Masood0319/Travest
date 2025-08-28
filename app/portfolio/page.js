import React from 'react'
import AccountOverview from '../component/AccountOverveiw'
import HoldingsSection from '../component/HoldingSecion'
import PortfolioPerformance from '../component/PortfolioPerformance'
import Header from '../component/header'

const page = () => {
  return (
    <div className='bg-gradient-to-br from-gray-800 to-green-900 min-h-[100vh]'>
        <Header color="gray"/>
            <h1 className="font-bold py-5 md:text-4xl sm:text-3xl p-3 text-white">Account Overview</h1>
        <AccountOverview/>
        <HoldingsSection/>
        <PortfolioPerformance/>
    </div>
  )
}

export default page
