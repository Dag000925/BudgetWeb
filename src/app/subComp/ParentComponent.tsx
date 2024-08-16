import React, { useState } from 'react'
import SavingGoal from '../charts/SavingGoal'
import PlusSignInput from './PlusSignInput'

const ParentComponent: React.FC = () => {
    const [goalData, setGoalData] = useState([
      {
        
      },
    ]);
  
    const addSavingGoal = (name: string, amount: number) => {
      setGoalData(prevData => {
        const newData = [...prevData];
        newData[0] = { ...newData[0], [name]: amount };
        return newData;
      });
    };
  
    return (
      <div>
        <SavingGoal goalData={goalData} />
        <PlusSignInput addSavingGoal={addSavingGoal} />
      </div>
    );
  };
  
  export default ParentComponent;