const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Technology & Programming" },
                { name: "Business & Entrepreneurship" },
                { name: "Data Science & AI" },
                { name: "Creative & Design" },
                { name: "Personal Development" },
                { name: "Language & Writing" },
                { name: "Science & Engineering" },
                { name: "Health & Fitness" },
                { name: "Music & Arts" },
                { name: "Exam Preparation & Certifications" }
            ]
        });
        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();
