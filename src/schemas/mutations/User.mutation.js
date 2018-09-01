import {UserModel} from '../../models'
import {UserInput} from '../inputs'
import {User} from '../types'

export default {
  type : User,
  args : {
    user: {
      type: UserInput
    }
  },
  resolve : (_, args) => {
    let user = new UserModel(args.user)
    user.save()
    return user
  }
}