import mongoose from "mongoose";
import { CONTACT_TYPES, CONTACT_ORIGIN } from "../helpers/constants.js";

const contactSchema = new mongoose.Schema(
  {
    contact_name: {
      type: String,
      required: true,
    },
    contact_lastName: {
      type: String,
      required: true,
    },
    contact_email: {
      type: String,
      required: true,
    },
    contact_phone: {
      type: String,
      required: true,
    },
    contact_brithday: {
      type: Date,
    },
    contact_address: {
      type: String,
      required: true,
    },
    contact_type: {
      type: String,
      enum: CONTACT_TYPES,
    },
    contact_origin: {
      type: String,
      enum: CONTACT_ORIGIN,
    },
    contact_created_by: {
      type: String,
    },
    contact_updated_by: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
