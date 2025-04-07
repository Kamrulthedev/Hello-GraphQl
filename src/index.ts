import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './db.js';
import { typeDefs } from './gql/schema/index.js';

const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent : any, args : {productId : string}, context: any) => {
            const result = db.products.find(pd =>pd.id === args.productId)
            return result
        },
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

