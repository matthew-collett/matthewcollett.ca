# <p align="center">matthewcollett.ca</p>

<p align="center"><img width="800" alt="image" src="https://github.com/user-attachments/assets/7bbf7987-e308-426d-93ea-d953b1335e5c" /></p>
<p align="center">Personal portfolio website built with React, Tailwind CSS, and Framer Motion. Bundled with Vite and deployed on AWS using CloudFront and S3.</p>
<p align="center">
  <a href="https://github.com/matthew-collett/matthewcollett.ca/releases/latest" target="_blank"><img alt="GitHub release" src="https://img.shields.io/github/release/matthew-collett/matthewcollett.ca.svg?logo=github&color=red"></a>
    <a href="https://github.com/matthew-collett/matthewcollett.ca/actions?workflow=jobs" target="_blank"><img alt="Workflow" src="https://img.shields.io/github/actions/workflow/status/matthew-collett/matthewcollett.ca/.github%2Fworkflows%2Fjobs.yml?&logo=github"></a>
</p>

## Table of Contents

- [matthewcollett.ca](#matthewcollettca)
  - [Table of Contents](#-table-of-contents)
  - [Directory Structure](#directory-structure)
  - [Local Run](#-local-run)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)

## Directory Structure

```bash
.
├── .github/          # GitHub Actions workflows
├── .husky/           # Git hooks
├── public/           # Static public assets
└── src/              # Source code
    ├── assets/       # Static assets
    ├── components/   # UI components
    ├── layouts/      # Layout components
    └── views/        # Page components
```

## Local Run

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- Yarn package manager
- Requires S3 assets for local development. Assets are managed via CD pipeline. Local setup possible by modifying asset imports to use local resources.

### Steps

1. Clone this repository

```bash
git clone https://github.com/matthew-collett/matthewcollett.ca.git
```

2. Navigate into the project directory

```bash
cd matthewcollett.ca
```

3. Install the dependencies

```bash
yarn install
```

4. Run the development server

```bash
yarn run dev
```

5. Build for production

```bash
yarn build
```
