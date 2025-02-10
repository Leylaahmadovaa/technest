import { useState } from "react";
import LoginPart from "./LogIn";
import SignupPart from "./SignUp";

export default function ThirdProject() {
  const [title, setTitle] = useState("Login");

  return (
    <div className="bg-gradient-to-l from-fuchsia-200 to-blue-300 h-screen flex items-center justify-center">
      <div className="bg-white w-[25rem] h-5/6 rounded-2xl shadow-3xl py-11 px-8">
        <div className="text-center text-4xl font-bold">
          {title == "Login" ? "Login" : "Signup"} Form
        </div>
        <div className="my-10 rounded-2xl border-solid border-stone-300 border w-full p-0 font-semibold text-lg">
          <button
            onClick={() => setTitle("Login")}
            className={title=="Login"?"rounded-2xl w-1/2 h-12 text-white bg-gradient-to-l from-blue-900 to-blue-700":"w-1/2 h-12"}
          >
            Login
          </button>
          <button
            onClick={() => setTitle("Signup")}
            className={title=="Signup"?"rounded-2xl w-1/2 h-12 text-white bg-gradient-to-l from-blue-900 to-blue-700":"w-1/2 h-12"}
          >
            Signup
          </button>
        </div>
        {title == "Login" ? <LoginPart></LoginPart> : <SignupPart></SignupPart>}
        {title == "Login" ? (
          <div className="text-center my-7">
            Create an account{" "}
            <span onClick={() => setTitle("Signup")} className="text-sky-600 inline-block cursor-pointer">Signup now</span>
          </div>
        ) : (
          <div className="text-center my-7">
            Already have an account?{" "}
            <span onClick={() => setTitle("Login")} className="text-sky-600 inline-block cursor-pointer">Login</span>
          </div>
        )}
      </div>
    </div>
  );
}
