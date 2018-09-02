import {GraphQLList} from 'graphql'

import {PostModel} from '../../models'
import {PostType} from '../types'
import {PostInputType} from '../inputs'

export default {
  type : new GraphQLList(PostType),
  args : {
    post: {
      type: PostInputType
    }
  },
  resolve : (_, args) => {
    return PostModel.find()
  }
}