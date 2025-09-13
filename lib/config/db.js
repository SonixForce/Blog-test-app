import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://sonixforce:aAU3jnmY1ZB0lq2U@cluster0.ovbx0q7.mongodb.net/blog-app')
    console.log("DB Connected");
}