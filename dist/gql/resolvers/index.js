import { db } from "../../db";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find(pd => pd.id === args.productId);
            return result;
        },
    },
};
