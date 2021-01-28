import Link from "next/link";
import { IoIosMenu } from "react-icons/io";


export default function Home(props) {
  return (
    <>
      <nav className="navbar header navbar-expand-sm  sticky-top">
        <IoIosMenu onClick={props.showsidenav} className="menu-btn" size="30px" />
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-2">
            <Link href="/admin/dashboard">
              <a className="login-btn">Admin</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="login-btn">Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
