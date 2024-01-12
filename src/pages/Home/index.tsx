import React from 'react'
import ProfileComponent from '../../components/Profile'
import RetirementIncomeComponent from '../../components/RetirementIncome'
import StrategyComponent from '../../components/Startegy'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='sm:h-screen h-full flex flex-col sm:flex-row w-full overflow-hidden'>
        <ProfileComponent />
        <RetirementIncomeComponent />
        <StrategyComponent/>
    </div>
  )
}

export default HomePage