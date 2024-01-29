#!/bin/bash

red='\033[41m'
green='\033[42m'
black="\e[30m"
erros=""

function validateTableName() {
    local capture_target_pattern=".*CREATE\s+TABLE\s+(IF\s+NOT\s+EXISTS\s+)?(\S+).*"
    local captured_table_name=$(echo "$1" | grep -i -E "$capture_target_pattern" | sed -E "s/$capture_target_pattern/\2/I")
    
    if [[ "$captured_table_name" =~ $TABLE_FORBIDDEN_PATTERN ]]; then
        erros+=$'\n'"${red}${black}- Nome de tabela no arquivo [$current_file]:\n  ${red}${black}$captured_table_name"
    fi
}

function validateCreateTable() {
    local current_file=$1
    local found_create_table_groups=$(awk '/create[[:space:]]+table(\s+if\s+not\s+exists)?/,/;/ {printf "%s", $0} /;/ {print ""}' "$current_file")

    while IFS= read -r group; do
        validateTableName "$group"
    done <<< "$found_create_table_groups"
}

IFS=' ' read -ra files_array <<< "$CHANGED_AND_MODIFIED_FILES"
for current_file in "${files_array[@]}"; do
    validateCreateTable "$current_file"
done

if [ -n "$erros" ]; then
    echo -e "${red}${black}Erros encontrados:$erros"
    exit 1
else
    echo -e "${green}${black}Nenhum erro encontrado. Execução concluída com sucesso."
fi