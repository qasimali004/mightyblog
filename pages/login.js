import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/header";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <div className="container auth">
        <form>
          <h2>Login</h2>
          <div className="form-group">
            <label>Email:</label>
            <div className="form-control">
              <HiOutlineMail className="input-icon mr-2" size="20px" />
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="form-control">
              <RiLockPasswordFill className="input-icon mr-2" size="20px" />
              <input
                type="password"
                id="pwd"
                placeholder="Enter password"
                name="password"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary form-control">
              Login
            </button>
          </div>
          <div className="social-login mb-4">
            <span>Or Login Using </span>
            <div className="social-icons mt-2">
              <FcGoogle className="icon m-2" size="30px" />
              <FaFacebookF className="icon m-2" size="30px" />
            </div>
          </div>
          <div className="form-group">
            <span className="auth-footer">
              Don't have a account: <Link href="/register"><a>Register</a></Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
