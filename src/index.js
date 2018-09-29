import express from 'express'
import cors from 'cors'
import body_parser from 'body-parser'
import session from 'express-session'
import 'babel-polyfill'
import {ApolloServer} from 'apollo-server-express'
import {SubscriptionServer} from 'subscriptions-transport-ws'
import http from 'http'
import {execute, subscribe} from 'graphql'

import {connectMongoDB} from './models'
import schema from './schemas'

connectMongoDB()
export const app = express()

app.use(cors())
app.use(body_parser.json())
app.use(session({
  saveUninitialized: true,
  secret: 'asd',
  resave: false,
  cookie: {
    expires: 1000 * 60 * 48,
    maxAge: 1000 * 60 * 48
  }
}))

require('./api')
const server = new ApolloServer({
  schema,
  context: ({req}) => {
    return {user: req.session.user}
  }
})
server.applyMiddleware({app})
const ws = http.createServer(app)

ws.listen(process.env.PORT || 3001, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/graphql'
  });
});