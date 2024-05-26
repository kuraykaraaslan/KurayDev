// write me a full login page with the following requirements:
// - the page should be a functional component
// - the page should have a form with two inputs: email and password
// - the page should have a submit button
// - the page should have a link to the registration page
// - the page should have a link to the forgot password page
// - the page should have a link to the home page

import React from "react";

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
      <a href="/register">Register</a>
      <a href="/forgot-password">Forgot Password</a>
      <a href="/">Home</a>
    </div>
  );
};

export default LoginPage;
