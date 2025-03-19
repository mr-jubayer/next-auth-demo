import Button from "@/components/ui/Button";
import { UserInfo } from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Login } from "@/components/auth/Login";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="mb-2 tracking-[-.01em] text-3xl">
          Get started with next Auth.
        </h2>

        <div className="flex w-full  justify-center gap-5 mb-5">
          <Login />
          <Link href={"/register"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
        <UserInfo />
        <p className="mt-4"> {JSON.stringify(session)} </p>
      </main>
    </div>
  );
}
