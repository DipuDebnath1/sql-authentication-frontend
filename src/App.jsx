import { Outlet } from "react-router-dom"
import Navbar from "./Navber"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  )
}

export default App
