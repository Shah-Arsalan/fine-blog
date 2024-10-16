"use server"
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const sayHello = async () => {


    console.log("hello");
}

export const register = async ( previousState, formData) => {
      "use server"
    console.log("the register function was clicked")
    const {username , email , password,img, passwordRepeat} = Object.fromEntries(formData);
    if(password !== passwordRepeat) {
        console.log("Passwords do not match");
        return {error : "Passwords do not match!"}
        
    }
    
    try {

        connectToDb();

        const user = await User.findOne({username});
        console.log("the user is", user);

        if(user){
            console.log("user already exists")
            return {error : "Username already exists"}
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        const newUser = new User({
            username,
            email,
            password : hashedPassword,
            img
        })
        
        await newUser.save();
        console.log("saved to db");
        return {success : true};
    } catch (error) {
        return {error : "Something went wrong"}
        
    }
}


export const login =  async (previousState,formData) => {
    
    const {username , password} = Object.fromEntries(formData);

    try {

        await signIn("credentials",{username , password});
        
    } catch (err) {

        console.log("the error in file is is 😂", err)
        if(err?.type?.includes("CredentialsSignin")){
            console.log("in if block 💕");
            return {error : "Invalid username or Password"};
        }

         console.log("not in if 🤣")

        throw err;
        
    }



}



export const handleLogout = async () => {
    
    await signOut();
}