import { parse } from 'pgsql-parser';
import fs from 'fs';

const filePaths = process.env.CHANGED_AND_MODIFIED_FILES?.split(' ') || [];
const errors = [];

for (const path of filePaths) {
  try {
    const file = await fs.promises.readFile(path, 'utf-8');
    const statements = file.split(';').filter(sta => sta.trim());

    for (const statement of statements) {
      try {
        parse(statement);
      } catch (error) {
        errors.push(`Error in file [${path}]: ${error.message}`);
      }
    }
  } catch (err) {
    console.error(`Could not read file [${path}]: ${err.message}`);
  }
}

if (errors.length > 0) {
  console.error("The following syntax errors were detected. Please review the syntax and ensure it conforms to PostgreSQL standards:\n");
  console.error(errors.join('\n'));
  await fs.promises.appendFile(process.env.GITHUB_OUTPUT, `sql_errors=${errors.join('@split_here@')}`);
  process.exit(1);
} else {
  console.log("No syntax errors found in the SQL files.");
  console.log("::set-output name=sql_errors::No syntax errors found.\n");
  await fs.promises.appendFile(process.env.GITHUB_OUTPUT, `sql_errors=No syntax errors found.`);
}
