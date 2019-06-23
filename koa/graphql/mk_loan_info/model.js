const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
}  = require('graphql');

module.exports.MkLoanInfoType = new GraphQLObjectType({
  name: 'MkLoanInfo',
  fields: {
      id: {
          type: GraphQLID
      },
      mobile: {
          type: GraphQLString
      },
      channel: {
          type: GraphQLString
      },
      partner_id: {
          type: GraphQLID
      },
      ip: {
          type: GraphQLString
      },
      create_time: {
          type: GraphQLString
      }
  }
})

module.exports.MkLoanInfoInput = new GraphQLInputObjectType({
  name: 'MkLoanInfoInput',
  fields: {
      order: {
          type: GraphQLString
    },
      limit: {
          type: GraphQLString
    }
  }
})
