
const fs = require('fs');

const filePath = String.raw`c:\projects\project-60\dist\assets\index-Cgg4LlTn.js`;
const outputPath = String.raw`c:\projects\project-60\bundle_tail.txt`;

try {
    const fd = fs.openSync(filePath, 'r');
    const stats = fs.statSync(filePath);
    const size = stats.size;
    const chunkSize = 50000;
    const buffer = Buffer.alloc(chunkSize);

    fs.readSync(fd, buffer, 0, chunkSize, Math.max(0, size - chunkSize));

    fs.writeFileSync(outputPath, buffer.toString('utf8'));
    console.log("Dumped tail to bundle_tail.txt");

} catch (err) {
    console.error("Error:", err);
}
