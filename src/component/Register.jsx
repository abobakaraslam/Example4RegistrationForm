// File: Register.jsx located in root-directory/src/component/

import React from "react";
import { useState } from "react";

function Register() {
  //initializing and setting values for name input
  const [name, setName] = useState(""); //initialize name with null value
  const onChangeHandleName = (event) => {
    //name of variable "event" can be changed
    setName(event.target.value);
  };
  //initializing and setting values for fname input
  const [fname, setFName] = useState(""); //initialize fname with null value
  const onChangeHandleFatherName = (event) => {
    //name of variable "event" can be changed
    setFName(event.target.value);
  };
  //initializing and setting values for email input
  const [email, setEmail] = useState(""); //initialize email with null value
  const onChangeHandleEmail = (event) => {
    //name of variable "event" can be changed
    setEmail(event.target.value);
  };
  //initializing and setting values for password input
  const [password, setPassword] = useState(""); //initialize password with null value
  const onChangeHandlePassword = (event) => {
    //name of variable "event" can be changed
    setPassword(event.target.value);
  };
  //initializing and setting values for cpassword input
  const [cpassword, setCPassword] = useState(""); //initialize cpassword with null value
  const onChangeHandleCPassword = (event) => {
    //name of variable "event" can be changed
    setCPassword(event.target.value);
  };
  //initializing and setting values for status input
  const [status, setStatus] = useState(""); //initialize status with null value
  const onChangeHandleStatus = (event) => {
    //name of variable "event" can be changed
    setStatus(event.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault(); //prevent page loading when click on button
    console.log("Value of name: ", name);
    console.log("Value of Father Name: ", fname);
    console.log("Value of Email: ", email);
    console.log("Value of Password: ", password);
    console.log("Value of Confirm Password: ", cpassword);
    console.log("Value of Status: ", password);
  };

  return (
    <div>
      {/* Registration Page Container */}
      <div className="p-5">
        <div className="text-center m-10">
          <h2 className="text-3xl font-bold dark:text-white">Registration</h2>
        </div>
        <div className="text-center">
          <p>Register yourself to use our services.</p>
        </div>
        <div>
          <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:m-2 lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form action="#" className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        name="name"
                        id="name"
                        required=""
                        value={name}
                        onChange={onChangeHandleName}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="M Abo Bakar Aslam"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Father Name
                      </label>
                      <input
                        name="fname"
                        id="fname"
                        required=""
                        value={fname}
                        onChange={onChangeHandleFatherName}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="M Aslam"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required=""
                        value={email}
                        onChange={onChangeHandleEmail}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        required=""
                        value={password}
                        onChange={onChangeHandlePassword}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="••••••••"
                        required=""
                        value={cpassword}
                        onChange={onChangeHandleCPassword}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="status"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Status
                      </label>
                      <input
                        name="status"
                        id="status"
                        required=""
                        value={status}
                        onChange={onChangeHandleStatus}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Teacher/Student"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={onSubmitHandle}
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Create an Account
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;
