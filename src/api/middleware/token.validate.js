export default function (req, res, next) {
  let token = req.header('auth')
  if (!token) {
    return res.send({
      authenticate: false,
      error: {
        msg: 'Token does not provide'
      },
      user: null
    })
  }
  req.token = token
  next()
}