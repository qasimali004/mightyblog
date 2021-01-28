import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="navbar header navbar-expand-sm  sticky-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Logo</a>
          </Link>
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
        </div>
      </nav>
    </>
  );
}
