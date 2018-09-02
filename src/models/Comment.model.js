import mongoose from 'mongoose'
import moment from 'moment'

const CommentSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: moment()
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

export default mongoose.model('Comment', CommentSchema)
