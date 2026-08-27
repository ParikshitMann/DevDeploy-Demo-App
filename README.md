# DevDeploy Demo App

A small, self-contained Express web application used to demonstrate the **DevDeploy** CI/CD platform. It has no database, no external API calls, and no unnecessary dependencies — once `npm install` completes, it runs entirely offline.

## What it does

The app exposes two HTTP endpoints:

- `GET /` — returns an HTML page titled "DevDeploy Demo App" with a short description and a "Status: Online" message.
- `GET /health` — returns a JSON health check: `{ "status": "ok" }`.

This app is intentionally minimal. Its purpose is not to showcase application features, but to provide a simple, deterministic Node.js project that DevDeploy can reliably clone, build, test, and deploy.

## Project Structure

```
devdeploy-demo-app/
├── src/
│   ├── app.js        # Express application (routes)
│   └── server.js     # HTTP server entry point
├── tests/
│   └── app.test.js   # Jest + Supertest tests
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## Running Locally

Requires Node.js 18 or later.

```bash
npm install
npm start
```

The server listens on `PORT` if set, otherwise on `3000`. Once running, visit:

- http://localhost:3000
- http://localhost:3000/health

## Running Tests

```bash
npm install
npm test
```

Tests are written with Jest and Supertest and run against the Express app directly (no live server required).

## Building the Docker Image

A production-style `Dockerfile` is included at the repository root.

```bash
docker build -t devdeploy-demo-app .
```

## Running the Docker Container

```bash
docker run -p 3000:3000 devdeploy-demo-app
```

Then verify:

```bash
curl http://localhost:3000
curl http://localhost:3000/health
```

## Why This Repository Exists

This repository is intentionally simple and deterministic. It exists to demonstrate **DevDeploy**, a CI/CD platform — DevDeploy is responsible for building, testing, and deploying this application. No CI/CD configuration is included in this repository itself.
