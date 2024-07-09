import { EmailSenderGateway } from "../../interface/email-sender-gateway.interface";

interface EmailSenderUseCaseRequest {
  to: string;
  subject: string;
  body: string;
}

interface EmailSenderUseCaseResponse {}


export class EmailSenderUseCase {
  constructor(private emailSenderGateway: EmailSenderGateway) {}

  async execute({to, subject, body}: EmailSenderUseCaseRequest):Promise<EmailSenderUseCaseResponse> {
    await this.emailSenderGateway.sendEmail(to, subject, body);
    
    return {}
    
  }
}