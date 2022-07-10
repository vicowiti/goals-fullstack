import React from "react";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-400 w-[340px] h-[100px] rounded-md">
      <header className="flex justify-between border-b-2 border-gray-500">
        <section className="m-2">
          {new Date(goal.createdAt).toLocaleString("en-GB", {
            timeZone: "EAT",
          })}
        </section>
        <section className="m-2 group">
          <GiCancel
            size={25}
            className="group-hover:scale-105"
            onClick={() => {
              dispatch(deleteGoal(goal._id));
              window.location.reload();
            }}
          />
        </section>
      </header>
      <main>{goal.text}</main>
    </div>
  );
};

export default GoalItem;
