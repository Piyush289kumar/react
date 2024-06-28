import mongoose, { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    task: {
      type: String,
      trim: true,
      index: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Todo = model("Todo", todoSchema);
