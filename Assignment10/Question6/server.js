const http = require("http");
const PORT = 4000;

const menProducts = [
    {
        id: 1,
        name: "Men's T-shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing",
    },
    {
        id: 2,
        name: "Men's Sneakers",
        brand: "XYZ",
        price: 49.99,
        color: "Black",
        size: "10",
        category: "Shoes",
    },
    {
        id: 3,
        name: "Men's Jeans",
        brand: "PQR",
        price: 59.99,
        color: "Dark Blue",
        size: "32",
        category: "Clothing",
    },
    {
        id: 4,
        name: "Men's Hoodie",
        brand: "LMN",
        price: 34.99,
        color: "Grey",
        size: "L",
        category: "Clothing",
    },
    {
        id: 5,
        name: "Men's Watch",
        brand: "DEF",
        price: 74.99,
        color: "Silver",
        size: "One Size",
        category: "Accessories",
    },
    {
        id: 6,
        name: "Men's Formal Shirt",
        brand: "GHI",
        price: 29.99,
        color: "White",
        size: "L",
        category: "Clothing",
    },
    {
        id: 7,
        name: "Men's Sunglasses",
        brand: "JKL",
        price: 14.99,
        color: "Black",
        size: "One Size",
        category: "Accessories",
    },
    {
        id: 8,
        name: "Men's Backpack",
        brand: "UVW",
        price: 39.99,
        color: "Navy Blue",
        size: "Medium",
        category: "Accessories",
    },
    {
        id: 9,
        name: "Men's Casual Shoes",
        brand: "XYZ",
        price: 29.99,
        color: "Brown",
        size: "9",
        category: "Shoes",
    },
    {
        id: 10,
        name: "Men's Polo Shirt",
        brand: "PQR",
        price: 24.99,
        color: "Green",
        size: "M",
        category: "Clothing",
    },
];

const womenProducts = [
    {
        id: 1,
        name: "Women's Dress",
        brand: "ABC",
        price: 39.99,
        color: "Red",
        size: "S",
        category: "Clothing",
    },
    {
        id: 2,
        name: "Women's Handbag",
        brand: "XYZ",
        price: 29.99,
        color: "Brown",
        size: "Medium",
        category: "Accessories",
    },
    {
        id: 3,
        name: "Women's Sandals",
        brand: "PQR",
        price: 24.99,
        color: "Beige",
        size: "7",
        category: "Shoes",
    },
    {
        id: 4,
        name: "Women's Hoodie",
        brand: "LMN",
        price: 34.99,
        color: "Grey",
        size: "M",
        category: "Clothing",
    },
    {
        id: 5,
        name: "Women's Sunglasses",
        brand: "DEF",
        price: 14.99,
        color: "Black",
        size: "One Size",
        category: "Accessories",
    },
    {
        id: 6,
        name: "Women's Watch",
        brand: "GHI",
        price: 74.99,
        color: "Gold",
        size: "One Size",
        category: "Accessories",
    },
    {
        id: 7,
        name: "Women's Skirt",
        brand: "JKL",
        price: 29.99,
        color: "Blue",
        size: "S",
        category: "Clothing",
    },
    {
        id: 8,
        name: "Women's Earrings",
        brand: "UVW",
        price: 9.99,
        color: "Silver",
        size: "One Size",
        category: "Accessories",
    },
    {
        id: 9,
        name: "Women's Boots",
        brand: "XYZ",
        price: 59.99,
        color: "Black",
        size: "8",
        category: "Shoes",
    },
    {
        id: 10,
        name: "Women's Blouse",
        brand: "PQR",
        price: 19.99,
        color: "White",
        size: "M",
        category: "Clothing",
    },
];

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Men & Women Dummy Data");
    } else if (req.url === "/men") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(menProducts));
    } else if (req.url === "/women") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(womenProducts));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
