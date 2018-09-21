import {GraphQLList} from 'graphql'
import 'babel-polyfill'

import {CommentModel} from '../../models'
import {CommentType} from '../types'
import {CommentInputType} from '../inputs'

export default {
  type : new GraphQLList(CommentType),
  args : {
    comment: {
      type: CommentInputType
    }
  },
  resolve : (_, {comment}) => {
    if (comment) {
      comment.post = comment.post_id
      delete comment.post_id
    }
    return CommentModel.find(comment)
  }
}
