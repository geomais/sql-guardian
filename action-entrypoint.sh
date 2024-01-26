#!/bin/bash

echo -e "INICIANDO EXECUÇÃO\n"
echo -e "CHANGED_AND_MODIFIED_FILES: $CHANGED_AND_MODIFIED_FILES\n"
echo -e "TABLE_FORBIDDEN_PATTERN: $TABLE_FORBIDDEN_PATTERN\n"
echo -e "COLUMN_FORBIDDEN_PATTERN: $COLUMN_FORBIDDEN_PATTERN\n"

red='\033[41m'
green='\033[42m'
nc='\033[0m'
black="\e[30m"
erros=""
IFS=' ' read -ra files_array <<< "$CHANGED_AND_MODIFIED_FILES"

function validateTableNames() {
    local current_file=$1
    local table_pattern=".*CREATE\s+TABLE\s+([^\s]*)"
    local table_name=$(grep -i -E "$table_pattern" "$current_file" | sed -E "s/$table_pattern/\1/I")
    
    if [[ "$table_name" =~ $TABLE_FORBIDDEN_PATTERN ]]; then
        erros+=$'\n'"\n${red}${black}Nomes de tabela no arquivo [$current_file]: \n${red}${black}$table_name"
    fi
}

for current_file in "${files_array[@]}"; do
    validateTableNames "$current_file"
done

if [ -n "$erros" ]; then
    echo -e "${red}${black}Erros encontrados:$erros${nc}"
    exit 1
else
    echo -e "${green}${black}Nenhum erro encontrado. Execução concluída com sucesso.${nc}"
fi