import {GraphQLList} from 'graphql'
import 'babel-polyfill'
import check from 'check-types'

import {UserModel} from '../../models'
import {UserType} from '../types'
import {UserInputType} from '../inputs'

export default {
  type : new GraphQLList(UserType),
  args : {
    user: {
      type: UserInputType
    }
  },
  resolve : async(_, args) => {
    if (!check.null(args.user.username)) 
      args.user.username = new RegExp(args.user.username)
    if (!check.null(args.user.display_name)) 
      args.user.display_name = new RegExp(args.user.display_name)
    return await UserModel.find(args.user)
  }
}