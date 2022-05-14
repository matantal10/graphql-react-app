const graphql = require("graphql");
const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean} =  graphql;

const TaskType =  new GraphQLObjectType({
    name: "task",
    fields: () => ({
        id: {type: GraphQLInt},
        text: {type: GraphQLString},
        reminder: {type: GraphQLBoolean},
        day: {type: GraphQLString}
    })
});


module.exports = TaskType;
