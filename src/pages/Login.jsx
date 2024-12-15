import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: "mor_2314",
      password: "83r5^_",
    });

    const token = response.data.token;
    // console.log(token)

    // // Token fakestoreapidan kemiy qosa boshqa api token olish uchun
    // // fakestore yaxshi ishlamagani uchun shuni ishlatsayam bo'ladi

    // const response = await fetch('https://dummyjson.com/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: 'emilys',
    //     password: 'emilyspass',
    //   }),
    // })
    // const data = await response.json()
    // const token = data.accessToken
    // console.log(token)


    if(token){
      dispatch(login({ token, user: { email: email, password: password } }));
    }else {
      throw new Error("token kemadi")
    }
  }

  return (
    <div className="grid place-items-center py-2">
      <h2>Login</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col w-fit gap-2 px-4 py-8 border border-black rounded-lg"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id=""
          placeholder="Enter your email"
          className="py-1 px-2 border border-black rounded-lg"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id=""
          placeholder="Enter your password"
          className="py-1 px-2 border border-black rounded-lg"
        />
        <button
          type="submit"
          className="py-1 px-2 border border-black rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;