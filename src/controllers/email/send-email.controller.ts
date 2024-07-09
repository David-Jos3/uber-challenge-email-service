import { FastifyReply, FastifyRequest } from "fastify";
import {z} from 'zod'
import { MakeSenderEmailUseCase } from "../../application/use-case/factory/make-sender-email-use-case";

const emailSenderSchema = z.object({
  to: z.string().email(),
  subject: z.string().min(1).max(255),
  body: z.string().min(1).max(10000)
})


export async function sendEmailController(request: FastifyRequest, reply: FastifyReply) {
  const {to, subject, body} = emailSenderSchema.parse(request.body)

  try {
    const emailSenderUseCase = MakeSenderEmailUseCase()
    await emailSenderUseCase.execute({to, subject, body})
  
  } catch (err) {
    if(err instanceof z.ZodError) {
      return reply.status(400).send({ message: err.message })
    }
  }
  reply.status(200).send({message: 'Success'})
}