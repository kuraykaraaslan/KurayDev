// write me a full login page with the following requirements:
// - the page should be a functional component
// - the page should have a form with two inputs: email and password
// - the page should have a submit button
// - the page should have a link to the registration page
// - the page should have a link to the forgot password page
// - the page should have a link to the home page

import React from "react";
import { signIn } from "@/auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle, faMicrosoft,faApple } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const LoginPage = () => {

  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto bg-base-100 p-4 rounded-md shadow-lg">
    <h1 className="text-xl font-bold text-center flex justify-center mb-2">
      <Link href="/" className="text-indigo-600"><FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2 mt-1" /></Link>
      Login</h1>
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit"
        className="mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

      >
        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2 mt-1" />
        Signin with GitHub</button>
    </form>
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit"
        className="mb-2 flex w-sm justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 min-w-md"

      >
        <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2 mt-1" />
        Signin with Google</button>
    </form>
    <form
      action={async () => {
        "use server"
        await signIn("microsoft")
      }}
    >
      <button type="submit"
        className="mb-2 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

      >
        <FontAwesomeIcon icon={faMicrosoft} className="w-5 h-5 mr-2 mt-1" />
        Signin with Microsoft</button>
    </form>
    <form
      action={async () => {
        "use server"
        await signIn("apple")
      }}
    >
      <button type="submit"
        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

      >
        <FontAwesomeIcon icon={faApple} className="w-5 h-5 mr-2 mt-1" />
        Signin with Apple</button>
    </form>
    </div>
  );
};

export default LoginPage;
