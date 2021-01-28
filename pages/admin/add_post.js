import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Header from "../../components/admin/header";
import Sidenav from "../../components/admin/sidenav";
import Editor from "../../components/admin/posts/editor";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import { BsPlus } from "react-icons/bs";

export default function addPost() {
  const [sideNave, setsideNave] = useState(true);
  const [content, setContent] = useState();
  const [tags, settags] = useState([]);
  const isSidenavOpen = () => {
    if (sideNave) {
      setsideNave(false);
    } else {
      setsideNave(true);
    }
  };
  return (
    <>
      <Head>
        <title>Admin -Posts</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap"
          rel="stylesheet"
        />
        <meta charset="utf-8" />
      </Head>
      <div className="admin-panel">
        <div
          className="sidebar"
          style={{ width: `${sideNave ? "20%" : "0%"}` }}
        >
          <Sidenav hide={sideNave} />
        </div>
        <div className="main" style={{ width: `${sideNave ? "80%" : "100%"}` }}>
          <Header showsidenav={isSidenavOpen} />
          <div className="p-4 add_post">
            <h2 className="mb-3">Add new post</h2>
            <div className="row">
              <div className="col-lg-8 p-2">
                <div className="form-group mb-5">
                  <input
                    type="title"
                    className="form-control"
                    placeholder="Enter title"
                  />
                </div>
                <Editor content={content} setContent={setContent} />
                <div className="form-group mt-4">
                  <TagsInput
                    value={tags}
                    onChange={(value) => settags(value)}
                  />
                </div>
              </div>
              <div className="col-lg-4 p-2">
                <div className="publish-sec">
                  <span>Publish</span>
                  <div className="line mt-3"></div>
                  <div className="publish-btns p-4">
                    <button className="btn">Save to draft</button>
                    <button className="btn btn-primary">Publish</button>
                  </div>
                </div>
                <div className="categories-sec mt-3">
                  <span>Categories</span>
                  <div className="line mt-3"></div>
                  <div class="form-group p-3">
                    <select multiple class="form-control mb-3">
                      <option>Uncategorized</option>
                      <option>MERN</option>
                      <option>NODE JS</option>
                      <option>REACT JS</option>
                      <option>PHP SCRIPTS</option>
                    </select>
                    <Link href="/admin/categories"><a><BsPlus />Add category</a></Link>
                  </div>
                </div>
                <div className="thumbnail-sec mt-3">
                  <span>Thumbnail</span>
                  <div className="line mt-3"></div>
                  <div className="form-group p-3">
                    <input type="file" class="form-control-file border" />
                    <img src="https://reactjsexample.com/content/images/2021/01/use-file-picker.jpg" class="rounded mt-3" alt="Cinque Terre" width="100%" /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
