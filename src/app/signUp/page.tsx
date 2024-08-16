"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignUp: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen w-screen bg-purple-50">
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              src="/assets/dog.png"
              alt="random pic"
              className="mt-5 mx-auto h-10 w-auto"
            />
            <h2 className="flex justify-center m-10 font-bold text-2xl">
              Sign up
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col m-2">
              <div>
                <form action="#" method="POST" className="space-y-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div>
                    <input
                      type="lastName"
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="lastName"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col m-2">
              <div>
                <form action="#" method="POST" className="space-y-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div>
                    <input
                      type="firstName"
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="firstName"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="m-2">
            <form action="#" method="POST" className="space-y-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>
          <div className="flex flex-col m-2">
            <div>
              <form action="#" method="POST" className="space-y-3">
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set user name
                </label>
                <div>
                  <input
                    type="userName"
                    id="userName"
                    name="userName"
                    autoComplete="userName"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-end mt-10 mr-2">
            <button
              type="submit"
              onClick={() => router.push("/screen")}
              className="block w-[30%] rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
          
        </div>
      </div>
      <div className="w-1/2 h-screen">
        <img src="/assets/bg.jpg" alt="background pic" className="h-screen" />
      </div>
    </div>
  );
};

export default SignUp;
