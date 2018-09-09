import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql'
import {GraphQLDateTime} from 'graphql-iso-date'

import {UserModel} from '../../models'
import {UserType} from './'
import {CommentType} from '../types'

export default new GraphQLObjectType({
  name: 'PostType',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    creator: {
      type: UserType,
      resolve: async data => {
        return await UserModel.findById(data.creator)
      }
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