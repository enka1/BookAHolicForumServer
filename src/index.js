import http from 'http'
import express from 'express'
import socketIO from 'socket.io'
import cors from 'cors'
import body_parser from 'body-parser'
import express_graphql from 'express-graphql'
import session from 'express-session'
import 'babel-polyfill'

import {connectMongoDB} from './models'
import schema from './schemas'

connectMongoDB()

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(cors())
app.use(body_parser.json())
app.use(session({
  saveUninitialized: true,
  secret: 'asd',
  resave: true,
  cookie: {
    maxAge: 1000 * 60 * 48
  }
}))
app.use('/graphql', express_graphql({graphiql: true, pretty: true, schema}))

app.get('/user/:id', (req, res) => {
  req.session.user = req.params.id
  res.send('Nice')
})

app.get('/user', (req, res) => {
  res.send(req.session.user)
})

server.listen(3001)