import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "../../components/admin/header";
import Sidenav from "../../components/admin/sidenav";
import Table from "../../components/admin/categories-table";

export default function Categories() {
  const [sideNave, setsideNave] = useState(true);
  const [categories, setcategories] = useState([]);
  const isSidenavOpen = () => {
    if (sideNave) {
      setsideNave(false);
    } else {
      setsideNave(true);
    }
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setcategories(json));
  }, []);
  return (
    <>
      <Head>
        <title>Admin -Categories</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap"
          rel="stylesheet"
        />
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
          <div className="categories p-4">
            <div className="row">
              <div className="col-lg-5 add_category">
                <h2 className="mt-2">Add category</h2>
                <div class="form-group">
                  <input
                    type="category"
                    class="form-control mt-4"
                    placeholder="Category name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="category"
                    class="form-control"
                    placeholder="Category slug"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    class="form-control btn btn-primary"
                    value="Add category"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="border p-2">
                <Table posts={categories} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
