const products = [
    {
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd12",
        "name": "Basketball",
        "image": "basketball-image.jpg",
        "description": "An official size basketball for both indoor and outdoor play. in the wold",
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
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd12",
        "name": "Damdell",
        "image": "dambell-image.jpg",
        "description": "this is the best damdell in the world",
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
        "categoryId": "4f7f61e5-96c2-445d-80fb-79f58e3d061b",
        "reviews": [
            {
                "id": "4f7f61e5-96c2-445d-80fb-79f58e3d06453",
            }
        ]
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
        "id": "2d1fd6b6-2c2b-423d-a8aa-15fc5bd723fg",
        "name": "Boxing T-Shirt",
        "image": "boxing-t-shirt-image.jpg",
        "description": "This is Best Boxing T-Shirt in the Our Bangladesh.",
        "price": 55,
        "quantity": 50,
        "onStock": true,
        "categoryId": "4f7f61e5-96c2-445d-80fb-79f58e3d0ee34"
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
    },
    {
        "id": "fa253321-b802-4f31-b727-80929b0699cd",
        "name": "Fitness Tracker",
        "image": "fitness-tracker-image.jpg",
        "description": "A fitness tracker to monitor your health and activity.",
        "price": 79.99,
        "quantity": 30,
        "onStock": true,
        "categoryId": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "cd6f280e-4af5-404d-a3bc-79c0393823cf",
        "name": "Winter Jacket",
        "image": "winter-jacket-image.jpg",
        "description": "A warm and stylish winter jacket for cold weather.",
        "price": 69.99,
        "quantity": 25,
        "onStock": true,
        "categoryId": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "6b1e0518-8e0d-48de-9c99-61251900ec18",
        "name": "Coffee Maker",
        "image": "coffee-maker-image.jpg",
        "description": "A coffee maker to brew your favorite morning coffee.",
        "price": 49.99,
        "quantity": 20,
        "onStock": true,
        "categoryId": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "6b1e0518-8e0d-48de-9c99-61251900ec187",
        "name": "Computer Market",
        "image": "computer-market-image.png",
        "description": "Computer Market to bow your commit",
        "price": 60.99,
        "quantity": 30,
        "onStock": true,
        "categoryId": "6b1e0518-8e0d-48de-9c99-61251900ec18"
    },
    {
        "id": "6b1e0518-8e0d-48de-9c99-61251900ec187",
        "name": "Note Book",
        "image": "note-book.image",
        "description": "Note Book",
        "price": 40.60,
        "quantity": 60,
        "onStock": true,
        "categoruId": "6b1e0518-8e0d-48de-9c99-61251900ec134"
    },
    {
        "id": "6b1e0518-8e0d-48de-9c99-61251900ec118",
        "name": "Boxing Dambell",
        "image": "boxing-dambell.image",
        "description": "Dambell for boxing",
        "price": 70.00,
        "quantity": 30,
        "onStock": true,
        "categoruId": "6b1e0518-8e0d-48de-9c99-61251900ec24"
    },
    {
        "id": "6b1e0518-8e0d-48de-9c99-61251900ec267",
        "name": "Anderoid Phone",
        "image": "android-phone.image",
        "description": "anderoid phone for your daily use"
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
    },
    {
        "id": "3b40b998-e38a-4cc4-b796-1fd2aea2567f",
        "name": "Clothing"
    },
    {
        "id": "97b84bd6-c11b-435f-8943-17dc97694451",
        "name": "Furniture"
    },
    {
        "id": "97b84bd6-c11b-435f-8943-17dc97694455",
        "name": "computers"
    },
    {
        "id": "2ca704cf-6d7d-4924-8580-74138e9e9ddb878",
        "name": "Tabs"
    },
    {
        "id": "97b84bd6-c11b-435f-8943-17dc97694459",
        "name": "Books"
    },
    {
        "id": "97b84bd6-c11b-435f-8943-17dc97694450",
        "name": "Laptops"
    },
    {
        "id": "97b84bd6-c11b-435f-8943-17dc97694450",
        "name": "Blabs"
    },
    {
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd3",
        "name": "Fans"
    },
    {
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd66",
        "name": "Papers"
    },
    {
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd645",
        "name": "T-Sharts"
    },
    {
        "id": "2a069dca-d882-kf34320230-3423vdkajf",
        "name": "Boxing T-Sharts"
    },
    {
        "id": "2a069dca-d882-kf34320230-3423vdkaifj",
        "name": "Boxing Pants"
    },
    {
        "id": "2a069dca-d882-kf34320230-3423vdkaifj",
        "name": "Dambell"
    },
    {
        "id": "2a069dca-d882-kf34320230-3423vdkaifj",
        "name": "Brand Products"
    },
    {
        "id": "2ca704cf-56d7d-4924-8580-74138e909d5aTag",
        "name": "Honey is Best on the Our Body"
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
    },
    {
        "id": "6b3c7582-099d-4813-9c08-314b87df5671",
        "review": "The Papers on the all on better.",
        "rating": 4.5,
        "date": "2023-10-18T23:44:24.250+06:00",
        "productId": "591754e7-ac51-4712-b4c5-5dffc22fd8c32"
    },
    {
        "id": "7b49b31c-6344-456a-9638-f01ff6f3c0e9",
        "review": "Classic jeans, good fit, and stylish!",
        "rating": 4,
        "date": "2023-10-19T23:44:24.250+06:00",
        "productId": "7e41c879-841a-4e36-ae61-89ed9f4a4f32"
    },
    {
        "id": "e0b31786-2d27-49db-9326-72875912cf9c",
        "review": "The sofa is elegant and comfortable.",
        "rating": 4.5,
        "date": "2023-10-02T23:44:24.250+06:00",
        "productId": "b8c841e9-57e2-4afc-8619-8c6bba3ee351"
    },
    {
        "id": "23f76eb4-bf78-40c5-8f49-af486f789dcc",
        "review": "The dining table is sturdy and looks great.",
        "rating": 4,
        "date": "2023-10-05T23:44:24.251+06:00",
        "productId": "6446970e-1fad-4972-b7f5-adbd896d79b1"
    },
    {
        "id": "87ca5cb1-4e28-4b2e-bcf6-21eab124ce02",
        "review": "Hiking boots are perfect for rough terrains.",
        "rating": 4.5,
        "date": "2023-09-27T23:44:24.251+06:00",
        "productId": "43a845da-762e-43ec-bc4d-36a4186361cc"
    },
    {
        "id": "e0704d05-7d30-4858-abb8-53417e3525c4",
        "review": "Tablet is fast and user-friendly. Love it!",
        "rating": 5,
        "date": "2023-09-22T23:44:24.252+06:00",
        "productId": "7b9d46d1-66b7-4fad-a136-938224e13246"
    },
    {
        "id": "ce3fb39c-ee75-47d7-8627-e18a6e796071",
        "review": "Elegant dress for special occasions.",
        "rating": 4,
        "date": "2023-10-17T23:44:24.252+06:00",
        "productId": "78d84af1-9168-4543-8be6-8f34c44077ce"
    },
    {
        "id": "fa50036b-fdc7-4ec3-90a3-0d6d6601eff0",
        "review": "The coffee table complements our decor nicely.",
        "rating": 4.5,
        "date": "2023-10-07T23:44:24.252+06:00",
        "productId": "8cb7eff6-90c1-4710-a11b-e42d5767dd95"
    },
    {
        "id": "kalkdfklklfjekljdflkja",
        "review": "The coffee table complements our decor nicely",
        "rating": "4.6"
    },
    {
        "id": "99e9788e-2e6e-4469-8803-012c118c5f69",
        "review": "Comfortable cycling helmet for long rides.",
        "rating": 4,
        "date": "2023-10-09T23:44:24.252+06:00",
        "productId": "3f88696b-c459-4723-8bfc-1068d648df95"
    },
    {
        "id": "22fd8fa5-6656-4639-a902-f23e4904eb60",
        "review": "Ergonomic desk chair for productive work.",
        "rating": 5,
        "date": "2023-10-05T23:44:24.253+06:00",
        "productId": "54453d07-1657-462e-8eb2-def82d7ab57d"
    },
    {
        "id": "47e525ef-b182-499c-8d45-55272e9cbeb9",
        "review": "The fitness tracker is accurate and useful.",
        "rating": 4.5,
        "date": "2023-10-02T23:44:24.253+06:00",
        "productId": "fa253321-b802-4f31-b727-80929b0699cd"
    },
    {
        "id": "6121e6ad-bb42-4251-bc41-17f65516dbff",
        "review": "Warm and stylish winter jacket. Love it!",
        "rating": 5,
        "date": "2023-10-07T23:44:24.253+06:00",
        "productId": "cd6f280e-4af5-404d-a3bc-79c0393823cf"
    },
    {
        "id": "df47335a-33ed-4e82-925e-7be175727260",
        "review": "Great coffee maker for my daily brew.",
        "rating": 4,
        "date": "2023-10-12T23:44:24.253+06:00",
        "productId": "6b1e0518-8e0d-48de-9c99-61251900ec18"
    },
    {
        "id": "fda35421-3f33-4755-aee2-ba0eba7e65d9",
        "review": "Good quality products for your store. I would recommend them!",
        "rating": 5,
        "date": "2023-10-22T23:44:24.253+06:00",
        "productId": "6b1e0518-8e0d-48de-9c99-61251900ec18"
    },
    {
        "id": "2ca704cf-6d7d-4924-8580-74138e9e9ddb",
        "review": "Satisfied with my purchase. Will buy again!",
        "rating": 4.5,
        "date": "2023-10-24T23:44:24.253+06:00",
        "productId": "3f88696b-c459-4723-8bfc-1068d648df95"
    },
    {
        "id": "2ca704cf-6d7d-4924-8580-74138e9e9ddr",
        "review": "Kamrul-hassan with my book insoreance company",
        "rating": 4.5,
        "date": "2024-10-23T23:44:24.253+06:00",
        "productId": "3f88696b-c459-4723-8bfc-1068d648dfeaad"
    },
    {
        "id": "2ca704cf-6d7d-4924-8580-74138e9e9ddr",
        "review": "Watching for file change in the forget",
        "rating": 4.5,
        "date": "2023-10-24T23:44:24.253+06:00",
        "productId": "2ca704cf-6d7d-4924-8580-74138e9e9ddbrre"
    },
    {
        "id": "2ca704cf-6d7d-4924-8580-74138e9e9ddrr",
        "review": "Watching for file change in the forget",
        "reting": 4.5,
        "date": "2023-10-24T23:44:24.253+06:00",
        "productId": "2ca704cf-6d7d-4924-8580-74138e9e9ddbrres"
    },
    {
        "id": "2ca704cf-6d7d-4924-8580-74138e9e934r4",
        "review": "Watching for file change",
        "reting": 4.5,
        "date": "2023-10-24T23:44:24.253+06:00",
        "productId": "2ca704cf-6d7d-4924-8580-74138e9e9ddbrres"
    },
    {
        "id": "2ca704cf-6d7d-4924-8580-74138e9e93f3",
        "review": "Watching for file change in the Werkers",
        "reting": 4.5,
        "date": "2023-10-24T23:44:24.253+06:00",
        "productId": "2ca704cf-6d7d-4924-8580-74138e9e9ddbrres"
    },
    {
        "id": "2ca704cf-56d7d-4924-8580-74138e909ddbrres",
        "review": "The Boxing Dambell is perfect for my workouts",
        "rating": 4.5,
        "date": "2023-12-01T23:44:24.253+06:00",
        "productId": "d2d1fd6b8-2c2d-423d-a8aa-55fc5db73dka"
    },
    {
        "id": "2ca704cf-56d7d-4924-8580-74138e909ddbrres",
        "review": "Mobaile phone is very good",
        "rating": 4.5,
        "date": "2023-12-01T23:44:24.243+06:00"
    }
];
export const db = {
    products,
    categories,
    reviews
};
