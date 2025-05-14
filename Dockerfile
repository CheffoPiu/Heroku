# Usa imagen oficial de Node.js
FROM node:18-alpine

# Crea y sitúa el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala sólo producción
RUN npm ci --only=production

# Copia el resto de ficheros
COPY . .

# Expone el puerto que Heroku usará
EXPOSE 3000

# Comando para arrancar tu app
CMD ["npm", "start"]
