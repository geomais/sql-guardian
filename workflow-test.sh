# Act é um plugin para realizar testes de workflows localmente
# Referencia: https://github.com/nektos/act
# Tag: Versão do hotfix para ser gerada.
# repo: Repositório alvo para gerar a versão.

act --secret-file .env.secrets --var-file .env.vars -W workflow-simulation.yml