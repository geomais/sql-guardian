# SQL Guardian Action

This action prints in the screen the changed files of the current branch, and added files.

## Inputs

### `table_forbidden_pattern`

- Regular expression, when a table name is MATCH, is added to the error's list.
- default = [^_\w]|[A-Z]|[1-9]]

### `column_forbidden_pattern`

- Regular expression, when a column name is MATCH, is added to the error's list.
- default = [^_\w]|[A-Z]|[1-9]]

## Example usage

``

    steps:
      - uses: AutoModality/action-clean@v1

      - name: Checkout code
        uses: actions/checkout@v4
        with:
            token: ${{ secrets.GITHUB_TOKEN }}
            ref: main

      - name: Run SQL Guardian
        uses: sousadiego11/sql-guardian@main
        with:
            table_forbidden_pattern: "[^A-Z]"
            column_forbidden_pattern: "[\d+]"
          
``
