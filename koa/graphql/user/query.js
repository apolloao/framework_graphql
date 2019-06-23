const {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

const {
  UserType
} = require('./model')

const mysql = require('mysql'),
    settings = {
        host:"host",
        user:"user",
        password:"password",
        database:'database',
        port: 3306
    };
const connection = mysql.createConnection({
    host : settings.host,
    port : settings.port,
    database : settings.database,
    user : settings.user,
    password : settings.password
});




function fetchUsers () {
    return new Promise(function (resolve) {
        connection.query('select * from user',function(err,res){
            resolve(res)
        });
    })
}
function fetchUser (id) {
    return new Promise(function (resolve) {
        connection.query('select * from user where id = '+id,function(err,res){
            resolve(res[0])
        });
    })
}
const User = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
      console.log(params.id)
      return fetchUser(params.id)
  }
}

const Users = {
  type: new GraphQLList(UserType),
  args: {},
  resolve (root, params, options) {
      return fetchUsers();
  }
}

module.exports = {
    User:User,
  Users: Users
}
