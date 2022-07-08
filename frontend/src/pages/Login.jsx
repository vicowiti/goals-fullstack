import { useState, useEffect } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset, login } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const { user, message, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, user, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Fill in all required fields");
    }

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) return <Spinner />;
  return (
    <section className="grid grid-cols-1 justify-center w-full h-screen">
      <div className=" w-[360px] md:w-[400px] ml-auto mx-auto">
        <header className="flex flex-col justify-center items-center gap-4 mt-6">
          <FaSignInAlt size={50} />
          <h1 className="font-bold text-2xl md:text-4xl">Login</h1>
        </header>

        <form
          className="flex flex-col justify-center items-start mt-5"
          onSubmit={handleSubmit}
        >
          <div className="px-3 p4-4 flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="email"
              placeholder="Email ..."
              className="w-[336px] md:w-[376px] rounded-md bg-slate-400 p-2 text-black outline-none active:outline-none"
            />
          </div>

          <div className="px-3 p4-4 flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              name="password"
              placeholder="Password ..."
              className="w-[336px] md:w-[376px] rounded-md bg-slate-400 p-2 text-black outline-none active:outline-none"
            />
          </div>

          <button className="mx-auto py-3 w-[336px] md:w-[376px] rounded-md mt-3 bg-black text-white hover:scale-105 duration-500">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
