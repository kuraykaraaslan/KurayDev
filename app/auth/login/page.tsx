// write me a full login page with the following requirements:
// - the page should be a functional component
// - the page should have a form with two inputs: email and password
// - the page should have a submit button
// - the page should have a link to the registration page
// - the page should have a link to the forgot password page
// - the page should have a link to the home page

import React from "react";
import { signIn } from "@/auth"


const LoginPage = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
};

export default LoginPage;
