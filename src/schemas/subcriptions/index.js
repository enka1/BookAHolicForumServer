import {GraphQLObjectType} from 'graphql'
import {CommentType} from '../types'
import {pubSub, COMMENT_ADDED} from '../'
export default new GraphQLObjectType({
  name: "RootSubcription",
  fields: {
    commentSubcription: {
      type: CommentType,
      resolve: (_, args) => {
        return _.commentSubcription
      },
      subscribe: () => pubSub.asyncIterator([COMMENT_ADDED])
    }
  }
})