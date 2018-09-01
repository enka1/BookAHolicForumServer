import {GraphQLObjectType} from 'graphql'

import users from './User.query'

export default new GraphQLObjectType({name: 'RootQuery', fields: {
    users
  }})