import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { Post } from "../models/post";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  let posts: Post[] = result.data;
  return res.status(200).json({
    posts: posts,
  });
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;
  let title: string = req.body.title ?? "";
  let body: string = req.body.body ?? "";
  let result = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      ...(title && { title }),
      ...(body && { body }),
    }
  );

  return res.status(200).json({
    message: "Post updated successfully",
    post: result.data,
  });
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;
  let result = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return res.status(200).json({
    message: "Post deleted successfully",
    post: result.data,
  });
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  let title: string = req.body.title ?? "";
  let body: string = req.body.body ?? "";
  let result = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    ...(title && { title }),
    ...(body && { body }),
  });

  return res.status(200).json({
    message: "Post created successfully",
    post: result.data,
  });
};

export default {
  getPosts,
  updatePost,
  deletePost,
  createPost,
};
