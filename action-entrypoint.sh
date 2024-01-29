#!/bin/bash

red='\033[41m'
green='\033[42m'
black="\e[30m"
erros=""

function validateTableName() {
    local capture_table_pattern=".*CREATE\s+TABLE\s+(IF\s+NOT\s+EXISTS\s+)?(\w+\.)?(\S+).*"
    local captured_table_name=$(echo "$1" | grep -i -E "$capture_table_pattern" | sed -E "s/$capture_table_pattern/\3/I")

    if echo "$captured_table_name" | grep -Eq "$TABLE_FORBIDDEN_PATTERN"; then
        erros+=$'\n'"\n${red}${black}- File [$current_file]: \"$captured_table_name\" does not follow the naming convention for tables. It should not match \"$TABLE_FORBIDDEN_PATTERN\""
    fi
}

function validateColumnName() {
    local capture_column_pattern="CREATE\s+TABLE(?:\s+IF\s+NOT\s+EXISTS)?\s+.+\s*\(([^;]+)\)"
    local captured_column_instructions=$(echo "$1" | grep -i -o -P "$capture_column_pattern" | grep -o -P "\([^;]+\)")
    local captured_column_instructions="${captured_column_instructions:1:-1}"

    IFS=',' read -ra columns <<< "$captured_column_instructions"
    for column in "${columns[@]}"; do
        local column_name=$(echo "$column" | awk '{print $1}')

        if echo "$column_name" | grep -Eq "$COLUMN_FORBIDDEN_PATTERN"; then
            erros+=$'\n'"\n${red}${black}- File [$current_file]: \"$column_name\" does not follow the naming convention for columns. It should not match \"$COLUMN_FORBIDDEN_PATTERN\""
        fi
    done
}

function validateCreateTable() {
    local current_file=$1
    local found_create_table_groups=$(awk '/create[[:space:]]+table(\s+if\s+not\s+exists)?/,/;/ {printf "%s", $0} /;/ {print ""}' "$current_file")

    while IFS= read -r group; do
        validateTableName "$group"
        validateColumnName "$group"
    done <<< "$found_create_table_groups"
}

IFS=' ' read -ra files_array <<< "$CHANGED_AND_MODIFIED_FILES"
for current_file in "${files_array[@]}"; do
    validateCreateTable "$current_file"
done

if [ -n "$erros" ]; then
    echo -e "${red}${black}ERRORS FOUND:$erros"
    exit 1
else
    echo -e "${green}${black}No errors found. Execution finished succesfully!"
fi