"use client";

import { signIn } from "next-auth/react";
import Button from "../ui/Button";

const Login = () => {
  return <Button onClick={() => signIn()}>Login</Button>;
};

export { Login };
