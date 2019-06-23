const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
}  = require('graphql');

module.exports.MkSmallLoanType = new GraphQLObjectType({
  name: 'MkSmallLoanType',
  fields: {
      id: {
          type: GraphQLID
      },
      mobile: {
          type: GraphQLString
      },
      name: {
          type: GraphQLString
      },
      sex: {
          type: GraphQLID
      },
      vocation: {
          type: GraphQLString
      },
      loan_amount: {
          type: GraphQLString
      },
      partner_id: {
          type: GraphQLString
      },
      status: {
          type: GraphQLString
      },
      create_time: {
          type: GraphQLString
      },
      city_id: {
          type: GraphQLString
      },
      amount: {
          type: GraphQLString
      },
      channel: {
          type: GraphQLString
      },
      original_mobile: {
          type: GraphQLString
      },
      order_no: {
          type: GraphQLString
      },
      update_time: {
          type: GraphQLString
      }
  }
})

module.exports.MkSmallLoanInput = new GraphQLInputObjectType({
  name: 'MkSmallLoanInput',
  fields: {
      order: {
          type: GraphQLString
    },
      limit: {
          type: GraphQLString
    }
  }
})
