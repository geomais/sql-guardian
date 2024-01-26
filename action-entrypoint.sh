#!/bin/bash

echo -e "INICIANDO EXECUÇÃO\n"
echo -e "ADDED_FILES: $ADDED_FILES\n"
echo -e "CHANGED_AND_MODIFIED_FILES: $CHANGED_AND_MODIFIED_FILES\n"
echo -e "TABLE_FORBIDDEN_PATTERN: $TABLE_FORBIDDEN_PATTERN\n"
echo -e "COLUMN_FORBIDDEN_PATTERN: $COLUMN_FORBIDDEN_PATTERN\n"

colecao_valores=("$ADDED_FILES" "$CHANGED_AND_MODIFIED_FILES")
erros=""

for valor in "${colecao_valores[@]}"; do
    padrao="CREATE\s+TABLE\s+$TABLE_FORBIDDEN_PATTERN"
    
    if grep -q -i -E "$padrao" "$valor"; then
        erros+="Erro no arquivo $valor: Padrão '$padrao' encontrado"$'\n'
    fi

done

if [ -n "$erros" ]; then
    echo -e "Erros encontrados:\n$erros"
    exit 1
else
    echo -e "Nenhum erro encontrado. Execução concluída com sucesso."
fi