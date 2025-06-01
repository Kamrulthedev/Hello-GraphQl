


export const typeDefs = `#graphql
type Product {
id : ID!
name : String
image : String
description : String
price : Float
quantity : Int
category : Category
}

type Category {
id : ID!
name : String
products : [Product]
}

 type Query {
  products: [Product]
  product(productId: ID!): Product
  categories : [Category]
  category(categoryId : ID!): Category,
}`;