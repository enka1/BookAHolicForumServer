'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('../../models');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_.app.get('/logout', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.session.user) {
              _context.next = 9;
              break;
            }

            _context.next = 3;
            return _models.UserModel.findById(req.session.user._id);

          case 3:
            user = _context.sent;

            user.remove_token();
            req.session.user = null;
            res.send({ authenticate: false });
            _context.next = 10;
            break;

          case 9:
            res.send({ authenticate: false, msg: 'Did not log in yet' });

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

_.app.get('/user', function (req, res) {
  res.send(req.session);
});