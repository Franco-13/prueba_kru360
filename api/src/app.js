import express from "express";
import morgan from "morgan";

import contactsRoutes from "./routes/contacts.routes.js";
import usersRoutes from "./routes/users.routes.js";
import commentsRoutes from "./routes/comments.routes.js";

import cors from "cors";
import admin from "firebase-admin";

import { config } from "dotenv";

config();

const {
  FIREBASE_CLIENT,
  FIREBASE_CLIENT_ID,
  FIREBASE_AUTH_PROVIDER,
  FIREBASE_TOKEN_URI,
  FIREBASE_AUTH_URI,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_TYPE,
} = process.env;

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert({
    type: FIREBASE_TYPE,
    project_id: FIREBASE_PROJECT_ID,
    private_key_id: FIREBASE_PRIVATE_KEY_ID,
    private_key: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: FIREBASE_CLIENT_EMAIL,
    client_id: FIREBASE_CLIENT_ID,
    auth_uri: FIREBASE_AUTH_URI,
    token_uri: FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER,
    client_x509_cert_url: FIREBASE_CLIENT,
  }),
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE",
    true
  );
  next();
});

server.use("/contact", contactsRoutes);
server.use("/user", usersRoutes);
server.use("/comment", commentsRoutes);

export default server;
