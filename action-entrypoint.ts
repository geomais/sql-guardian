import sqlLint from 'sql-lint'

const files: string[] = Bun.env.all_changed_and_modified_files?.split(' ') ?? []

for (const file of files) {
    console.log("🚀 ~ file:", file)
    // const errors = await sqlLint({
    //   sql: 'SELECT my_column FROM my_table',
    // })
}