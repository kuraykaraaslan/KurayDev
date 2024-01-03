import React, { PropsWithChildren } from "react";
const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
        <h1>Auth Layout</h1>
      <main>{children}</main>
    </>
  );
};
export default AuthLayout;