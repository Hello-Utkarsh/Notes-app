export {}
const connect = require('./db')
const express = require('express')

connect()

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
