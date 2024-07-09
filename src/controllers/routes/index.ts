import { sendEmailController } from '../email/send-email.controller'
import { app } from './../../app';


export  async function sendEmailRouter() {
  app.post('/email', sendEmailController);
}