# 🧱 NestJS Microservice Boilerplate

A production-ready **NestJS boilerplate** designed for microservice architecture. This template integrates best practices and essential features for scalable and maintainable service development.

---

## 🚀 Features

### ✅ Prisma ORM

Uses [Prisma](https://www.prisma.io/) as the database ORM with full TypeScript support. Easily manage your database with `prisma migrate`, `generate`, and `studio`.

### 🌐 i18n (Internationalization)

Integrated support for internationalization using `nestjs-i18n`. Easily localize your APIs and error messages for multilingual backends.

### 🔐 JWT Authentication from HTTP-Only Cookies

Secure user authentication by reading JWT tokens directly from HTTP-only cookies. Enhances security by preventing access via JavaScript and reduces XSS attack surface.

### ⚙️ Config Module with Zod Validation

Centralized and schema-validated configuration using `Zod`. Ensures all environment variables are strictly typed and validated at runtime.

### 🧩 Modular Structure

Follows a clean, modular structure inspired by domain-driven design. Encourages separation of concerns and scalability by feature.

### 📖 Swagger API Documentation

Auto-generates Swagger (OpenAPI) documentation using `@nestjs/swagger`. Easily explore and test your backend APIs.

### 🐳 Docker & Docker Compose

Pre-configured `Dockerfile` and `docker-compose.yml` for easy containerization and orchestration of your NestJS service and related dependencies (e.g., database).

### 🧹 Code Style with ESLint & Prettier

Enforces consistent code quality with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), pre-configured for clean and readable backend code.

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

### 2. Install dependencies (using pnpm)

```bash
pnpm install
```

### 3. Set environment variables

Copy the example environment file and customize it:

```bash
cp .env.example .env
```

### 4. Run Prisma migrations

```bash
pnpm prisma generate
pnpm prisma migrate dev
```

### 5. Start the development server

```bash
pnpm start:dev
```

---

## 🐳 Using Docker

```bash
docker-compose up --build
```

This will spin up the app and its dependencies (e.g., PostgreSQL) in isolated containers.

---

## 🧪 Available Scripts

| Script        | Description                          |
| ------------- | ------------------------------------ |
| `prebuild`    | Generate Prisma client before build  |
| `build`       | Builds the NestJS app                |
| `prestart`    | Generate Prisma client before start  |
| `start`       | Starts the app in production         |
| `start:dev`   | Starts the app in development mode   |
| `start:debug` | Starts the app in debug mode         |
| `start:prod`  | Starts the compiled app              |
| `lint`        | Runs ESLint with auto-fix            |
| `format`      | Formats code using Prettier          |
| `test`        | Runs all unit tests                  |
| `test:watch`  | Runs unit tests in watch mode        |
| `test:cov`    | Runs unit tests with coverage report |
| `test:debug`  | Debug Jest tests                     |

---

## 🧰 Technologies Used

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [JWT](https://jwt.io/)
- [Docker](https://www.docker.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [nestjs-i18n](https://github.com/toonvanstrijp/nestjs-i18n)
- [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)

---

## 📂 Folder Structure (Simplified)

```
prisma/               # Prisma schema and migrations
test/                 # Unit tests
src/
├── common/           # Common utilities and shared logic
├── config/           # Env config and validation
├── i18n/             # Localization resources
├── modules/          # Modular features
├── main.ts           # Application entry point
```

---

## 📄 License

MIT — free to use and modify for your own projects.
