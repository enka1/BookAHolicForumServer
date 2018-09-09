import {GraphQLObjectType} from 'graphql'

import createUser from './User.mutation'
import createPost from './create_post.mutation'

export default new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createUser,
    createPost
  }
})