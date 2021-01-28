import Link from "next/link";
import Head from "next/head";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosListBox, IoMdListBox } from "react-icons/io";

export default function Sidenav(props) {
  return (
    <>
      <div className="sidenav">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Link href="/">
          <a className="navbar-brand ml-3">Logo</a>
        </Link>
        <div className="dvider"></div>
        <ul>
          <Link href="/admin/dashboard">
            <li>
              <a>
                <AiFillDashboard size="16px" className={`nav-icon  mr-3 ml-3 ${props.hide ? '' : 'hide'} `} />
                Dashboard
              </a>
            </li>
          </Link>
          <Link href="/admin/posts">
            <li>
              <a>
                <IoMdListBox size="16px" className={`nav-icon  mr-3 ml-3 ${props.hide ? '' : 'hide'}`} />
                Posts
              </a>
            </li>
          </Link>
          <Link href="/admin/categories">
            <li>
              <a>
                <IoIosListBox size="16px" className={`nav-icon  mr-3 ml-3 ${props.hide ? '' : 'hide'}`} />
                Categories
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
