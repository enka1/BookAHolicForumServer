import {GraphQLObjectType} from 'graphql'

import User from './User.mutation'
export default new GraphQLObjectType({name: 'RootMutation', fields: {
    User
  }})