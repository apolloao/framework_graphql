/**
 * Created by apolloao on 2018/4/12.
 */
const app = require('../app');

app.listen(3005,function () {
    console.log('listen at http://localhost:3005' +' graphql at '+'http://localhost:3005/graphiql')
});
