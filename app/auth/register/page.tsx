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
import { faGithub, faGoogle, faMicrosoft, faApple } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const RegisterPage = () => {

  return (
    <>
      <h1 className="text-xl font-bold text-center flex justify-center">
        <Link href="/" className="text-indigo-600"><FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2 mt-1" /></Link>
        Register</h1>
      <Link href="/auth/login" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</Link>
    </>
  );
};

export default RegisterPage;
