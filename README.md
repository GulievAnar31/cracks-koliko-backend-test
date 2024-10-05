# Web Server на Fastify

## Описание

Это простой веб-сервер, построенный с использованием **Fastify**, **PostgreSQL** и **TypeScript**. Он предназначен для демонстрации работы с API и управления данными.

## Функционал

- **Получение списка предметов** с минимальными ценами.
- **Списание баланса пользователя**.

## Установка и запуск

### Шаг 1: Установка зависимостей

Убедитесь, что у вас установлены [Docker](https://www.docker.com/get-started) и [Docker Compose](https://docs.docker.com/compose/install/).

### Шаг 2: Настройка окружения

Создайте файл `.env` в корне проекта и добавьте следующие настройки:

```plaintext
# PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=mydb
DATABASE_URL=postgres://postgres:password@db:5432/mydb

# Redis
REDIS_URL=redis://redis:6379

# Настройки приложения
APP_PORT=3000
```

### Шаг 3: Запуск проекта

Запустите проект с помощью следующей команды:

```bash
docker-compose up --build
```

## Как пользоваться

После запуска сервера, вы можете отправлять запросы к API на следующем адресе:

- **Список предметов:** `http://localhost:3000/items`

## Лицензия

Этот проект лицензируется в соответствии с [MIT License](LICENSE).