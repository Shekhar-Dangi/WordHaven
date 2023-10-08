"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import InputText from "@/components/InputText/InputText";
import InputBox from "@/components/InputBox/InputBox";
import Button from "@/components/Button/Button";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  // signIn("google")
  return (
    <div className={styles.topContainer}>
      <div className={styles.container}>
        <div className={`${styles.webHead} f1half tNav`}>Welcome Back</div>
        <div className={styles.loginMet}>
          <span className={styles.authItemContainer}>
            <img
              src="/google.png"
              onClick={() => signIn("google")}
              className={`${styles.authItem}`}
            ></img>
          </span>
          <span className={styles.authItemContainer}>
            <img
              src="/github.png"
              className={`${styles.authItem}`}
              style={{ color: "#000" }}
            ></img>
          </span>
          <span className={styles.authItemContainer}>
            <img
              src="/apple-logo.png"
              className={`${styles.authItem} f2 fa-brands fa-apple`}
              style={{ color: "#000" }}
            ></img>
          </span>
        </div>
        <form className={styles.form} action="">
          <InputText label={"USERNAME"} name={"username"} />
          <InputText label={"PASSWORD"} name={"password"} />
          <div className={styles.down}>
            <div className="f07">
              <InputBox />
              Keep me signed in
            </div>
            <span className="f07 link">New User?</span>
          </div>
          <Button text={"Login"} color={"white"} backCol={"#4A8076"} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
