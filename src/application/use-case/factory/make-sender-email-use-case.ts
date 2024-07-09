import { EmailSenderService } from "../../../service/email-sender-service"
import { EmailSenderUseCase } from "../email-sender"

export function MakeSenderEmailUseCase() {
  const emailSenderService = new EmailSenderService()
  const emailSenderUseCase = new EmailSenderUseCase(emailSenderService)

  return emailSenderUseCase
}