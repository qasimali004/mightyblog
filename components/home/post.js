import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

export default function Post() {
  return (
    <div className="row post">
        <div className="col-lg-5 col-md-5 p-0 col-sm-12">
         <img src="https://reactjsexample.com/content/images/2021/01/use-file-picker.jpg" width="100%" height="100%" />
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 p-3" >
          <span className="post-category">Category</span>
          <p className="font-weight-bold mt-2 post-title text-nowrap overflow-hidden">Simple react hook to open browser file selector</p>
          <p className="post-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div><span className="date mr-5">16 JANUARY 2021</span> <span className="mr-2 views"><BsEye /> 456 </span> <span className="mr-2 comments"><FaRegComment /> 65</span></div>
        </div>
    </div>
  );
}
