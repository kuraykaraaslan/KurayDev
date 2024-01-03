import React, { PropsWithChildren } from "react";
const ErrorLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
export default ErrorLayout;