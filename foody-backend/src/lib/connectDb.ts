import mongoose  from "mongoose";
const URI = process.env.MONGODB_URI;



export const connectDb = async () => {
    try {
        if(!URI) {
            console.log("URI bhgui bn ");
            return;
        }
        await mongoose.connect(URI);
        console.log("DB amjilttain holbogdloo");

    } catch (error){
        console.log("DB holbogdloo aldaa");
    }
};