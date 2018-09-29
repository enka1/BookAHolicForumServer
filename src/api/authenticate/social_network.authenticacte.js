import passport from 'passport'
import 'babel-polyfill'

import {app} from '../../'
import {GoogleStrategy} from './strategies'

app.use(passport.initialize())
passport.use(GoogleStrategy)
app.get('/auth/google', passport.authenticate('google', {session: false}))
app.get('/auth/google/callback', passport.authenticate('google', {session: false}), (req, res) => {
  req.session.user = req.user
  res.send(req.user)
})
