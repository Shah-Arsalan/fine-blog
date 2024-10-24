"use client"

import { login } from "@/lib/action";
import styles from "./loginForm.module.css"
import {useFormState} from "react-dom"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {

const [state , formAction] = useFormState(login , undefined);
const [credentials , setCredentials] = useState({username: "" , password:""});
const router = useRouter();

useEffect(() => {

    state?.success && router.push("/")

}, [state?.success , router])

    return (
        <div>
            <div className={styles.wrapper}>
            <form className={styles.form} action={formAction}>
                <input type='text' placeholder='username' name='username' value={credentials.username} onChange={(e)=>setCredentials({...credentials, username: e.target.value})}/>
                <input type='password' placeholder='password' name='password' value={credentials.password} onChange={(e)=>setCredentials({...credentials, password : e.target.value})}/>
                <button>Login</button>
                {state?.error}
                <Link href="/register"> Do not have an account? <b>Register</b></Link>

            </form>

            <button className={styles.filler} onClick={()=> setCredentials({username : "admin user", password:"12345"})}>Fill Form with admin login credentials</button>

            </div>

        </div>)
}

export default LoginForm;