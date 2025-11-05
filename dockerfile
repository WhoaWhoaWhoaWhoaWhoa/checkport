# Базовый образ с Node.js
FROM node:16-alpine

# Создаем папку приложения
WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер для раздачи статики
RUN npm install -g serve

# Открываем порт 3000
EXPOSE 3000

# Команда запуска
CMD ["serve", "-s", "build", "-l", "3000"]