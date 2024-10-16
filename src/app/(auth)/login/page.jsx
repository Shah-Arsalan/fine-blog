import LoginForm from '@/components/loginForm/loginForm';
import styles from "./login.module.css"
import { login } from '@/lib/action';
import { auth, signIn, signOut } from '@/lib/auth';

 async function LoginPage() {
  const session = await auth();
  console.log("the session is", session);

  // const session = await auth();
  // console.log("the user session is", session);

// const handleGithubLogin = async () => {
//   "use server";

//   await signIn("github");
// }

  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage;