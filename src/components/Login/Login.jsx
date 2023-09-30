"use client";
import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="">
      <div className="">
        <div className="" onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className="">Sign in with Github</div>
        <div className="">Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
