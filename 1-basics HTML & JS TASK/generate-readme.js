const fs = require('fs');
const path = require('path');

const folderPath = './1-basics HTML & JS TASK'; // folder jiske andar sab folders hain

// Function to generate README for a folder
function generateReadme(folder) {
  const folderFullPath = path.join(folderPath, folder);
  const files = fs.readdirSync(folderFullPath);

  // Collect code snippets (only first 20 lines for brevity)
  let codeSnippets = '';
  files.forEach(file => {
    if(file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      const content = fs.readFileSync(path.join(folderFullPath, file), 'utf-8')
                        .split('\n').slice(0,20).join('\n');
      codeSnippets += `\n### ${file}\n\`\`\`\n${content}\n\`\`\`\n`;
    }
  });

  // Template for README
  const readmeContent = `
# ${folder} - Auto Generated README

## Folder Structure
\`\`\`
${files.join('\n')}
\`\`\`

## Code Snippets
${codeSnippets}

## Key Learning Summary
- Concepts used in this folder.
- HTML/CSS/JS basics applied.

## Future Improvements
- Responsive design
- Interactivity or new features
`;

  fs.writeFileSync(path.join(folderFullPath, 'README.md'), readmeContent);
  console.log(`README generated for ${folder}`);
}

// Loop through subfolders
fs.readdirSync(folderPath).forEach(folder => {
  if(fs.lstatSync(path.join(folderPath, folder)).isDirectory()) {
    generateReadme(folder);
  }
});
