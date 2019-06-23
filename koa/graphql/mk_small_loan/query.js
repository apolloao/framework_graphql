const {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');

const {
   MkSmallLoanType,
} = require('./model');

const pool = require('../../postgreSQL/connect');

function fetchMkSmallLoan (params) {
    return new Promise(function (resolve,reject) {
        pool.connect((err,client,done)=>{
            if(err){
                reject(err);
            }
            client.query("select id,name,sex,mobile,vocation,loan_amount,partner_id,status,create_time,update_time,order_no,original_mobile,channel,amount,city_id from mk_small_loan order by "+params.order+" limit "+params.limit,(err,res)=>{
                done();
                resolve(res.rows);
                if(err){
                    reject(err)
                }
            })
        })
    })
}
function fetchMkSmallLoanBy (param) {
    return new Promise(function (resolve,reject) {
        pool.connect((err,client,done)=>{
            if(err){
                reject(err);
            }
            console.log(param);

            client.query("select id,name,sex,mobile,vocation,loan_amount,partner_id,status,create_time,update_time,order_no,original_mobile,channel,amount,city_id from mk_small_loan where "+param.split('=')[0]+" = '"+param.split('=')[1] +"'",(err,res)=>{
                done();
                resolve(res.rows);
                if(err){
                    reject(err)
                }
            })
        })
    })
}
const MkSmallLoanBy = {
  type: new GraphQLList(MkSmallLoanType),
  args: {
    param: {
      name: 'param',
      type: new GraphQLNonNull(GraphQLString)//id_1 格式
    }
  },
  resolve (root, params, options) {
      return fetchMkSmallLoanBy(params.param)
  }
}

const MkSmallLoan = {
  type: new GraphQLList(MkSmallLoanType),
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
      return fetchMkSmallLoan(params);
  }
}
module.exports = {
    MkSmallLoanBy:MkSmallLoanBy,
    MkSmallLoan: MkSmallLoan
}
