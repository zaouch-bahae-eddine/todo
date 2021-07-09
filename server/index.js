
const { ApolloServer } = require('apollo-server');
const TypeDefs = require('./gql/TypeDefs.js');
const Resolver = require('./gql/Resolver');


const server = new ApolloServer({ typeDefs: TypeDefs, resolvers: Resolver });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})