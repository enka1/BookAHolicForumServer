import {OAuth2Strategy} from 'passport-google-oauth'

import {googleOauthConfig} from '../../../config'
import {UserModel} from '../../../models'

let {clientID, clientSecret, callbackURL} = googleOauthConfig

export default new OAuth2Strategy({
  clientID,
  clientSecret,
  callbackURL,
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}, async(accessToken, refreshToken, profile, done) => {
  let user = await UserModel.findOne({username: profile.id})
  if (user) {
    user.generate_token()
    return done(null, user)
  }
  user = new UserModel({username: profile.id, display_name: profile.displayName, avatar: profile.photos[0].value})
  user.generate_token()
  return done(null, user)
})