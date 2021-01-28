import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "../../components/admin/header";
import Sidenav from "../../components/admin/sidenav";
import Table from "../../components/admin/posts/table";

export default function Posts() {
  const [sideNave, setsideNave] = useState(true);
  const [posts, setposts] = useState([]);
  const isSidenavOpen = () => {
    if (sideNave) {
      setsideNave(false);
    } else {
      setsideNave(true);
    }
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setposts(json));
  }, []);
  return (
    <>
      <Head>
        <title>Admin -Posts</title>
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
          <div className="p-4">
            <Table posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
