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
            console.log(parent.id);
            return db.products.filter(product => product.categoryId === parent.id) || [];
        }
    }
};
