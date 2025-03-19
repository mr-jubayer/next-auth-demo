"use client";

import { useRouter } from "next/navigation";
import Button from "../../../components/ui/Button";
import { registerUser } from "@/app/actions/auth/registerUser";

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = event.target;

    const username = formData.username.value;
    const password = formData.password.value;

    const payload = { username, password };
    const result = await registerUser(payload);

    console.log(result);
  };
  return (
    <div>
      <Button onClick={() => router.push("/")}>Back</Button>
      <form
        onSubmit={handleSubmit}
        className="p-5 border-2 border-gray-400 w-md flex justify-center flex-col items-center mx-auto mt-20"
      >
        <label className="block">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="px-3 py-2 rounded-md border ml-2 outline-none  mb-2"
          />
        </label>
        <label className="block">
          <input
            type="text"
            name="password"
            placeholder="password"
            className="px-3 mb-2 py-2 rounded-md border ml-2 outline-none "
          />
        </label>
        <Button type={"submit"}>Register</Button>
      </form>
    </div>
  );
};

export { Register };
