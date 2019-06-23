const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
}  = require('graphql');

module.exports.UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLID
    },
      weixin_id:{
      type: GraphQLString
      },
      weixinName: {
      type: GraphQLString
    },
      nickName: {
      type: GraphQLString
    },
      open_id: {
      type: GraphQLString
    },
      weixinavatar: {
      type: GraphQLString
    },
      createtime: {
      type: GraphQLString
    },
      code: {
      type: GraphQLString
    },
      city: {
          type: GraphQLString
      },
      country: {
          type: GraphQLString
      },
      language: {
          type: GraphQLString
      },
      province: {
          type: GraphQLString
      },
      avatarUrl: {
          type: GraphQLString
      },
      v: {
          type: GraphQLString
      },
      e_mail: {
          type: GraphQLString
      },
      position: {
          type: GraphQLString
      },
      address: {
          type: GraphQLString
      },
      phone: {
          type: GraphQLString
      },
      company: {
          type: GraphQLString
      },
      gender: {
          type: GraphQLString
      },
      phonemodel: {
          type: GraphQLString
      }
  }
})

module.exports.UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    nickname: {
      type: GraphQLString
    }
  }
})
