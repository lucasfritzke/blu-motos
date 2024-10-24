# Use uma imagem oficial do Node.js como base para construir o projeto
FROM node:16 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Gera o build da aplicação Angular
RUN npm run build --prod

# Etapa final: utiliza uma imagem NGINX para servir a aplicação
FROM nginx:alpine

# Copia os arquivos estáticos do build do Angular para a pasta padrão do NGINX
COPY --from=build /app/dist/blu-motos /usr/share/nginx/html

# Expõe a porta 80 para o acesso HTTP
EXPOSE 80

# Comando para rodar o NGINX (já configurado para servir a aplicação Angular)
CMD ["nginx", "-g", "daemon off;"]
