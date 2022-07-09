import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="text">Goal:</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="goal"
          placeholder="Add goal ..."
          className="w-[336px] md:w-[376px] rounded-md bg-slate-400 p-2 text-black outline-none active:outline-none"
        />

        <button
          type="submit"
          className="mx-auto py-3 flex items-center justify-center gap-2 w-[336px] md:w-[376px] rounded-md mt-3 bg-black text-white hover:scale-105 duration-500"
        >
          Add goal <FaPlus />
        </button>
      </form>
    </section>
  );
};

export default GoalForm;
