import {
  GraphQLObjectType
} from 'graphql'

import User from './User.query'

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    User
  }
})