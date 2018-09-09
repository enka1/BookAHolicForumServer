import 'babel-polyfill'

import {PostType} from '../types'
import {PostInputType} from '../inputs'
import {PostModel, UserModel} from '../../models'

export default {
  type : PostType,
  args : {
    post: {
      type: PostInputType
    }
  },
  resolve : async(_, args) => {
    let {title, content, author_id} = args.post
    let user = await UserModel.findById(author_id)
    let post = new PostModel({title, content})
    post.creator = user
    user
      .posts
      .push(post)
    user.save()
    post.save()
    return post
  }
}