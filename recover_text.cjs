
const fs = require('fs');
const path = require('path');

const filePath = String.raw`c:\projects\project-60\dist\assets\index-Cgg4LlTn.js`;
const keywords = [
    "What we own",
    "Outbound runs",
    "Commercial structure",
    "What changes",
    "Book a time",
    "Results",
    "Process",
    "Outcome"
];

try {
    const content = fs.readFileSync(filePath, 'utf8');

    keywords.forEach(kw => {
        console.log(`--- SEARCHING FOR: ${kw} ---`);
        let index = content.indexOf(kw);
        while (index !== -1) {
            const start = Math.max(0, index - 500);
            const end = Math.min(content.length, index + 2500);
            console.log(`MATCH AT ${index}:`);
            console.log(content.substring(start, end));
            console.log("--------------------------------------------------");

            // Find next occurrence
            index = content.indexOf(kw, index + 1);
        }
    });
} catch (err) {
    console.error("Error reading file:", err);
}
