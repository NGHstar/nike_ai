import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    price: "130.00",
    category: "Running",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/AIR+MAX+90.png",
    color: "White/Black",
    sizes: ["7", "8", "9", "10", "11", "12"],
    inStock: true,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: "115.00",
    category: "Lifestyle",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/AIR+FORCE+1+%2707.png",
    color: "White/White",
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    inStock: true,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: "115.00",
    category: "Lifestyle",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/NIKE+DUNK+LOW+RETRO.png",
    color: "Black/White",
    sizes: ["7", "8", "9", "10", "11", "12"],
    inStock: true,
  },
  {
    name: "Nike ZoomX Vaporfly NEXT% 3",
    description:
      "Continuing to push the satisfying satisfying boundaries of fast, the Nike ZoomX Vaporfly NEXT% 3 helps you chase new goals and records.",
    price: "260.00",
    category: "Running",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/ZOOMX+VAPORFLY+NEXT%25+3.png",
    color: "Volt/Black",
    sizes: ["7", "8", "9", "10", "11"],
    inStock: true,
  },
  {
    name: "Nike Air Jordan 1 Retro High OG",
    description:
      "The Air Jordan 1 Retro High remakes the classic sneaker with new colors and fresh details, built on the same iconic design.",
    price: "180.00",
    category: "Basketball",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/AIR+JORDAN+1+RETRO+HIGH+OG.png",
    color: "Chicago Red/White/Black",
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    inStock: true,
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive satisfying cushioning in the Pegasus 41 delivers an energized ride for everyday runs. A breathable upper keeps your feet comfortable mile after mile.",
    price: "140.00",
    category: "Running",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/PEGASUS+41.png",
    color: "Black/Anthracite",
    sizes: ["7", "8", "9", "10", "11", "12"],
    inStock: true,
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    description:
      "The Nike Blazer Mid '77 Vintage harnesses the old-school look of Nike basketball with a vintage midsole finish to bring you an iconic sneaker.",
    price: "105.00",
    category: "Lifestyle",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/BLAZER+MID+%2777+VINTAGE.png",
    color: "White/Black",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    inStock: true,
  },
  {
    name: "Nike Air Max 270",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Air Max 270. The design draws inspiration from Air Max icons.",
    price: "160.00",
    category: "Lifestyle",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4e2d-8b63-e84e1c070014/AIR+MAX+270.png",
    color: "Black/White/Solar Red",
    sizes: ["7", "8", "9", "10", "11", "12"],
    inStock: true,
  },
];

async function seed() {
  console.log("Seeding database with Nike products...");

  await db.delete(products);
  await db.insert(products).values(nikeProducts);

  console.log(`Seeded ${nikeProducts.length} Nike products successfully!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
