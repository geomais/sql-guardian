# SQL Guardian Action

This action checks all the branch changed files, matching against forbidden rules described during the workflow configuration as featured below. When a error exists, the action itself exits with error, logging the found matches.

## Inputs

### `table_forbidden_pattern`

- Regular expression, when a table name is MATCH, is added to the error's list.
- default = [^_[:alnum:]]|[A-Z]|[1-9]
- explanation = match if includes uppercase letters, numbers, of non-word caracteres different from underline.
- IMPORTANT: This action executes all validations inside ShellScript. To ensure your RegEx works as expected you should provide an pattern using [POSIX](https://www.regular-expressions.info/posixbrackets.html). 

### `column_forbidden_pattern`

- Regular expression, when a column name is MATCH, is added to the error's list.
- default = [^_[:alnum:]]|[A-Z]|[1-9]
- explanation = match if includes uppercase letters, numbers, of non-word caracteres different from underline.
- IMPORTANT: This action executes all validations inside ShellScript. To ensure your RegEx works as expected you should provide an pattern using [POSIX](https://www.regular-expressions.info/posixbrackets.html). 

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
          

