import mongoose from "mongoose";

const connectDB =async ()=>{

    mongoose.connection.on('connected', ()=>console.log("Database Connected"));

    await mongoose.connect(`${process.env.MONGODB_URI}`);  // /mern-auth
};
export default connectDB;

// import mongoose from "mongoose";
// const connectDB = () => {
//     console.log(`connection url: ${process.env.MONGODB_URI}/mern-auth`)
//     try {
//         mongoose
//         .connect(process.env.MONGODB_URI)
//         console.log("Database Connected SUCCESS")
//     } catch (error) {
//         console.log("Database Connected FAIL")
//         process.exit(1)
//     }
// }
// export default connectDB;
