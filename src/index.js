import spdy from "spdy";
import fs from "fs";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";
import socketIO from "socket.io";
import cors from "cors";
import helmet from "helmet";
import body_parser from "body-parser";
import compression from "compression";
import morgan from "morgan";

import { connectMongoDB } from "./models";
import schema from "./schemas";

connectMongoDB();

export const app = express();
const ssl = {
	key: fs.readFileSync(__dirname + "/../server.key"),
	cert: fs.readFileSync(__dirname + "/../server.crt")
};
const server = spdy.createServer(ssl, app);
export const io = socketIO(server);
const apolloServer = new ApolloServer({
	schema,
	
	context: ({
		req
	}) => {
		return {
			user: req.session.user
		};
	}
});

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(body_parser.json());
app.use(morgan("combined"));
app.set("io", io);
io.on("connect", socket => {
	app.set("socketID", socket.id);
});
require("./api");

apolloServer.applyMiddleware({ app });

server.listen(process.env.PORT || 3001, () => {
	new SubscriptionServer({ execute, subscribe, schema }, { server, path: "/graphql" });
});