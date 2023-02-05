import express, { response } from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../db/models/fetched.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get all posts
router.route("/").get(async (req, res) => {
    try {
        const posts=await Post.find({})
        res.status(200).json({
            success:true,
            data:posts,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error,
        })
    }
});
// create a post
router.route("/").post(async (req, res) => {
  try {
    const { name, email,phone_no,prompt } = req.body;
    //const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      email,
      phone_no,
      prompt,
      
    });
    res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
});

export default router;
