import { App, ExpressReceiver } from '@slack/bolt'
import * as dotenv from 'dotenv'

dotenv.config()
export const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET as string
})

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  receiver: expressReceiver,
  processBeforeResponse: true
})

export default app
