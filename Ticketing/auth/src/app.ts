// import path from "path";
import express from 'express';
import Api1 from "./routes/global.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", Api1);

// app.use("/static", express.static(path.join(__dirname, "public")));

export default app;
