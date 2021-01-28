import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import Posts from "../components/home/posts";
import Sidebar from "../components/home/sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container home">
        <div className="row">
          <div className="col-lg-8">
            <Posts />
            <Posts />
            <Posts />
          </div>
          <div className="col-lg-4 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
