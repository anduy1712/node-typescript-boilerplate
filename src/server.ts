import express, { Request, Response } from 'express'

const app = express()

const HOST = 'localhost'
const PORT = 3000

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World 3')
})

app.listen(PORT, HOST, () => {
  console.log('hello 2')
})
