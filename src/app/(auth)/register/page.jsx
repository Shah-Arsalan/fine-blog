import { register } from "@/lib/action"
import styles from './register.module.css'
import RegisterForm from "@/components/registerForm/registerForm"


function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default RegisterPage