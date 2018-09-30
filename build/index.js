'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = exports.app = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _apolloServerExpress = require('apollo-server-express');

var _subscriptionsTransportWs = require('subscriptions-transport-ws');

var _graphql = require('graphql');

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _models = require('./models');

var _schemas = require('./schemas');

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _models.connectMongoDB)();

var app = exports.app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var io = exports.io = (0, _socket2.default)(server);
var serverSession = (0, _expressSession2.default)({
  saveUninitialized: true,
  secret: 'asd',
  resave: true,
  cookie: {
    expires: 1000 * 60 * 48,
    maxAge: 1000 * 60 * 48
  }
});
var apolloServer = new _apolloServerExpress.ApolloServer({
  schema: _schemas2.default,
  context: function context(_ref) {
    var req = _ref.req;

    return { user: req.session.user };
  }
});

app.use((0, _cors2.default)());
app.use((0, _helmet2.default)());
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(serverSession);
app.set('io', io);
io.on('connect', function (socket) {
  app.set('socketID', socket.id);
});
require('./api');

apolloServer.applyMiddleware({ app: app });

server.listen(process.env.PORT || 3001, function () {
  new _subscriptionsTransportWs.SubscriptionServer({
    execute: _graphql.execute,
    subscribe: _graphql.subscribe,
    schema: _schemas2.default
  }, { server: server, path: '/graphql' });
});