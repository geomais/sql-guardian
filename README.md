# SQL Guardian Action

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)

This action checks all the branch changed files, matching against forbidden rules described during the workflow configuration as featured below. When a error exists, the action itself exits with error, logging the found matches.

## Inputs

### `table_forbidden_pattern`

- Regular expression, when a table name inside a create table instruction is MATCH, is added to the error's list.
- default = [^_[:alnum:]]|[A-Z]|[1-9]
- explanation = match if includes uppercase letters, numbers, of non-word caracters different from underline.
- IMPORTANT: This action executes all validations inside ShellScript. To ensure your RegEx works as expected you should provide an pattern using [POSIX](https://www.regular-expressions.info/posixbrackets.html). 

### `column_forbidden_pattern`

- Regular expression, when a column name inside a create table instruction is MATCH, is added to the error's list.
- default = [^_[:alnum:]]|[A-Z]|[1-9]
- explanation = match if includes uppercase letters, numbers, of non-word caracters different from underline.
- IMPORTANT: This action executes all validations inside ShellScript. To ensure your RegEx works as expected you should provide an pattern using [POSIX](https://www.regular-expressions.info/posixbrackets.html). 

## Supports
- The table validation also checks if a create table includes `if not exists` so your migration files are also following the convention defined.
- The table name MAY preceed a schema name. For example, the table name `schema.table.wrong_name1` will validate the string `table.wrong_name1` and throw an error.
- This action references the syntax of PostgreSQL.

## Example usage

    steps:
      - uses: AutoModality/action-clean@v1

      - name: Checkout code
        uses: actions/checkout@v4
        with:
            token: ${{ secrets.GITHUB_TOKEN }}
            ref: main

      - name: Run SQL Guardian
        uses: geomais/sql-guardian@main
        with:
            table_forbidden_pattern: "[:digit:]"
            column_forbidden_pattern: "[:upper:]"
          

