
const { ApolloServer } = require('apollo-server');
const TypeDef = require('./gql/TypeDefs.js');
const Resolver = require('./gql/Resolver');


const server = new ApolloServer({ typeDefs: TypeDef, resolvers: Resolver });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})