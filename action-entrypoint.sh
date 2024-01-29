#!/bin/bash

red='\033[41m'
green='\033[42m'
black="\e[30m"
erros=""

function validateTableName() {
    local capture_target_pattern=".*CREATE\s+TABLE\s+(IF\s+NOT\s+EXISTS\s+)?(\S+).*"
    local captured_table_name=$(echo "$1" | grep -i -E "$capture_target_pattern" | sed -E "s/$capture_target_pattern/\2/I")

    if echo "$captured_table_name" | grep -Eq "$TABLE_FORBIDDEN_PATTERN"; then
        erros+=$'\n'"${red}${black}- Table name in file [$current_file]:\n  ${red}${black}\"$captured_table_name\" matches the pattern \"$TABLE_FORBIDDEN_PATTERN\""
    fi
}

function validateColumnName() {
    local capture_column_pattern="CREATE\s+TABLE(?:\s+IF\s+NOT\s+EXISTS)?\s+\w+\s*\(([^;]+)\)"
    local captured_column_instructions=$(echo "$1" | grep -i -o -P "$capture_column_pattern" | grep -o -P "\([^;]+\)")
    local captured_column_instructions="${captured_column_instructions:1:-1}"

    IFS=',' read -ra columns <<< "$captured_column_instructions"
    for column in "${columns[@]}"; do
        local column_name=$(echo "$column" | awk '{print $1}')

        if echo "$column_name" | grep -Eq "$COLUMN_FORBIDDEN_PATTERN"; then
            erros+=$'\n'"${red}${black}- Column name in file [$current_file]:\n  ${red}${black}\"$column_name\" matches the pattern \"$COLUMN_FORBIDDEN_PATTERN\""
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
    echo -e "${red}${black}Found errors:$erros"
    exit 1
else
    echo -e "${green}${black}No errors found. Execution finished succesfully!"
fi