import fastify from "fastify";
import { sendEmailRouter } from "./controllers/routes";

export const app = fastify()
app.register(sendEmailRouter)
