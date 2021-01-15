import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { parseCookies, destroyCookie } from "nookies";
import cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [uemail, setuemail] = useState("Login first");
  const [isAuth, setisAuth] = useState(false);
  const logout = () => {
    cookies.remove("token");
    cookies.remove("email");
    router.push("/login");
  };
  useEffect(() => {
    const { token, email } = parseCookies();
    if (token) {
      setuemail(email);
      setisAuth(true);
    }
  }, [logout]);
  return (
    <>
      <div>{uemail}</div>
      {isAuth ? (
        <button className="btn" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link href="/login">login</Link>
      )}
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  if (!token) {
    const { res } = ctx;
    res.writeHead(302, { Location: "/login" });
    res.end();
  }
  return {
    props: {},
  };
}
