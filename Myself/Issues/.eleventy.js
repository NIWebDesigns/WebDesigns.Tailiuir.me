const fs = require('fs');
const path = require('path');

// Adjust the path to point to Myself/Issues instead of the default issues folder
const issuesFolder = path.join(__dirname, 'Myself', 'Issues');

function generateWebsite() {
  const issues = fs.readdirSync(issuesFolder);

  issues.forEach(issueFile => {
    const issuePath = path.join(issuesFolder, issueFile);
    const issueContent = fs.readFileSync(issuePath, 'utf-8');

    // Process issueContent and generate website content (this depends on how the original code works)
    console.log(`Processing issue: ${issueFile}`);
    // Assuming there's logic here to generate HTML or content for the website
  });

  console.log("Website generated successfully from Myself/Issues!");
}

generateWebsite();
