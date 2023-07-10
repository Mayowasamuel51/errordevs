"use client";
import React, { useState, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { FaSearch } from "react-icons/fa";

import { redirect, useRouter } from "next/navigation";

const Profile = (props) => {
 
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow((prev) => !prev);
  };
  // console.log(session)

  const ref = useRef();

  const clickMenu = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    },
    [show]
  );

  useEffect(() => {
    document.addEventListener("click", clickMenu);
  }, [clickMenu]);

  return (
    <>
      <div
        className={`px-2 inline-block relative cursor-pointer`}
        onClick={handleMenu}
        ref={ref}
      >
        {props.profile ? (
          <Image
            src={props.profile}
            alt={props.profile}
            width={500}
            height={500}
            className="rounded-full md:w-[100px] md:h-[50px] w-[80px] h-[80px] "
          />
        ) : (
          <UserCircleIcon className="md:w-[100px] md:h-[50px] w-[80px] h-[80px]" />
        )}
      </div>

      {/* Profile dropdown */}

      <div
        className={`absolute top-[4.5em] right-5 w-[20rem] bg-slate-50 shadow-md z-50 max-h-max rounded-sm sm:p-6 p-10 ${show ? "block" : "hidden"
          }`}
        style={{
          transitionTimingFunction: "ease-in",
          transitionDelay: "1.5s",
          transitionDuration: "2.5s",
          transitionProperty: "all",
        }}
      >
        <div className="flex flex-1 justify-center  align-baseline gap-5 items-center mb-4 p-2">
          {props.profile ? (
            <Image
              src={props.profile}
              alt={props.profile}
              className="rounded-full relative w-[60px] h-[60px]"
              width={80}
              height={80}
            />
          ) : (
            <UserCircleIcon className="w-20 h-20" />
          )}
          <Link className="flex flex-col leading-6 items-center" href="/dashboard">
            <span className="text-[15px] font-medium">
              { props.displayName}
            </span>
            <small className="text-[10px]">{props.displayName}</small>
          </Link>
        </div>

        <hr />

        <div className="mt-3 p-1 md:hidden block">
          <div className="flex flex-1 justify-center items-center align-baseline mx-auto gap-0 ">
            
            
          </div>
        </div>
        <hr />

        <div className="mt-3">
          <ul className="list-none leading-10">
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="/dashboard/rules" className="text-[12px]">
                Our Rules
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="/dashboard/settings" className="text-[12px]">
                Settings
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="/dashboard/question" className="text-[12px]">
                Comment
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="#" className="text-[12px]">
                Timetable
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div className="mt-3">
          <ul className="list-none leading-10">
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href={"/"} className="text-[12px]">
                Review
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href={"/"} className="text-[12px]">
                Payments
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href={"/"} className="text-[12px]">
                Ask a question
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div className="mt-3">
          <ul className="list-none leading-10">
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <button
               onClick={props.out}
                className="text-[12px]"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
