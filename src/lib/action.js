"use server"
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { getUser } from "./data";



// Authentication 

export const register = async (previousState, formData) => {
    "use server"
    console.log("the register function was clicked")
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        console.log("Passwords do not match");
        return { error: "Passwords do not match!" }

    }

    try {

        connectToDb();

        const user = await User.findOne({ username });
        console.log("the user is", user);

        if (user) {
            console.log("user already exists")
            return { error: "Username already exists" }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img
        })

        await newUser.save();
        console.log("saved to db");
        return { success: true };
    } catch (error) {
        return { error: "Something went wrong" }

    }
}


export const login = async (previousState, formData) => {

    const { username, password } = Object.fromEntries(formData);

    try {

        await signIn("credentials", { username, password });

    } catch (err) {

        console.log("the error in file is is 😂", err)
        if (err?.type?.includes("CredentialsSignin")) {
            console.log("in if block 💕");
            return { error: "Invalid username or Password" };
        }

        console.log("not in if 🤣")

        throw err;

    }



}



export const handleLogout = async () => {

    await signOut();
}

// CRUD Posts ans User


export const addPost =  async (prevState , formData) => {
    const{title , desc , slug , userId ,img} = Object.fromEntries(formData);
    const imgFile = formData.get('bufferImage');
    console.log("the imgFile is", imgFile);

    try {

        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            bufferImage: {
                data: imgFile ? Buffer.from(await imgFile.arrayBuffer()) : null, // Convert ArrayBuffer to Buffer
                contentType: imgFile ? imgFile.type : null
              },
              img
        })

        await newPost.save();
        console.log("post saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
        
    } catch (error) {

        console.log(error);
        return {error : "Something went wrong!"}
        
    }
}


export const deletePost = async ( formData) => {
    const {id} = Object.fromEntries(formData);
    
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");

        
    } catch (error) {
        console.log(error);
        return {error : "Something went wrong"};
        
    }

}

export const addUser = async (prevState , formData) =>{
    const {username , email , password , img , bufferImage , isAdmin} = Object.fromEntries(formData);
    const imgFile = formData.get('bufferImage');
    console.log("the imgFile is", imgFile);

    try {
        connectToDb();
        const newUser = new User({
            username,
            email,
            password,
            img,
            bufferImage: {
                data: imgFile ? Buffer.from(await imgFile.arrayBuffer()) : null, // Convert ArrayBuffer to Buffer
                contentType: imgFile ? imgFile.type : null
              },
              isAdmin

        })

        await newUser.save();
        console.log("new user added");
        revalidatePath("/admin");
        
    } catch (error) {
        console.log(error);
        return {error : "Something went wrong!"}
        
    }
}

export const editUser = async (prevState, formData) => {
    const { username, img, isAdmin , id } = Object.fromEntries(formData);
    const imgFile = formData.get('bufferImage');
    console.log("details in editUser 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫", username, img, isAdmin , id  )
    console.log("the imgFile is", imgFile);

    try {
        connectToDb();
        
        const user = await User.findById(id);

        if (!user) {
            return {error : "No user exits!"}
        }

        user.username = username || user.username;
        user.img = img || user.img;
        if (imgFile) {
            user.bufferImage = {
                data: Buffer.from(await imgFile.arrayBuffer()), 
                contentType: imgFile.type
            };
        }

        user.isAdmin = isAdmin || user.isAdmin

        await user.save();
        console.log("User updated ✅");
        revalidatePath("/profile");
        revalidatePath("/admin");
        return {message : "User Updated. Click 🔙 to return to profile page"}
       

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
}



export const deleteUser = async (formData) =>{
    const {id} = Object.fromEntries(formData);
    try {

        connectToDb();
        await Post.deleteMany({userId:id});
        await User.findByIdAndDelete(id);
        revalidatePath("/admin");
        
    } catch (error) {
        console.log(error);
        return {error : "Something went wrong"};
        
    }
}


export const getSession = async () => {
    const session = await auth();
    return session;
}


export const userGetter = async (id) =>{
    const singleUser = await getUser(id);
    return singleUser;
}