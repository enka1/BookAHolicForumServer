import _ from 'lodash'
import 'babel-polyfill'

import {app} from '../../'

app.get('/user', async(req, res) => {
  if (req.session.user) {
    let user = _.pick(req.session.user, ['username', 'display_name', 'avatar', '_id'])
    res.send({user})
  } else 
    res.send({user: null})
})