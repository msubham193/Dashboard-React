/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
                  src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                  className="rounded-l-xl object-cover"
                  loading="lazy"
                  height=""
                  width=""
                  alt="music mood"
                />
              </div>
              <div className="p-6 sm:p-16">
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Sign in to your account
                </h2>
                <form action="" className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      <button className="p-2 -mr-2" type="reset">
                        <span className="text-sm text-sky-500">
                          Forgot your password ?
                        </span>
                      </button>
                    </div>
                    <input
                      type="password"
                      name="pwd"
                      id="pwd"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full py-3 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500"
                  >
                    <span className="text-white">Continue</span>
                  </button>

                  <p className="border-t pt-6 text-sm">
                    Don't have an account ?
                    <NavLink to="/register">Sign up</NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
