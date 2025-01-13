# Frontend Repo

## Overview

This repository contains a frontend monorepo for the `sti-hub-frontend`, which consists of frontend applications located under the `src/` directory and an `infra/` directory for infrastructure-related components. The architecture is designed to facilitate autonomous development, deployment, and management of each service, allowing for rapid innovation and iteration.


## Project Structure

```
sti-hub-api/
├── src/
│   ├── frontend-app-one/
│   ├── frontend-app-two/
└── infra/
```

## Infrastructure

The `infra/` directory contains all infrastructure-related resources necessary for deploying the microservices. This includes configuration files for container orchestration (e.g., Docker Compose), cloud infrastructure scripts, or any other relevant infrastructure as code.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
```bash
- Docker
- Docker Compose
- Node.js / Python / Java (depending on the microservice technology stack)
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/affrentice/sti-hub-frontend
cd sti-hub-frontend
```

2. Navigate to the desired microservice directory:
```bash
cd src/frontend-app-one/ # or any other application
```
