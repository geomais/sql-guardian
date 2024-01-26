#!/bin/bash

echo -e "INICIANDO EXECUÇÃO\n"
echo -e "ADDED_FILES: $ADDED_FILES\n"
echo -e "CHANGED_AND_MODIFIED_FILES: $CHANGED_AND_MODIFIED_FILES\n"
echo -e "TABLE_FORBIDDEN_PATTERN: $TABLE_FORBIDDEN_PATTERN\n"
echo -e "COLUMN_FORBIDDEN_PATTERN: $COLUMN_FORBIDDEN_PATTERN\n"

red='\033[41m'
green='\033[42m'
nc='\033[0m'
all_changed_files=("$ADDED_FILES" "$CHANGED_AND_MODIFIED_FILES")
erros=""

function validateTableNames() {
    local current_file=$1
    local table_pattern=".*CREATE\s+TABLE\s+(.*)"
    local table_name=$(grep -i -E "$table_pattern" "$current_file" | sed -E "s/$table_pattern/\1/I")
    
    if [[ "$table_name" =~ $TABLE_FORBIDDEN_PATTERN ]]; then
        erros+=$'\n'"\nArquivo: $current_file: \n$table_name"
    fi
}

for current_file in "${all_changed_files[@]}"; do
    validateTableNames "$current_file"
done

if [ -n "$erros" ]; then
    echo -e "${red}Erros encontrados:$erros${nc}"
    exit 1
else
    echo -e "${green}Nenhum erro encontrado. Execução concluída com sucesso.${nc}"
fi