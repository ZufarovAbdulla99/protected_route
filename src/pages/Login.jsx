const Login = () => {
  return (
    <div className="grid place-items-center py-2">
      <h2>Login</h2>
      <form action="" className="flex flex-col w-fit gap-2 px-4 py-8 border border-black rounded-lg">
        <input type="email" name="email" value={""} id="" placeholder="Enter your email" className="py-1 px-2 border border-black rounded-lg"/>
        <input type="password" name="password" value={""} id="" placeholder="Enter your password" className="py-1 px-2 border border-black rounded-lg"/>
        <button type="submit" className="py-1 px-2 border border-black rounded-lg">Login</button>
      </form>
    </div>
  )
}

export default Login