import express, { Application, Request, Response } from 'express'
import cors from "cors";
import router from './app/routers';
const app:Application = express()
// http://localhost:3000
app.use(express.json());
app.use(cors({
  origin: ['https://e-ticket-client-robs360-shahadats-projects-55bc8ce7.vercel.app', 'http://localhost:3000','https://e-booking.vercel.app/'],
  credentials: true, 
}));

app.use("/api/v1", router);
 app.get("/", (req: Request, res: Response) => {
    res.send("e-tour server is running");
  });
export default app
