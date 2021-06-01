const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');


try {
    mongoose.connect('mongodb://localhost:27017/node-graphql', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('success connection');
}
catch (error) {
    console.log('Error connection: ' + error);
}

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();