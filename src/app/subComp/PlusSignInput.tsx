import React, { useState } from "react";

interface PlusSignInputProps {
  addSavingGoal: (name: string, amount: number) => void;
}

const PlusSignInput: React.FC<PlusSignInputProps> = ({ addSavingGoal }) => {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [addAmount, setAddAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goalName && addAmount) {
      addSavingGoal(goalName, parseFloat(addAmount));
      setGoalName("");
      setGoalAmount("");
      setAddAmount("");
    }
  };
  return (
    <div className="w-48 h-96">
      <div className="flex flex-col m-2">
        <form onSubmit={handleSubmit} className="space-y-2">
          <label
            htmlFor="varText"
            className="text-sm block font-medium text-gray-900"
          >
            Set saving for
          </label>
          <input
            type="text"
            id="varText"
            required
            placeholder="Macbook"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="saveAmount"
            className="text-sm block font-medium text-gray-900 mt-2"
          >
            Set goal
          </label>
          <input
            type="number"
            id="saveAmount"
            required
            placeholder="$"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="addAmount"
            className="text-sm block font-medium text-gray-900 mt-2"
          >
            Add amount
          </label>
          <input
            type="number"
            id="addAmount"
            required
            placeholder="$"
            value={addAmount}
            onChange={(e) => setAddAmount(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-200 text-sm font-medium text-gray-900 w-12 h-8 rounded-md flex justify-center items-center m-4"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlusSignInput;
