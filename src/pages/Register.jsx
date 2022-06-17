/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { NavLink } from 'react-router-dom';

const Register = () => (
  <div
    className="relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200 overflow-y-hidden"
  >
    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
      <div className="m-auto space-y-8 md:w-8/12 lg:w-full">
        <p className="font-bold text-xl text-black">Dashboard</p>
        <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
          <div className="lg:grid lg:grid-cols-2">
            <div className="rounded-lg lg:block" hidden>
              <img
                src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                className="rounded-l-xl object-cover"
                loading="lazy"
                height=""
                width=""
                alt="music mood"
              />
            </div>
            <div className="p-6 sm:p-16">
              <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                Create your Account !
              </h2>
              <form action="" className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700">
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="pwd" className="text-gray-700">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500"
                >
                  <span className="text-white">Continue</span>
                </button>

                <p className="border-t pt-6 text-sm">
                  Alredy have an account ?<NavLink to="/login"> Log in</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
