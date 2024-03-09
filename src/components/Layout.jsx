import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"


const Layout = () => {
  return (
    <div className="layout-center">
        <NavBar />
        <Outlet />
        <footer>Geeks 2024</footer>
    </div>
  )
}
export default Layout