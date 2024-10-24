# Usar uma imagem oficial do NGINX como base
FROM nginx:alpine

# Copiar os arquivos do build Angular para o diretório padrão do NGINX
COPY ./blu-motos/dist/blu-motos/browser /usr/share/nginx/html

# Expor a porta 80 para o acesso HTTP
EXPOSE 80

# Comando para rodar o NGINX
CMD ["nginx", "-g", "daemon off;"]
