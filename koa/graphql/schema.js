const {
  GraphQLObjectType,
  GraphQLSchema
}  = require('graphql');

const UserQueries = require('./user/query');
const MkLoanInfoQueries = require('./mk_loan_info/query');
const MkSmallLoanQueries = require('./mk_small_loan/query');

const UserMutations = require('./user/mutation');

module.exports  = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: Object.assign(
      UserQueries,
      MkLoanInfoQueries,
      MkSmallLoanQueries
    )
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: Object.assign(
      UserMutations,
    )
  })
})
