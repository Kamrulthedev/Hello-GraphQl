import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            return db.products.find(pd => pd.id === args.productId);
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            return db.categories.find(category => category.id === args.categoryId);
        }
    },
    Product: {
        category: (parent, args, context) => {
            const result = db.categories.find(category => category.id === parent.categoruId);
            return result || null;
        }
    },
    Category: {
        products: (parent, args, context) => {
            const result = db.products.filter(product => product.categoruId === parent.id);
            console.log("Category Products Resolver", result);
        }
    }
};
