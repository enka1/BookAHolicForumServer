'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passportGoogleOauth = require('passport-google-oauth');

var _config = require('../../../config');

var _models = require('../../../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientID = _config.googleOauthConfig.clientID,
    clientSecret = _config.googleOauthConfig.clientSecret,
    callbackURL = _config.googleOauthConfig.callbackURL;
exports.default = new _passportGoogleOauth.OAuth2Strategy({
  clientID: clientID,
  clientSecret: clientSecret,
  callbackURL: callbackURL,
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}, function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(accessToken, refreshToken, profile, done) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.UserModel.findOne({ username: profile.id });

          case 2:
            user = _context.sent;

            if (!user) {
              _context.next = 6;
              break;
            }

            user.generate_token();
            return _context.abrupt('return', done(null, user));

          case 6:
            user = new _models.UserModel({ username: profile.id, display_name: profile.displayName, avatar: profile.photos[0].value });
            user.generate_token();
            return _context.abrupt('return', done(null, user));

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());