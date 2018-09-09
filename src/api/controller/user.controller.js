import _ from 'lodash'
import 'babel-polyfill'

import {app} from '../../'

app.get('/user', async(req, res) => {
  if (req.session.user) 
    res.send(_.pick(req.session.user, ['username', 'display_name', 'avatar']))
  else 
    res.send({user: null})
})