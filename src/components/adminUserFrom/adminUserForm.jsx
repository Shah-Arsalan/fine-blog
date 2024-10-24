"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const [filedValues, setFieldValues] = useState({ url: "", uploader: null })

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="add image url" disabled={filedValues.uploader !== null ? true : false} onChange={(e) => setFieldValues({ ...filedValues, url: e.target.value })} />
      {/* <h4 style={{textAlign:"center"}}>Or</h4> */}
      {/* <input type="file"  name="bufferImage" accept="image" disabled={filedValues.url !== "" ? true : false} onChange={(e) => setFieldValues({ ...filedValues, uploader: e.target.value })} /> */}
      <select name="isAdmin">
        <option value={false}>Is Admin?</option>
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;