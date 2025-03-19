/**
 *
 * STEPS TO INTEGRATE BASIC __NEXT-AUTH__
 *
 * 1. install next-auth from their official docs
 * 2. crate folder like "app/api/auth/[...nextauth]/route.js" and do the following things (server Comp)
 *        - create auth options like {providers[serviceProvider]} --> ((export it for use server comp for user data))
 *        - pass it "NextAuth" function and export it like - export { handler as GET, handler as POST, authOptions };
 *
 * 3. create a provider (context) and wrap the body with "SessionProvider" from next auth ( "client comp")
 * 4. now get user state every time use - useSession and show details on screen ("client comp")
 * 5. now show user state on the server user use this async function - "getServerSession(authOptions)"
 * */
