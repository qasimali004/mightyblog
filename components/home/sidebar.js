import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function Sidebar() {
  return (
    <>
      <div className="search-box">
        <p>Search</p>
        <div className="search">
          <input type="search" name="search" placeholder="Search" />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="categories">
        <p>Categories</p>
        <ul>
          <li className="">
            <span>React js</span> <span className="count">45</span>
          </li>
          <li className="">
            <span>React js</span> <span className="count">45</span>
          </li>
          <li className="">
            <span>React js</span> <span className="count">45</span>
          </li>
          <li className="">
            <span>React js</span> <span className="count">45</span>
          </li>
        </ul>
      </div>
      <div className="popular-posts">
        <p>Popular Posts</p>
        <div className="row">
          <div className="col-lg-12 d-flex p-post">
            <img
              src="https://reactjsexample.com/content/images/2021/01/use-file-picker.jpg"
              height="70px"
              width="90px"
            />
            <div>
              <p className="pp-title ml-3 mt-2">This is post title</p>
              <div>
                <span className="mr-2 ml-3">
                  <MdAccessTime size="15px" className="mr-1" />3 days ago
                </span>{" "}
                <span>
                  <BsEye className="mr-1" size="15px" />
                  657
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 d-flex p-post">
            <img
              src="https://reactjsexample.com/content/images/2021/01/use-file-picker.jpg"
              height="70px"
              width="90px"
            />
            <div>
              <p className="pp-title ml-3 mt-2">This is post title</p>
              <div>
                <span className="mr-2 ml-3">
                  <MdAccessTime size="15px" className="mr-1" />3 days ago
                </span>{" "}
                <span>
                  <BsEye className="mr-1" size="15px" />
                  657
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 d-flex p-post">
            <img
              src="https://reactjsexample.com/content/images/2021/01/use-file-picker.jpg"
              height="70px"
              width="90px"
            />
            <div>
              <p className="pp-title ml-3 mt-2">This is post title</p>
              <div>
                <span className="mr-2 ml-3">
                  <MdAccessTime size="15px" className="mr-1" />3 days ago
                </span>{" "}
                <span>
                  <BsEye className="mr-1" size="15px" />
                  657
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
