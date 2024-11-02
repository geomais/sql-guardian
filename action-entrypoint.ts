import { parse } from 'pgsql-parser';
import { promises as fs } from 'fs';
import * as actionsCore from '@actions/core';

const filePaths = actionsCore.getInput('sql_files', { required: true }).split(' ');
const errors = [];

for (const path of filePaths) {
  const file = await fs.readFile(path, 'utf8');
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
  actionsCore.warning("The following syntax errors were detected. Please review the syntax and ensure it conforms to PostgreSQL standards:\n");
  actionsCore.warning(errors.join('\n'));
  actionsCore.setOutput('sql_errors', errors.join('@split_here@'));
} else {
  actionsCore.info("No syntax errors found in the SQL files.");
  actionsCore.setOutput('sql_errors', 'No syntax errors found.');
}
