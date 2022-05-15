
const graphql = require("graphql");
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLID} =  graphql;

const taskData = require("../GRAPHQL_MOCK_DATA.json");
const TaskType = require('./TypeDevs/TaskType');
/**
 * we need to define an object type for the task.
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllTasks: {
            type: new GraphQLList(TaskType),
            args: {id: {type: GraphQLInt}},
            resolve(parent, args) {
                return taskData
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTask: {
            type: TaskType,
            args: {
                text: {type: GraphQLString},
                day: {type: GraphQLString},
                reminder: {type: GraphQLBoolean},
            },
            resolve(parent, args) {
                taskData.push({id: taskData.length + 1, text: args.text, day: args.day , reminder: args.reminder});
                return args
            }
        },
        deleteTask: {
            type: TaskType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args) {
                const id = args.id;
                taskData.filter(task => task.id !== id);
                return args
                console.log(id);
            }
        }
    }
});

/**
 *
 */
module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});