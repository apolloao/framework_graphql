const {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = require('graphql')

const {
   MkLoanInfoType,
    MkLoanInfoInput
} = require('./model')

const pool = require('../../postgreSQL/connect');

function fetchMkLoanInfo (params) {
    return new Promise(function (resolve,reject) {
        pool.connect((err,client,done)=>{
            if(err){
                reject(err);
            }
            client.query("select id,mobile,channel,partner_id,ip,create_time from mk_loan_info order by "+params.order+" limit "+params.limit,(err,res)=>{
                done();
                resolve(res.rows);
                if(err){
                    reject(err)
                }
            })
        })
    })
}
function fetchMkLoanInfoBy (param) {
    return new Promise(function (resolve,reject) {
        pool.connect((err,client,done)=>{
            if(err){
                reject(err);
            }
            client.query("select id,mobile,channel,partner_id,ip,create_time from mk_loan_info where "+param.split('=')[0]+" = "+param.split('=')[1],(err,res)=>{
                done();
                resolve(res.rows);
                if(err){
                    reject(err)
                }
            })
        })
    })
}
const MkLoanInfoBy = {
  type: new GraphQLList(MkLoanInfoType),
  args: {
    param: {
      name: 'param',
      type: new GraphQLNonNull(GraphQLString)//id_1 格式
    }
  },
  resolve (root, params, options) {
      return fetchMkLoanInfoBy(params.param)
  }
}

const MkLoanInfo = {
  type: new GraphQLList(MkLoanInfoType),
  args: {
      order: {
          name: 'order',
          type:  new GraphQLNonNull(GraphQLString)
      },
      limit: {
          name: 'limit',
          type:  new GraphQLNonNull(GraphQLString)
      }
  },
  resolve (root, params, options) {
      return fetchMkLoanInfo(params);
  }
}
module.exports = {
    MkLoanInfoBy:MkLoanInfoBy,
    MkLoanInfo: MkLoanInfo
}
