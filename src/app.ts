import "express-async-errors";
import "reflect-metadata";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middlewares";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use(handleErrorMiddleware);

export default app;
