import React from "react";

export default function LoginPage() {
  return (
    <>
      <a href={`${process.env.REACT_APP_SERVER}/auth/google`}>Login with Google Account</a>
    </>
  );
}
