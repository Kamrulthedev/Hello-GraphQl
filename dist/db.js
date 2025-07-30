const products = [
    {
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd12",
        "name": "Basketball",
        "image": "basketball-image.jpg",
        "description": "An official size basketball for both indoor and outdoor play.",
        "price": 29.99,
        "quantity": 30,
        "onStock": true,
        "categoryId": "4f7f61e5-96c2-445d-80fb-79f58e3d061b",
        "reviews": [
            {
                "id": "bd23fdc4-0636-4199-ad18-7ca9870e855f"
            }
        ]
    },
    {
        "id": "73b8ca8b-ca88-483e-99ea-2fedaf2a1dc1",
        "name": "Football",
        "image": "football-image.jpg",
        "description": "A standard football for casual matches and practice.",
        "price": 19.99,
        "quantity": 25,
        "onStock": true,
        "categoryId": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "2d1fd6b6-2c2b-423d-a8aa-15fc5bd7232d",
        "name": "Running Shoes",
        "image": "running-shoes-image.jpg",
        "description": "Comfortable running shoes for your active lifestyle.",
        "price": 49.99,
        "quantity": 50,
        "onStock": true,
        "categoryId": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "42ebd257-b37d-4751-96cd-f160c12a3c28",
        "name": "Smartphone",
        "image": "smartphone-image.jpg",
        "description": "A high-end smartphone with advanced features and performance.",
        "price": 599.99,
        "quantity": 15,
        "onStock": true,
        "categoryId": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "d292ecd9-7eff-4891-aa12-8e8980f88b6b",
        "name": "Laptop",
        "image": "laptop-image.jpg",
        "description": "A powerful laptop for work and entertainment.",
        "price": 899.99,
        "quantity": 10,
        "onStock": true,
        "categoryId": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "591754e7-ac51-4712-b4c5-5dffc22fd8cf",
        "name": "T-Shirt",
        "image": "t-shirt-image.jpg",
        "description": "A comfortable and stylish t-shirt for everyday wear.",
        "price": 14.99,
        "quantity": 100,
        "onStock": true,
        "categoryId": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "7e41c879-841a-4e36-ae61-89ed9f4a4f32",
        "name": "Jeans",
        "image": "jeans-image.jpg",
        "description": "Classic denim jeans for a timeless look.",
        "price": 34.99,
        "quantity": 75,
        "onStock": true,
        "categoryId": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "b8c841e9-57e2-4afc-8619-8c6bba3ee351",
        "name": "Sofa",
        "image": "sofa-image.jpg",
        "description": "A comfortable and stylish sofa for your living room.",
        "price": 499.99,
        "quantity": 5,
        "onStock": true,
        "categoryId": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "6446970e-1fad-4972-b7f5-adbd896d79b1",
        "name": "Dining Table",
        "image": "dining-table-image.jpg",
        "description": "A sturdy dining table for family gatherings and meals.",
        "price": 299.99,
        "quantity": 10,
        "onStock": true,
        "categoryId": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "43a845da-762e-43ec-bc4d-36a4186361cc",
        "name": "Hiking Boots",
        "image": "hiking-boots-image.jpg",
        "description": "Durable hiking boots for outdoor adventures and treks.",
        "price": 79.99,
        "quantity": 20,
        "onStock": true,
        "categoryId": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "7b9d46d1-66b7-4fad-a136-938224e13246",
        "name": "Tablet",
        "image": "tablet-image.jpg",
        "description": "A versatile tablet for work and entertainment on the go.",
        "price": 349.99,
        "quantity": 30,
        "onStock": true,
        "categoryId": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "78d84af1-9168-4543-8be6-8f34c44077ce",
        "name": "Dress",
        "image": "dress-image.jpg",
        "description": "An elegant dress for special occasions and formal events.",
        "price": 59.99,
        "quantity": 10,
        "onStock": true,
        "categoryId": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "8cb7eff6-90c1-4710-a11b-e42d5767dd95",
        "name": "Coffee Table",
        "image": "coffee-table-image.jpg",
        "description": "A stylish coffee table for your living room decor.",
        "price": 129.99,
        "quantity": 15,
        "onStock": true,
        "categoryId": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "3f88696b-c459-4723-8bfc-1068d648df95",
        "name": "Cycling Helmet",
        "image": "cycling-helmet-image.jpg",
        "description": "A safe and comfortable helmet for cycling",
        "price": 39.99,
        "quantity": 40,
        "onStock": true,
        "categoryId": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "54453d07-1657-462e-8eb2-def82d7ab57d",
        "name": "Desk Chair",
        "image": "desk-chair-image.jpg",
        "description": "An ergonomic desk chair for comfortable work and study.",
        "price": 149.99,
        "quantity": 20,
        "onStock": true,
        "categoryId": "97b84bd6-c11b-435f-8943-17dc97694451"
    }
    // add more products as needed
];
const categories = [
    {
        "id": "4f7f61e5-96c2-445d-80fb-79f58e3d061b",
        "name": "Sports"
    },
    {
        "id": "1b6c2e31-2e03-4487-bedd-d1139c7e5571",
        "name": "Mobile phones"
    }
];
const reviews = [
    {
        "id": "bd23fdc4-0636-4199-ad18-7ca9870e855f",
        "review": "Great basketball for playing with friends!",
        "rating": 4.5,
        "date": "2023-10-20T23:44:24.245+06:00",
        "productId": "2a089dca-d882-4305-9e25-d1dfeb93fd12"
    },
    {
        "id": "97b84bd6-c11b-435f-8943-17dc976943450",
        "review": "Great Basketball For Playing with friends in the school!",
        "rating": 4.5,
        "date": "2023-10-20T23:44:24.245+06:00",
        "productId": "2a089dca-d882-4305-9e25-d1dfeb93fd373"
    },
    {
        "id": "58db016e-0293-49cc-bf42-9384f8bccaef",
        "review": "The football is of good quality and lasts long.",
        "rating": 4,
        "date": "2023-10-22T23:44:24.248+06:00",
        "productId": "73b8ca8b-ca88-483e-99ea-2fedaf2a1dc1"
    },
    {
        "id": "dd0a5da2-35a9-444c-855f-67422e809794",
        "review": "Comfortable running shoes. Highly recommended!",
        "rating": 5,
        "date": "2023-10-17T23:44:24.248+06:00",
        "productId": "2d1fd6b6-2c2b-423d-a8aa-15fc5bd7232d"
    },
    {
        "id": "7a321d90-92b0-438c-ae0a-689c5617ab43",
        "review": "This smartphone is outstanding! Great camera.",
        "rating": 5,
        "date": "2023-10-12T23:44:24.249+06:00",
        "productId": "42ebd257-b37d-4751-96cd-f160c12a3c28"
    },
    {
        "id": "79865426-ddd8-455f-b5f8-b133b5662ded",
        "review": "Excellent laptop for work and gaming.",
        "rating": 4.5,
        "date": "2023-10-15T23:44:24.250+06:00",
        "productId": "d292ecd9-7eff-4891-aa12-8e8980f88b6b"
    },
    {
        "id": "6b3c7582-099d-4813-9c08-314b87df5670",
        "review": "Comfy t-shirt, perfect for everyday wear.",
        "rating": 4,
        "date": "2023-10-18T23:44:24.250+06:00",
        "productId": "591754e7-ac51-4712-b4c5-5dffc22fd8cf"
    }
];
export const db = {
    products,
    categories,
    reviews
};
