import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div id="header-container">
      <div id="header-bar">
        <ul>
          <Link to={''}>Home</Link>
          <Link to={"./login"}>LogIn</Link>
          <Link to={"./signup"}>SignUp</Link>
        </ul>
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </div>
  );
}
