import "express-async-errors";
import "reflect-metadata";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middlewares";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/sessions.routes";
import contactRoutes from "./routes/contact.routes";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contact", contactRoutes);
app.use(handleErrorMiddleware);

export default app;
