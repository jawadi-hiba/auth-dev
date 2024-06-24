import express from "express";
// import User from "../models/User";
const router =  express.Router();

router.get("/", (req, res) => { 
    res.json({ name: "nooo" });
  })


  const registerUser = async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
export default router;