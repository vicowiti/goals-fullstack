import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="grid grid-cols-1 justify-center w-full h-screen">
      <div className=" w-[360px] md:w-[400px] ml-auto mx-auto">
        <header className="flex flex-col justify-center items-center gap-4 mt-6">
          <FaUser size={50} />
          <h1 className="font-bold text-2xl md:text-4xl">
            Register New Account
          </h1>
        </header>

        <form
          className="flex flex-col justify-center items-start mt-5"
          onSubmit={handleSubmit}
        >
          <div className="px-3 flex flex-col ">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              name="firstName"
              placeholder="First name ..."
              className="w-[336px] md:w-[376px] bg-slate-400 p-2 text-black outline-none active:outline-none"
            />
          </div>

          <div className="px-3 p4-4 flex flex-col">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              name="lastName"
              placeholder="Last name ..."
              className="w-[336px] md:w-[376px] bg-slate-400 p-2 text-black outline-none active:outline-none"
            />
          </div>

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
              className="w-[336px] md:w-[376px] bg-slate-400 p-2 text-black outline-none active:outline-none"
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
              className="w-[336px] md:w-[376px] bg-slate-400 p-2 text-black outline-none active:outline-none"
            />
          </div>

          <div className="px-3 p4-4 flex flex-col">
            <label htmlFor="password2">Confirm Password:</label>
            <input
              type="password"
              value={password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
              name="password2"
              placeholder="Password ..."
              className="w-[336px] md:w-[376px] bg-slate-400 p-2 text-black outline-none active:outline-none"
            />
          </div>

          <button className="mx-auto py-3 px-8 mt-3 bg-black text-white hover:scale-105 duration-500">
            Register
          </button>
        </form>

        {
          <div className="text-red-700 flex items-center gap-5 mt-2 mx-auto">
            <AiFillInfoCircle /> Kindly fill in all the fields
          </div>
        }
      </div>
    </section>
  );
};

export default Register;
