# Shortly 

## Introduction
Shortly is a URL shortener application built using Node.js, Express.js, TypeScript, MongoDB, and Mongoose. It allows users to create short, memorable links for long and unwieldy URLs.

## Table of Contents
- [Features](#features)
- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contact Information](#contact-information)

## Features

URL shortener service named "Shortly" includes features for creating, retrieving, and managing short URLs with user authentication and role-based access control. Designed RESTful APIs to handle CRUD operations for URLs and user management. Additionally, integrated rate limiting protects the application from abuse.

## 1. URL Shortening

- **Shorten URLs**: Shorten any valid URL and share it easily.Registered users can access this route.

## 2. User Management

- **User Roles**: The platform supports different user roles, including 'user', 'admin', and 'superAdmin', with varying levels of access and permissions.

- **User Authentication**: Secure user registration and login with role-based access control. The system also supports password change functionality and account management.

- **Admin Management**: Super Admins have the ability to create and manage admin accounts, ensuring that the platform is well-maintained and monitored.

## 3. Rate Limiting

- **API rate Limit**: Prevent abuse with rate limiters for user actions like creating short URLs.

## 5. Authentication and Security

- **Token-Based Authentication**: The platform uses JWT tokens for secure authentication. Access tokens are provided on login, and refresh tokens are managed via secure cookies.

## Technologies Used

Shortly Local Server is built using the following technologies:

- **Node.js**: JavaScript runtime environment for executing JavaScript code server-side.
- **Express.js**: Web framework for Node.js, providing robust features for web and mobile applications.
- **TypeScript**: Superset of JavaScript that adds static types, enabling better tooling and error checking.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **JWT (jsonwebtoken)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **bcrypt**: Library to help hash passwords.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **dotenv**: Module to load environment variables from a `.env` file into `process.env`.
- **Zod**: TypeScript-first schema declaration and validation library.
- **ESLint**: Linter tool for identifying and fixing problems in JavaScript and TypeScript code.
- **Prettier**: Code formatter for consistent code style across the project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn** (v1.x or higher)
- **MongoDB**: Make sure you have MongoDB installed and running, either locally or via a cloud service like MongoDB Atlas.

## Installation

**Clone the repository:**

   ```bash
   git clone https://github.com/RahmanRakib9/Shortly-Local-Server.git
   cd Shortly-Local-Server
   ```

## Environment Setup

Create a `.env` file in the root of your project and configure it with the following environment variables.Below is an example template:

```plaintext
# MongoDB connection string
DATABASE_URL=your_mongodb_connection_string

# Server port
PORT=your_server_port

# Environment mode
ENV=development_or_production

# Access token settings
ACCESS_TOKEN_SECRET_KEY=your_access_token_secret
ACCESS_TOKEN_EXPIRES_IN=token_expiration_time

# Refresh token settings
REFRESH_TOKEN_SECRET_KEY=your_refresh_token_secret
REFRESH_TOKEN_EXPIRES_IN=token_expiration_time

# Bcrypt settings
BCRYPT_SALT_ROUND=your_salt_round_value

# Super admin credentials
SUPER_ADMIN_USERNAME=your_super_admin_username
SUPER_ADMIN_EMAIL=your_super_admin_email
SUPER_ADMIN_PASSWORD=your_super_admin_password
```

## Usage

Once you have set up your environment and installed the necessary dependencies, you can start using the Coursify Local Server. Follow these steps to get your server up and running:

### Starting the Server

To start the server in development mode, which provides live reloading and debugging support, use the following command:

```bash
npm run start:dev
# or
yarn start:dev
```

## Deployment

Coursify Local Server is deployed and accessible on Vercel. You can view the live project at the following URL:

[Live Project on Vercel](https://shortly-psi-kohl.vercel.app/)

## API Documentation

Detailed API documentation is provided in a separate Google Docs document. This includes comprehensive information about API endpoints, data modeling, request and response formats, and other technical details. 

To view the detailed project requirement analysis, click on the link below:

[Project Requirement Analysis Document](https://docs.google.com/document/d/1hUPy09p3DG7z5JF6uJ5L5UgPOyJMMvFncb4B1_cuNQo/edit?usp=sharing)


## Testing

Automated tests are planned for the project. Testing will be added to ensure the reliability and functionality of the server. More details will be provided once the testing framework and tests are implemented.

## Contact Information

For questions, feedback, or support, please contact:

Rakibur Rahman Rakib
[Email](rakibur.rahman.rakibb@gmail.com)
[Linkedin](https://www.linkedin.com/in/rahmanrakib9/)
