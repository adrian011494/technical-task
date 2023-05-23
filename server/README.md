# Server

This is the server component of the application. It provides an API to fetch user information and repositories from the GitHub API.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/server.git
   ```

2. Install the dependencies:

    ```bash
    cd server
    npm install
    ```

3. Start the server:

    ```bash
    npm run start:server
    ```

## API Endpoints

`GET /users/:username`: Fetches user information from the GitHub API for the specified username.

`GET /users/:username/repo`: Fetches a repository for the specified username from the GitHub API.

## Testing

```bash
npm test
```