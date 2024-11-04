# SQL Guardian Action

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

This action checks all the desired files and runs a check using pgsql-parser to find possible syntax errors.

## 🔧 Inputs
### `sql_files`
- The list of files SQL Guardian should look to find possible syntax errors

## 📤 Outputs
### `sql_errors`
- The list of errors found during the execution, a string separating errors by "\n". If no errors are found, the output is a default "not found" message.

## 🛠️ Supports
- SQL Guardian currently supports only PostgreSQL using npm's pgsql-parser

## A very common way of using SQL Guardian is to comment Pull Requests as shown below:
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          ref: ${{ github.event.pull_request.head.ref }}

      - name: Run SQL Guardian
        id: sql_guardian
        uses: geomais/sql-guardian@feat/sql-lint
        with:
          sql_files: ./files/database.sql .files/tables.sql

      - name: Comment PR with possible SQL syntax errors
        uses: thollander/actions-comment-pull-request@v3
        with:
          comment-tag: execution
          message: "## 🛠️ SQL Syntax Check Report\n\n${{ steps.sql_guardian.outputs.sql_errors }}"
