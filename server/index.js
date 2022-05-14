
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 6969;
const taskData = require("../server/GRAPHQL_MOCK_DATA");
const graphql = require("graphql");
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList} =  graphql;
const { graphqlHTTP } = require("express-graphql");

const schema = require('./schemas/index');

app.use(cors());

/**
 * use a single route is graphql.
 */
app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}));


app.listen(PORT, () => {
   console.log("Server running");
});