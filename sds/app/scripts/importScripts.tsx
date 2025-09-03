// scripts/seedSurfSpots.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const surfSpots = [
    {
        name: "Thurso East",
        lat: 58.5959,
        lng: -3.5214,
    },
    {
        name: "Pease Bay",
        lat: 55.8666,
        lng: -2.3361,
    },
    {
        name: "Belhaven Bay",
        lat: 56.0022,
        lng: -2.5239,
    },
];

export const seedSurfSpots = async () => {
    try {
        for (const spot of surfSpots) {
            await addDoc(collection(db, "surfSpots"), spot);
        }
        console.log("✅ Surf spots seeded successfully!");
    } catch (err) {
        console.error("❌ Error seeding surf spots:", err);
    }
};
