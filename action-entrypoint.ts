// action-entrypoint.cjs
import { parse } from 'pgsql-parser';

const filePaths = Bun.env.SQL_FILES?.split(' ') || [];
const errors = [];

for (const path of filePaths) {
  const file = await Bun.file(path).text();
  const statements = file.split(';').filter(sta => sta.trim());

  for (const statement of statements) {
    try {
      parse(statement);
    } catch (error) {
      const e = error as Error
      errors.push(`Error in file [${path}]: ${e.message}`);
    }
  }
}

if (errors.length > 0) {
  console.error("The following syntax errors were detected. Please review the syntax and ensure it conforms to PostgreSQL standards:\n");
  console.error(errors.join('\n'));
  if (Bun.env.GITHUB_OUTPUT) await Bun.write(Bun.env.GITHUB_OUTPUT, `sql_errors=${errors.join('@split_here@')}`);
  process.exit(1);
} else {
  console.log("No syntax errors found in the SQL files.");
  if (Bun.env.GITHUB_OUTPUT) await Bun.write(Bun.env.GITHUB_OUTPUT, `sql_errors=No syntax errors found.`);
}