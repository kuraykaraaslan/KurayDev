import React, { PropsWithChildren } from "react";
const GuestLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
        <h1>Guest Layout</h1>
      <main>{children}</main>
    </>
  );
};
export default GuestLayout;