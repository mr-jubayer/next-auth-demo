"use server";

import { connectDB } from "@/lib/connectDB";

const registerUser = async (payload) => {
  try {
    const result = await connectDB("users").insertOne(payload);
    return { result };
  } catch (error) {
    console.log(error);
  }
};

export { registerUser };
