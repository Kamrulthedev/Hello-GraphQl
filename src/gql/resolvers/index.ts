import { db } from "../../db.js";


export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent: any, args: { productId: string }, context: any) => {
            const result = db.products.find(pd => pd.id === args.productId)
            return result
        },
        categories: () => db.categories,
        category: (parent: any, args: { categoryId: string }, context: any) => {
            // const result = db.categories.find(pd)
            console.log(args)
        }
    },

};


