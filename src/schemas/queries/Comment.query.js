import {GraphQLList, GraphQLString} from 'graphql'

import {CommentType} from '../types'

export default {
  type : CommentType,
  args : {},
  resolve : (_, args) => {
    return null
  }
}