import Head from "next/head";
import Link from "next/link";
import {useState} from "react";
import axios from "axios";

export default function Register() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [pwd, setpwd] = useState("")
  const [errmsg, seterrmsg] = useState("")
  const [successmsg, setsuccessmsg] = useState("")
  const submitRegister = async (e) => {
    e.preventDefault();
    const config ={
      headers:{
        "Content-Type": "application/json"
      }
    }
    const formdata = JSON.stringify({
      name,
      email,
      password:pwd
    })
    axios.post(`https://mightyblognext.vercel.app/api/auth/register`,formdata,config)
    .then(res => {
      setsuccessmsg(res.data.msg)
    }).catch(err => {
      seterrmsg(err.response.data.msg)
    })
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="container">
        <h2>Registeration</h2>
        <div className="alert alert-success alert-dismissible fade show">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <strong>Success!</strong> {successmsg}.
        </div>
        <div className="alert alert-danger alert-dismissible fade show">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <strong>Error!</strong> {errmsg}.
        </div>
        <form onSubmit={submitRegister}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter name"
              name="name"
              onChange={e => setname(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={e => setemail(e.target.value)}
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
              onChange={e => setpwd(e.target.value)}
              value={pwd}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
        <div><span>Already have a account: <Link href="/login">Login</Link> </span></div>
      </div>
    </>
  );
}
