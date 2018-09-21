import 'babel-polyfill'

import {CommentType} from '../types'
import {CommentInputType} from '../inputs'
import {PostModel, UserModel, CommentModel} from '../../models'

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
      if (context.session.user && context.session.user._id === user_id) {
        let user = await UserModel.findById(user_id)
        let post = await PostModel.findById(post_id)
        let comment = new CommentModel({content, created_at: new Date()})
        comment.creator = user
        comment.post = post
        user
          .comments
          .push(comment)
        post
          .comments
          .push(comment)
        user.save()
        post.save()
        comment.save()
        return comment
      }
      throw Error("Authentication Error !")
    } catch (error) {
      throw Error("Something is wrong !")
    }
  }
}