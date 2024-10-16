"use client"

import { login } from "@/lib/action";
import styles from "./loginForm.module.css"
import {useFormState} from "react-dom"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {

const [state , formAction] = useFormState(login , undefined);
const router = useRouter();

useEffect(() => {

    state?.success && router.push("/")

}, [state?.success , router])

    return (
        <div>
            <div className={styles.wrapper}>
            <form className={styles.form} action={formAction}>
                <input type='text' placeholder='username' name='username' />
                <input type='password' placeholder='password' name='password' />
                <button>Login</button>
                {state?.error}
                <Link href="/register"> Do not have an account? <b>Register</b></Link>

            </form>

            </div>

        </div>)
}

export default LoginForm;