import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma";
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    // Clear existing data
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.establishment.deleteMany();

    console.log("Database cleared.");

    // Create Establishment
    const establishment = await prisma.establishment.create({
        data: {
            name: "Burger House Foodzy",
            slug: "burger-house",
            whatsapp: "5511999999999",
            logoUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=200",
            primaryColor: "#FF6B00",
        },
    });

    console.log(`Establishment created: ${establishment.name}`);

    // Create Categories
    const categories = [
        { name: "Burgers", order: 1 },
        { name: "Acompanhamentos", order: 2 },
        { name: "Bebidas", order: 3 },
        { name: "Sobremesas", order: 4 },
    ];

    const createdCategories = [];

    for (const cat of categories) {
        const category = await prisma.category.create({
            data: {
                name: cat.name,
                order: cat.order,
                establishmentId: establishment.id,
            },
        });
        createdCategories.push(category);
        console.log(`Category created: ${category.name}`);
    }

    // Find categories for products
    const burgersCat = createdCategories.find((c) => c.name === "Burgers")!;
    const sidesCat = createdCategories.find((c) => c.name === "Acompanhamentos")!;
    const drinksCat = createdCategories.find((c) => c.name === "Bebidas")!;
    const dessertsCat = createdCategories.find((c) => c.name === "Sobremesas")!;

    // Create Products
    const products = [
        // Burgers
        {
            name: "Classic Burger",
            description: "Pão brioche, carne de 160g, queijo cheddar, alface, tomate e maionese da casa.",
            price: 28.9,
            categoryId: burgersCat.id,
            imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000",
        },
        {
            name: "Bacon Delight",
            description: "Pão brioche, carne de 160g, queijo cheddar, muito bacon crocante e molho barbecue.",
            price: 34.9,
            categoryId: burgersCat.id,
            imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=1000",
        },
        {
            name: "Double Cheese",
            description: "Pão brioche, duas carnes de 100g, dobro de queijo cheddar e picles.",
            price: 38.9,
            categoryId: burgersCat.id,
            imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1000",
        },
        // Sides
        {
            name: "Batata Frita Média",
            description: "Batatas fritas crocantes e sequinhas.",
            price: 14.9,
            categoryId: sidesCat.id,
            imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=1000",
        },
        {
            name: "Onion Rings",
            description: "Anéis de cebola empanados acompanhados de molho especial.",
            price: 18.9,
            categoryId: sidesCat.id,
            imageUrl: "https://images.unsplash.com/photo-1639024471283-0351888b512c?auto=format&fit=crop&q=80&w=1000",
        },
        // Drinks
        {
            name: "Coca-Cola Lata",
            description: "350ml",
            price: 6.5,
            categoryId: drinksCat.id,
            imageUrl: "https://images.unsplash.com/photo-1629203851022-39c6f254689d?auto=format&fit=crop&q=80&w=1000",
        },
        {
            name: "Suco de Laranja",
            description: "Natural 400ml",
            price: 9.9,
            categoryId: drinksCat.id,
            imageUrl: "https://images.unsplash.com/photo-1600266175161-cffe47384a77?auto=format&fit=crop&q=80&w=1000",
        },
        // Desserts
        {
            name: "Brownie com Sorvete",
            description: "Brownie de chocolate belga com sorvete de baunilha e calda de chocolate.",
            price: 22.9,
            categoryId: dessertsCat.id,
            imageUrl: "https://images.unsplash.com/photo-1624353335558-98e7bb3627ea?auto=format&fit=crop&q=80&w=1000",
        },
    ];

    for (const prod of products) {
        await prisma.product.create({
            data: {
                ...prod,
                establishmentId: establishment.id,
            },
        });
        console.log(`Product created: ${prod.name}`);
    }

    console.log("Seed finished successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
