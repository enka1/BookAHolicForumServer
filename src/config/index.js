export const jwtSecret = 'test123'

export const googleOauthConfig = {
  clientID: '789642630681-4dclhqlfli0jfjqbu0atg07oi517g4dq.apps.googleusercontent.com',
  clientSecret: '4qlHj0zm5DdM_JKaVZf_wAC0',
  callbackURL: process.env.GOOGLE_CALLBACK
    ? process.env.GOOGLE_CALLBACK
    : 'http://localhost:3001/auth/google/callback'
}