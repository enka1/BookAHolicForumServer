import {UserModel} from '../../models'
import {app} from '../../'

app.get('/logout', async(req, res) => {
  if (req.session.user) {
    let user = await UserModel.findById(req.session.user._id)
    user.remove_token()
    req.session.user = null
    res.send({authenticate: false})
  } else 
    res.send({authenticate: false, msg: 'Did not log in yet'})
})

app.get('/user', (req, res) => {
  res.send(req.session)
})