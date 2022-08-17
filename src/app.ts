import express, { Application, Request, Response, NextFunction } from 'express'
import { fold } from "fp-ts/lib/Either"

const app: Application = express()


// app.use(bodyParser.json()) //enables json body deserializer
app.post("/signin", handleSignIn)


const signIn = (email: string, password: string) => {
  return email && password ? 'logged in ' : 'new Error()'
}

function replyUnauthorized(res: Response): (error: Error) => void {
  return error => res.status(401).end()
}

function replyToken(res: Response): (token: string) => void {
  return token => res.json({ token })
}

// It can be read as 
// "If signIn returns an error, reply with unauthorized response, otherwise, reply with a token". 

function handleSignIn(req: Request, res: Response) {
  const { email, password } = req.body
  fold(replyUnauthorized(res), replyToken(res))(signIn('email', 'password'))
}




app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello')
})

app.listen(5000, () => console.log('Server is runnieng'))

