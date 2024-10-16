import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { User } from "./models"
import { connectToDb } from "./utils"
import { authConfig } from "./auth.config"

const login = async (credentials) =>{
  try {
console.log("the creds are", credentials);
    connectToDb();
    const user = await User.findOne({username: credentials.username});
    console.log("the user in login is", user);

    if(!user){
      throw new Error("Wrong credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password , user.password);

    if(!isPasswordCorrect){
      throw new Error("wrong password");
    }

    return user;


    
  } catch (error) {

    console.log("error is", error);
    throw new Error("Failed to  login!");
    
  }
}


export const { handlers:{POST , GET}, auth , signIn , signOut } = NextAuth({
  ...authConfig,
  providers: [GitHub({
    clientId: "Ov23lim6eYV6PRdVf5dU" , 
    clientSecret:"1ab0654cd6a77cf030d9570c049ec9021bf15433"}
  ),

  CredentialsProvider({
    async authorize(credentials){

      try {
        console.log("coming in provider");
        const user = await login(credentials);
        return user;
        
      } catch (error) {
        console.log(error);
        
      }

    }
  })

],



})