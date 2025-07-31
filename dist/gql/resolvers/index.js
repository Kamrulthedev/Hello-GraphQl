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
            return db.categories.find(category => category.id === parent.categoruId);
        },
        reviews: (parent, args, context) => {
            console.log("parent", parent);
            return db.reviews.filter(review => review.productId === parent.id) || [];
        }
        // Uncomment the following Line if you want to use the db.reviews directly
        // reviews:(parent, args, context) =>{
        //    console.log("parent", parent);
        //    const reviews = db.reviews.filter(review => review.productId);
        //    return reviews.length > 0 ? reviews : "No Reviews Kamrul Bhai!!🤣🤣" }
    },
    Category: {
        products: (parent, args, context) => {
            return db.products.filter(product => product.categoryId === parent.id) || [];
        }
    }
};
