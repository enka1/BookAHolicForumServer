import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {jwtSecret} from '../config'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    ref: 'User'
  },
  password: {
    type: String,
    required: true
  },
  display_name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  token: {
    type: String
  }
})

UserSchema.methods.generate_token = function () {
  const token = jwt.sign({
    id: this._id
  }, jwtSecret)
  this.token = token
  this.save()
  return token
}

UserSchema.methods.remove_token = function(){
  this.token = null
  this.save()
}

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    let salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})

export default mongoose.model('User', UserSchema)