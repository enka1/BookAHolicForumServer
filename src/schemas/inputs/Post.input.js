import {GraphQLInputObjectType, GraphQLString} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'PostInputType',
  fields: {
    id: {
      type: GraphQLString
    }
  }
})