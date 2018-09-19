import 'babel-polyfill'

import {CommentType} from '../types'
import {CommentInputType} from '../inputs'
import {PostModel, UserModel, CommentModel} from '../../models'

export default {
  type : PostType,
  args : {
    comment: {
      type: CommentInputType
    }
  },
  resolve : async(_, args, context) => {
    let {post_id, user_id, content} = args.comment
    let user = await UserModel.findById(user_id)
    let post = await PostModel.findById(post_id)
    let comment = new CommentModel({content, createdAt: new Date()})
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
}