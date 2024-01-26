#!/bin/bash

red='\033[41m'
green='\033[42m'
black="\e[30m"
erros=""
IFS=' ' read -ra files_array <<< "$CHANGED_AND_MODIFIED_FILES"

function validateTableName() {
    local current_file=$1
    local capture_target_pattern=".*CREATE\s+TABLE\s+(IF\s+NOT\s+EXISTS\s+)?(\S+).*"
    local found_target=$(grep -i -E "$capture_target_pattern" "$current_file" | sed -E "s/$capture_target_pattern/\2/I")
    
    if [[ "$found_target" =~ $TABLE_FORBIDDEN_PATTERN ]]; then
        erros+=$'\n'"\nNomes de tabela no arquivo [$current_file]: \n$found_target"
    fi
}

for current_file in "${files_array[@]}"; do
    validateTableName $current_file
done

if [ -n "$erros" ]; then
    echo -e "${red}${black}Erros encontrados:$erros"
    exit 1
else
    echo -e "${green}${black}Nenhum erro encontrado. Execução concluída com sucesso."
fi