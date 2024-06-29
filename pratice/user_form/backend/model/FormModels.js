import mongoose, { Schema, model } from "mongoose";

const FormSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
  },
  { timestamps: true }
);

const Form = new model("Form", FormSchema);
export default Form;
