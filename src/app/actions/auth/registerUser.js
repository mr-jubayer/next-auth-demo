"use server";

import { collectionNames, connectDB } from "@/lib/connectDB";

const registerUser = async (payload) => {
  try {
    const result = await connectDB(collectionNames.USERS).insertOne(payload);
    return { result };
  } catch (error) {
    console.log(error);
  }
};

export { registerUser };
