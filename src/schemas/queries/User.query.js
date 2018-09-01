import {GraphQLList} from 'graphql'

import {User} from '../../models'
import {UserType} from '../types'
import {UserInput} from '../inputs/User.input'

export default {
  type : new GraphQLList(UserType),
  args : {
    user: {
      type: UserInput
    }
  },
  resolve : (_, args) => {
    return User
      .where(args.user)
      .sort()
  }
}