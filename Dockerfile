# Use a imagem do Bun
FROM oven/bun:latest

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de seu projeto
COPY . .

# Instale as dependências
RUN bun install

# Execute seu script
CMD ["bun", "dist/index.js"]
