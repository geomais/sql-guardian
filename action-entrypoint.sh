#!/bin/bash

red='\033[41m'
green='\033[42m'
black="\e[30m"
erros=""
IFS=' ' read -ra files_array <<< "$CHANGED_AND_MODIFIED_FILES"

function validateTableNames() {
    local current_file=$1
    local table_pattern=".*CREATE\s+TABLE\s+(\S+)"
    local table_name=$(grep -i -E "$table_pattern" "$current_file" | sed -E "s/$table_pattern.*/\1/I")
    
    if [[ "$table_name" =~ $TABLE_FORBIDDEN_PATTERN ]]; then
        erros+=$'\n'"\nNomes de tabela no arquivo [$current_file]: \n$table_name"
    fi
}

for current_file in "${files_array[@]}"; do
    validateTableNames "$current_file"
done

if [ -n "$erros" ]; then
    echo -e "${red}${black}Erros encontrados:$erros"
    exit 1
else
    echo -e "${green}${black}Nenhum erro encontrado. Execução concluída com sucesso."
fi