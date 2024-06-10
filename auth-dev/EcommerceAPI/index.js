import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/User.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("db connection successful!"))
.catch((err) => {
    console.log(err);
});

const app = express();
app.listen(process.env.PORT || 5000, () => {
    console.log("backend is running!");
})

app.get("/api/test", () => {
    console.log("test is successful!");
});

app.use("/api/user", UserRoute);

