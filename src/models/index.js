import mongoose from 'mongoose'

import UserModel from './User.model'
import PostModel from './Post.model'
import CommentModel from './Comment.model'

export const connectMongoDB = () => {
  mongoose.connect(process.env.MLAB_URL
    ? process.env.MLAB_URL
    : 'mongodb://localhost:27017/Forum', {useNewUrlParser: true})
}
export {UserModel, PostModel, CommentModel}