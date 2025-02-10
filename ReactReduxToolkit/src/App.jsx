import { useState } from "react";
import Counter from "./pages/Counter";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store/auth";
///////////////////////////////////////
import Cookies from "universal-cookie";
///////////////////////////////////////

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const refresh = useSelector((state) => state.auth.refresh);
  const access = useSelector((state) => state.auth.access);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ////////////////////////////////////
  const cookies= new Cookies()
  ////////////////////////////////////
  const login = async () => {
    const response = await fetch("https://test.mybrands.az/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => res.json());
    ///////////////////////////////
    let date = new Date()
    date.setFullYear(2025)
    ///////////////////////////////
    if (response.access) {
      console.log("dispatch");
  ////////////////////////////////////
  cookies.set("JWT_token",response.access,{expires: date})//Tutaq ki login eliyəndə response-umuzu göndərmək istəyiriksə, yadda saxlamaq istəyiriksə, cookies. yazanda görəcəyik ki, get var, getAll var, remove var, set var. Biz set-dən istifadə edəcəyik. Bunun value-si "response.access"-dir. Bunun options-ları var "{expires:10000}"(expires time-ı var. 10000-dən sonra avtomatik silinsin.)  
  ////////////////////////////////////
      dispatch(
        authAction.login({ access: response.access, refresh: response.refresh })
      );
    }
    console.log(response);
  };
  const logout = () => {
    ////////////////////////////////
    let data=cookies.get("JWT_token")
    console.log(data);
    ////////////////////////////////
    // console.log(refresh);
    // console.log(access);
    dispatch(authAction.logout())
    
  };

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-11">
        <input
          className="border-2"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          className="border-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        <button
          className="border-2 rounded-sm"
          onClick={isLogged ? logout : login}
        >
          {isLogged ? "Logout" : "Login"}
        </button>
      </div>
      {access}
      <br />
      {refresh}
      <Counter />
      <h1 className="mt-7 text-center">{counter}</h1>
    </>
  );
}
export default App;
