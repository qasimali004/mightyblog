import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import {useRouter} from "next/router";

export default function Register() {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [successmsg, setsuccessmsg] = useState("");
  const [erralert, seterralert] = useState(false);
  const [succalert, setsuccalert] = useState(false);
  const submitLogin = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const formdata = JSON.stringify({
      email,
      password: pwd,
    });
    axios
      .post(`https://mightyblognext.vercel.app/api/auth/login`, formdata, config)
      .then((res) => {
        setsuccessmsg(res.data.msg);
        seterralert(false)
        setsuccalert(true)
        cookie.set('email',res.data.user.email)
        cookie.set('token',res.data.token)
        router.push("/")

      })
      .catch((err) => {
          setsuccalert(false)
          seterralert(true)
        seterrmsg(err.response.data.msg);
      });
  };
  const showsuccessalert = () => {
    return (
      <div className="alert alert-success alert-dismissible fade show">
        <strong>Success!</strong> {successmsg}.
      </div>
    );
  };
  const showerralert = () => {
    return (
      <div className="alert alert-danger alert-dismissible fade show">
        <strong>Error!</strong> {errmsg}.
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container">
        <h2>Login</h2>
        {
            succalert ? showsuccessalert() : null
        }
        {
            erralert ? showerralert() : null
        }
        <form onSubmit={submitLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setpwd(e.target.value)}
              value={pwd}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <div>
          <span>
            Don't have a account: <Link href="/register">Register</Link>{" "}
          </span>
        </div>
      </div>
    </>
  );
}
