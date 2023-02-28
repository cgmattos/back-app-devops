FROM node:latest

ENV BACKEND_PORT=8080 \ 
    BACKEND_IP=0.0.0.0 \ 
    FILE_PATH=/app/pipe.txt \ 
    BACKGROUND_COLOR=#189ad3

WORKDIR /app

COPY . .

RUN npm install

CMD ["sh", "-c", "npm start"]