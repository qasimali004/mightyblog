import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../../components/admin/header";
import Sidenav from "../../components/admin/sidenav";
import Stats from "../../components/admin/dashboard/stats";

export default function Dashboard() {
  const [sideNave, setsideNave] = useState(true);
  const isSidenavOpen = () => {
    if(sideNave){
      setsideNave(false)
    }else{
      setsideNave(true)
    }
  }
  return (
    <>
      <Head>
        <title>Admin - Dashboard</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"
            rel="stylesheet"
        />
      </Head>
      <div className="admin-panel">
        <div className="sidebar" style={{width:`${sideNave ? '20%' : '0%'}`}}>
          <Sidenav hide={sideNave} />
        </div>
        <div className="main" style={{width:`${sideNave ? '80%' : '100%'}`}}>
          <Header showsidenav={isSidenavOpen} />
          <div className="p-2">
           <Stats />
          </div>
        </div>
      </div>
    </>
  );
}
