import {GraphQLObjectType, GraphQLString} from 'graphql'
import {GraphQLDateTime} from 'graphql-iso-date'

import {UserType} from './'

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    creator: {
      type: UserType
    },
    created_at: {
      type: GraphQLDateTime
    }
  })
})