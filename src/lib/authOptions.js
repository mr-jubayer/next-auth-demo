import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { collectionNames, connectDB } from "./connectDB";

const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const user = await connectDB(collectionNames.USERS).findOne({
          username,
        });
        if (!user) return;

        const isPasswordOk = user.password === password;

        if (isPasswordOk) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const payload = {
        userId: user.id,
        username: user.name,
        emailAddress: user.email,
        photo: user.image,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
      };

      const isExist = await connectDB(collectionNames.USERS).findOne({
        userId: user.id,
      });

      if (!isExist) {
        await connectDB(collectionNames.USERS).insertOne(payload);
      }
      return true;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.username = token.username;
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
  },
};

export { authOptions };

/**
 * TODO:
 *
 * 1. Integrate github provider - done
 * 2. Integrate facebook provider - wait
 * 3. Take callback - signIn method and log signIn info
 * 4. validate the user:
 *    - if the user is already exist in my db then signIn
 *    - if the user haven't create new user and store user with a role "user"
 *
 * */
