"use client";

import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="mb-2 tracking-[-.01em] text-3xl">
          Get started with next Auth.
        </h2>

        <div className="flex w-full  justify-center gap-5">
          <Button onClick={() => signIn()}>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </main>
    </div>
  );
}
