"use client";

const { useSession } = require("next-auth/react");

const UserInfo = () => {
  const session = useSession();

  return (
    <div>
      <p> {JSON.stringify(session)} </p>
    </div>
  );
};

export { UserInfo };
