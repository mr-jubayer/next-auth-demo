"use client";

import { signOut } from "next-auth/react";
import Button from "../ui/Button";

const Logout = () => {
  return <Button onClick={() => signOut()}>Logout</Button>;
};

export { Logout };
