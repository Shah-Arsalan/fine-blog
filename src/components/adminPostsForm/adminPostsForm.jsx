"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostsForm.module.css";
import { useFormState } from "react-dom";
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import { useState } from "react";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const [filedValues, setFieldValues] = useState({ url: "", uploader: null })

  const generatedSlug = uuidv4();

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="hidden" name="slug" placeholder="slug" value={generatedSlug} readOnly />
      <input type="text" name="img" placeholder="add image url" disabled={filedValues.uploader !== null ? true : false} onChange={(e) => setFieldValues({ ...filedValues, url: e.target.value })} />
      <h4 style={{textAlign:"center"}}>Or</h4>
      <input type="file"  name="bufferImage" accept="image" disabled={filedValues.url !== "" ? true : false} onChange={(e) => setFieldValues({ ...filedValues, uploader: e.target.value })} />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;