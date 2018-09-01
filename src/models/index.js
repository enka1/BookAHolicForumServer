import mongoose from 'mongoose'
import UserModel from './User.model'

export const connectMongoDB = () => {
  mongoose.connect('mongodb://localhost:27017/Forum', {useNewUrlParser: true})
}
export {UserModel}