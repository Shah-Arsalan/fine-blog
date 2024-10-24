import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  console.log("reaching here 🙌");
    try{
       
        if(connection.isConnected){
          console.log("reaching here 👌😒")
            console.log("Using existing connection");
            return;
        }

        console.log("reaching here 👌😒")


        const db = await mongoose.connect(process.env.MONGO);
        console.log("coming here ✅");
        connection.isConnected = db.connections[0].readyState;

        await mongoose.connect(process.env.MONGO);
    }catch(error){
        console.log("the error in db is ",error);
        throw new Error("Error connecting Database");
    }
}


export const convertBase64ToUrl = (bufferImage) => {

    let base64Image = null;
    if (bufferImage && bufferImage.data) {
      if (Buffer.isBuffer(bufferImage.data)) {
        base64Image = `data:${bufferImage.contentType};base64,${bufferImage.data.toString('base64')}`;
      } else if (bufferImage.data && bufferImage.data.data) {
        const buffer = Buffer.from(bufferImage.data.data); // Convert to Buffer
        base64Image = `data:${bufferImage.contentType};base64,${buffer.toString('base64')}`;
      } else {
        console.error("Unexpected bufferImage.data type:", typeof bufferImage.data);
      }
    }

    return base64Image;
  

}