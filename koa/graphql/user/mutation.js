const {
  GraphQLNonNull,
  GraphQLBoolean
} = require('graphql')

const {
  UserInput
}  = require('./model')


const UserCreate = {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInput)
    }
  },
  async resolve (root, params, options) {


    if (!newUser) {
      throw new Error('Error create new user')
    }

    return true
  }
}

module.exports =  {
  UserCreate: UserCreate
}
