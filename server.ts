import express from "express";
import ViteExpress from "vite-express";

const app = express();
ViteExpress.config({ mode: "production" })

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 80, () => console.log("Server is listening..."));