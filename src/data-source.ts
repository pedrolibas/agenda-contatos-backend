import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource(
    {
        type: "postgres",
        host: process.env.HOST
    }
)