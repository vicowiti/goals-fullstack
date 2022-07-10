import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux ";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="py-5">
        <h1 className="text-2xl md:text-4xl">
          Welcome <b className="font-bold">{user && user.name}</b>
        </h1>
        <p className="text-center text-2xl md:text-3xl text-gray-500">
          Goals Dashboard
        </p>
      </section>
      <GoalForm />
      <section>
        {goals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {goals.map((goal) => (
              <GoalItem goal={goal} key={goal._id} />
            ))}
          </div>
        ) : (
          <h3>You are yet to set goals</h3>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
