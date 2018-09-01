import {GraphQLList} from 'graphql'
import 'babel-polyfill'

import {UserModel} from '../../models'
import {User} from '../types'
import {UserInput} from '../inputs'

export default {
  type : new GraphQLList(User),
  args : {
    user: {
      type: UserInput
    }
  },
  resolve : async(_, args) => {
    args.user.username = new RegExp(args.user.username)
    args.user.display_name = new RegExp(args.user.display_name)
    return await UserModel.find(args.user)
  }
}