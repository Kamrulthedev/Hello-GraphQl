import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './db.js';
const typeDefs = `#graphql

type Product {
id : ID!
name : String
image : String
description : String
price : Float
quantity : Int
categoryId : String
}


 type Query {
  products: [Product]
  product(id: ID!): Product
}

`;
const resolvers = {
    Query: {
        products: () => db.products,
        product: (_, { id }) => db.products.find((p) => p.id === id),
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
