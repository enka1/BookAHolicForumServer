import passport from 'passport'

import {app} from '../../'
import {GoogleStrategy} from './strategies'

app.use(passport.initialize())
passport.use(GoogleStrategy)
app.get('/auth/google', passport.authenticate('google', {session: false}))
app.get('/auth/google/callback', passport.authenticate('google', {session: false}), (req, res) => {
  req.session.user = req.user
  const io = req
    .app
    .get('io')
  //emit event login success with google
  io
    .to(req.app.get('socketID'))
    .emit('Google Login Success', {token: req.user.token})
  res.send('success')
})
