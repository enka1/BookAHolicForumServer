import {GraphQLString, GraphQLObjectType, GraphQLList} from 'graphql'

import {PostType, CommentType} from './'
import {PostModel} from '../../models'

export default new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: data => data._id.toString()
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    display_name: {
      type: GraphQLString
    },
    avatar: {
      type: GraphQLString
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (user) => {
        return PostModel.where({creator: user._id})
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: (user) => {
        return null
      }
    }
  })
})