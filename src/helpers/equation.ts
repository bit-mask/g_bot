import { Equation } from '../models'
const sha256 = require('sha256')

const secret = process.env.G_TG_VERIFY_SECRET;

export function generateEquation() {
  const code = `q=${getRandomInt()}`
  const question = `Go to go/tg-verify?${code} and enter the value here.`
  const timestamp = Math.floor((new Date()).getTime() / 1000 / 30)

  const answers = []
  // Allow 2-minute tolerance to obtain code
  for (let t = 0; t < 5; t++) {
    const calculated = sha256(secret + (timestamp + t) + code + secret).substring(0, 4)
    answers.push(calculated)
  }
  return {
    question,
    answers,
  } as Equation
}

function getRandomInt() {
  return Math.floor(Math.random() * 10000)
}
