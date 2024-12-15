import { Route, Routes } from "react-router-dom"

import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Header from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <div>
      <Header />
      <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Homepage />}></Route>
          </Route>
      </Routes>
    </div>
  )
}

export default App
