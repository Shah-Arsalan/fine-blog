"use client";

import { addUser, editUser } from "@/lib/action";
import styles from "./userEditForn.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";
import { useRouter } from "next/navigation";


const UserEditForm = ({ user, setAppear }) => {
  console.log('user in edit form', user);

  const [userDetails, setUserDetails] = useState(user)
  const [state, formAction] = useFormState(editUser, undefined);
  const [filedValues, setFieldValues] = useState({ url: "", uploader: null })




  return (
    <form action={formAction} className={styles.container}>
      <p style={{ cursor: "pointer", textAlign: "start" }} onClick={() => window.location.reload()}>🔙</p>
      <h1>Edit User</h1>
      <input type="text" name="username" placeholder="username" value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
      <input hidden value={userDetails._id} name="id" />
      <input value={userDetails.img} type="text" name="img" placeholder="add image url" onChange={(e) => setUserDetails({ ...userDetails, img: e.target.value })} />
      <h4 style={{ textAlign: "center" }}>Or</h4>
      <input type="file" name="bufferImage" accept="image" disabled={userDetails?.img?.length > 0 ? true : false} onChange={(e) => setFieldValues({ ...filedValues, uploader: e.target.value })} />
      {user.isAdmin && <select value={userDetails.isAdmin} onChange={(e) => setUserDetails({ ...userDetails, isAdmin: e.target.value })} name="isAdmin">
        <option value={false}>Is Admin?</option>
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>}
      <button type="submit">Edit User</button>
      {state?.error || state?.message}
    </form>
  );
};

export default UserEditForm;