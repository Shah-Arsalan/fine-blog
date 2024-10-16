"use client";

import styles from "./registerForm.module.css";
import {useFormState} from "react-dom"
import React, { useEffect } from 'react'
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";


function RegisterForm() {
    const [state , formAction] = useFormState(register , undefined);

    const router = useRouter();

    useEffect(() => {

    state?.success && router.push("/login");

    },[state?.success , router]);
    return (
        <div>
            <form className={styles.form} action={formAction}>
                <input type='text' placeholder='username' name='username' />
                <input type='email' placeholder='email' name='email' />
                <input type='password' placeholder='password' name='password' />
                <input type='password' placeholder='password again' name='passwordRepeat' />
                <button>Register</button>
                {state?.error}
                <Link href="/login">Have an Account? <b>Login</b></Link>
            </form>
        </div>
    )
}

export default RegisterForm