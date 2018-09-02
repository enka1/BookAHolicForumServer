import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql'
import {GraphQLDateTime} from 'graphql-iso-date'

import {UserType} from './'
import {CommentType} from '../types'

export default new GraphQLObjectType({
  name: 'PostType',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    creator: {
      type: UserType
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLDateTime
    },
    comments: {
      type: new GraphQLList(CommentType)
    }
  })
})