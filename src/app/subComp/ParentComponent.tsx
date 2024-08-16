import React, { useState } from 'react'
import SavingGoal from '../charts/SavingGoal'
import PlusSignInput from './PlusSignInput'

const ParentComponent: React.FC = () => {
    const [goalData, setGoalData] = useState<{[key: string]: number}>({})
  
    const addSavingGoal = (name: string, amount: number) => {
      setGoalData(prevData => ({
        ...prevData,
        [name]: amount
      }))
    };

    const removeSavingGoal = (name: string) => {
      setGoalData(prevData => {
        const newData = {...prevData};
        delete newData[name];
        return newData
      })
    }
  
    return (
      <div>
        <SavingGoal goalData = {[goalData]}/>
        <PlusSignInput 
          addSavingGoal={addSavingGoal} 
          removeSavingGoal = {removeSavingGoal}
          currentGoals={goalData}
        />
      </div>
    );
  };
  
  export default ParentComponent;