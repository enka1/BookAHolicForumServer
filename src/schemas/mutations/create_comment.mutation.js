import 'babel-polyfill'

import {CommentType} from '../types'
import {CommentInputType} from '../inputs'
import {PostModel, UserModel, CommentModel} from '../../models'
import {pubSub, COMMENT_ADDED} from '../'

export default {
  type : CommentType,
  args : {
    comment: {
      type: CommentInputType
    }
  },
  resolve : async(_, {
    comment
  }, context) => {
    try {
      let {post_id, user_id, content} = comment
      if (context.user && context.user._id === user_id) {
        let user = await UserModel.findById(user_id)
        let post = await PostModel.findById(post_id)
        let newComment = new CommentModel({content, created_at: new Date()})
        newComment.creator = user
        newComment.post = post
        user
          .comments
          .push(newComment)
        post
          .comments
          .push(newComment)
        user.save()
        post.save()
        newComment.save()
        pubSub.publish(COMMENT_ADDED, {commentSubcription: newComment})
        return comment
      }
      throw Error('Authentication error')
    } catch (error) {
      throw Error(error.message)
    }

  }
}