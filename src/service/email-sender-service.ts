import SES from 'aws-sdk/clients/ses'
import {EmailSenderGateway } from '../interface/email-sender-gateway.interface'
import { env } from '../env'

export class EmailSenderService implements EmailSenderGateway {
  private client: SES
 
  constructor() {
   this.client = new SES({
    apiVersion: '2019-09-27',
    region: env.REGION,
    accessKeyId: env.ACCESS_KEY_ID,
    secretAccessKey: env.SECRET_KEY
  })
  }

 async sendEmail(to: string, subject: string, body: string): Promise<void> {

 const params = {
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: body
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: 'David José <davidgomesbr1@gmail.com>'
  }
  try {
    await this.client.sendEmail(params).promise().then(() => console.log('Email successfully sent!'))
  }catch (err) {
    if(err instanceof Error) {
      console.error("Email sending failed!" , err.message);
      throw new Error(`Failed to send email ${err.message}`)
    }
  }
  }
}