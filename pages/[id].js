import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import Sidebar from "../components/home/sidebar";
import { BsEye } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";

export default function SinglePost() {
  return (
    <>
      <Header />
      <div className="container home">
        <div className="row">
          <div className="col-lg-8 single-post">
            <div className="d-flex sp-head">
              <p className="post-category">Mern</p>
              <div className="ml-auto">
                <span className="mr-3">
                  <MdAccessTime size="15px" className="mr-1" />3 days ago
                </span>
                <span className="mr-2 views">
                  <BsEye size="15px" /> 456
                </span>
              </div>
            </div>
            <h3>This is post title</h3>
            <img
              src="https://reactjsexample.com/content/images/2021/01/use-file-picker.jpg"
              width="100%"
            />
            <p className="mt-3 mb-4">
              trigger?: "hover" | "click" | "mousedown" The type of action you
              want to apply to the children that will show your content.
              triggerDelay?: number The time in milliseconds that you want to
              delay showing the content after triggering to show. hideTrigger?:
              "click" | "mouseleave" The type of action you want to signal that
              the content should hide. hideDelay?: number The time in
              milliseconds that you want to delay hiding the content after
              triggering to hide. transitionOutMs?: number Important for adding
              leave animations – the amount of time in milliseconds you want
              your content to animate out before unmounting.
              showTransparentUnderlay?: boolean Add this if you want a hidden
              transparent underlay that will cover the entire screen to prevent
              clicks on UI outside of your content.
            </p>
            <div className="post-tags">
              <div className="tags">
              <h5 className="mr-4">Tags:</h5>
                <span>mern</span>
                <span>mern</span>
                <span>mern</span>
                <span>mern</span>
                <span>mern</span>
                <span>mern</span>
                <span>mern</span>
                <span>mern</span>
                <span>react</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
