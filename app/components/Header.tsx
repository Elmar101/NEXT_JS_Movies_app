"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-700 h-14">
      <Link
        className="px-[10px]"
        href={{
          pathname: "/my-room",
        }}
      >
        Admin My-Room |
      </Link>

      <Link
        className="px-[10px]"
        href={{
          pathname: "/test",
        }}
      >
        User Test |
      </Link>

      <Link
        className="px-[10px]"
        href={{
          pathname: "/test",
          query:{
            error: true
          }
        }}
      >
        User Test query error |
      </Link>

      <Link
        className="px-[10px]"
        href={{
          pathname: "/test",
          query:{
            notFound: true
          }
        }}
      >
        User Test query notFound |
      </Link>

      <Link
        className="px-[10px]"
        href={{
          pathname: "/404page",
        }}
      >
        User create own 404 |
      </Link>


      <Link
        className="px-[10px]"
        href={{
          pathname: "/test-private",
        }}
      >
        User Test Private Layout
      </Link>

      <Link
        className="px-[10px]"
        href={{
          pathname: "/about",
        }}
      >
        Users About
      </Link>

      <Link
        className="px-[10px]"
        href={{
          pathname: "/news",
        }}
      >
        Users News
      </Link>

      <Link
        className="px-[10px] border-solid border-black"
        href={{
          pathname: "/news/1",
        }}
      >
        Users News-1
      </Link>

      <Link
        className="px-[10px]"
        href={{
          pathname: "/news/1",
          query: {
            name: "bbc",
            info: "newsAbb",
          },
        }}
      >
        Users News-1 with query
      </Link>
    </div>
  );
};

export default Header;
