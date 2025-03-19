import { ServerApiVersion, MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/next-auth";

const connectDB = (collection) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db().collection(collection);
};

export { connectDB };
