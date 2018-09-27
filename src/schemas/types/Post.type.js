import {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt} from 'graphql'
import {GraphQLDateTime} from 'graphql-iso-date'

import {UserModel, CommentModel} from '../../models'
import {UserType} from './'
import {CommentType} from '../types'

export default new GraphQLObjectType({
  name: 'PostType',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: data => {
        return data
          ._id
          .toString()
      }
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
    },
    numOfComments: {
      type: GraphQLInt,
      resolve: async data => {
        return await CommentModel.countDocuments({post: data._id})
      }
    }
  })
})