const express = require("express");
const router = express.Router();
const {updateUserProfile ,loginUser ,registerUser} = require("../controller/userController");

//user login
router.post("/login",loginUser);

//user register
router.post("/register",registerUser);

//update profile
router.put("/profile",updateUserProfile);
