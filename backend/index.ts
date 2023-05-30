// import { Request, Response } from 'express'
const connect = require('./db')
const express = require('express')

connect()

const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
