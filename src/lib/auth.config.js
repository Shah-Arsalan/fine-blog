export const authConfig = {
    pages:{
        signIn: "/login"
    }, 
    providers : [],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id = user.id,
                token.isAdmin = user.isAdmin,
                token.img = user.img,
                // token.bufferImage = user.bufferImage,
                token.username = user.username,
                token.createdAt = user.createdAt
            }

            return token;

        },
        async session ({session , token}){
            if(token){
            session.user.id = token.id;
            session.user.isAdmin = token.isAdmin;
            session.user.img = token.img;
            // session.user.bufferImage = token.bufferImage,
            session.user.username = token.username,
            session.user.createdAt = token.createdAt

            }
            return session;
        },
        authorized({auth , request}){
            console.log('the user/auth is ', auth);
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnProfilePage = request.nextUrl?.pathname.startsWith("/profile")


            if(isOnAdminPanel && !user?.isAdmin){
                return false;
            }



            if(isOnBlogPage && !user){
                return false;
            }

            if(isOnProfilePage && !user){
                return false;
            }


            if(isOnLoginPage && user){
                return Response.redirect(new URL("/",request.nextUrl));
            }




            return true;






        }
    }
}