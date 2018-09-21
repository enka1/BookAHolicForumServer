import {GraphQLObjectType, GraphQLString} from 'graphql'
import {GraphQLDateTime} from 'graphql-iso-date'
import 'babel-polyfill'

import {UserModel} from '../../models'
import {UserType, PostType} from './'

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: data => data
        ._id
        .toString()
    },
    content: {
      type: GraphQLString
    },
    creator: {
      type: UserType,
      resolve: async data => await UserModel.findById(data.creator)
    },
    created_at: {
      type: GraphQLDateTime
    },
    post:{
      type: PostType
    }
  })
})