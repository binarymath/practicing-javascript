const fs = require('fs');

async function readFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}
