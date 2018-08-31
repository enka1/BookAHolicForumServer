import http from 'http'
import express from 'express'
import socketIO from 'socket.io'
import cors from 'cors'
import body_parser from 'body-parser'

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(cors())
app.use(body_parser.json())

server.listen(3001)