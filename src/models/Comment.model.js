import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post'
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

export default mongoose.model('Comment', CommentSchema)
