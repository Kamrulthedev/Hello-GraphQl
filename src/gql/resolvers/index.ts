import { db } from "../../db.js";


export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent: any, args: { productId: string }, context: any) => {
            return db.products.find(pd => pd.id === args.productId)
        },
        categories: () => db.categories,
        category: (parent: any, args: { categoryId: string }, context: any) => {
            return db.categories.find(category => category.id === args.categoryId)
        }
    },
    Product: {
        category: (parent, args, context) => {
            return db.categories.find(category => category.id === parent.categoruId)
        },
        reviews:(parent, args, context) =>{
           console.log("parent", parent);
           return db.reviews.filter(reviews => reviews.productId === parent.id) || [];

        }
        // reviews:(parent, args, context) =>{
        //    console.log("parent", parent);
        //    const reviews = db.reviews.filter(review => review.productId);

        //    return reviews.length > 0 ? reviews : "No Reviews Kamrul Bhai!!🤣🤣" }

        
    },
    Category:{
        products : (parent, args, context) =>{
            return db.products.filter(product => product.categoryId === parent.id) || []
        }
    }

};


