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
            const result = db.categories.find(category => category.id === parent.categoruId)
            return result || null
        }
    },
    Category:{
        products : (parent, args, context) =>{
            console.log(parent.id)
            const result = db.products.filter(product => product.categoryId === parent.id)
              return result || []
        }
    }

};


