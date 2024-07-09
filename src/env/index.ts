import {z} from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(8080),
  REGION: z.string().default('us-west-1'),
  ACCESS_KEY_ID: z.string(),
  SECRET_KEY: z.string()
})

export const _env = envSchema.safeParse(process.env)


if(_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error)

  throw new Error('Invalid environment variables')
}

export const env = _env.data